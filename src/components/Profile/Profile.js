import React, {Component} from 'react';
import {Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import './Profile.scss';
import Posts from './Posts'
import classnames from 'classnames';
import Followers from './Followers'
import Following from "./Following";
import ListOfPages from '../ListOfPages'
import {connect} from "react-redux";
import Modal from "reactstrap/es/Modal";
import API from "../../utills/API";
import addUserLoginData from "../../actions/addUserLoginData";
import addUserLoginErrors from "../../actions/addUserLoginErrors";
import addUserAuntificatedData from "../../actions/addUserAuntificatedData";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    state = {
        activeTab: '1',
        modalIsOpen: false,
        nickname: this.props.user.nickname,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        city: this.props.user.city,
        country: this.props.user.country,
        planet: this.props.user.planet,
    };

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    nicknameChange(e) {
        this.setState(
            {nickname: e.target.value}
        );
    }

    firstNameChange(e) {
        this.setState(
            {firstName: e.target.value}
        );
    }

    lastNameChange(e) {
        this.setState(
            {lastName: e.target.value}
        );
    }

    cityNameChange(e) {
        this.setState(
            {city: e.target.value}
        );
    }

    countryNameChange(e) {
        this.setState(
            {country: e.target.value}
        );
    }

    planetNameChange(e) {
        this.setState(
            {planet: e.target.value}
        );
    }

    openModal() {
        console.log(this.props.user.token);
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
        console.log(this.state);
    }


    handleSubmit = (event) => {
        console.log(this.props.user.token);
        event.preventDefault();
        API.patch(`/users/${this.props.user.id}`, {
            nickname: this.state.nickname,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            country: this.state.country,
            planet: this.state.planet
        }, {headers: {
                Authorization : `Bearer_${this.props.user.token}`
            }
        })
            .then(resp => {
                this.props.addUserAuntificatedData({
                    id: resp.data.id,
                    firstName: resp.data.firstName,
                    lastName: resp.data.lastName,
                    email: resp.data.email,
                    nickname: resp.data.nickname,
                    city: resp.data.city,
                    country: resp.data.country,
                    planet: resp.data.planet,
                    token: this.props.user.token,
                });
            })
            .then(function (data) {
                console.log('Request success: ', data);
                window.location.reload();
            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });
        this.closeModal();
    };


    render() {
        return <div className="stars">
            <div className="twinkling">
                <Container style={{display: "flex", flexDirection: "column"}}>

                    <div className="backgroundProfileImgDiv">
                        <img className="backgroundProfileImg"
                             src="https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
                             alt=""/>
                    </div>
                    <div className="profileHeader">

                        <Row className="profileHeaderGrid">
                            <Col xs="6" sm="4" md="2" className="profile_logo_col">
                                <div className="profile_logo_container">
                                    <img src="https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg"
                                         className="profile_logo" alt="Logo"/>
                                </div>
                            </Col>
                            <Col xs={{sise: 12, offset: 1}} sm="7" md="9">
                                <Row>
                                    <Col xs="12" lg="7">
                                        <div className="profileName">
                                            {this.props.user.id !== null ?
                                                <div>
                                                    <div className="mb-2"><span
                                                        className="user-name">{this.props.user.firstName} {this.props.user.lastName}</span><br/>
                                                    </div>
                                                    <div><span
                                                        className="user-nickname">@{this.props.user.nickname}</span>
                                                    </div>
                                                </div> :
                                                <div>
                                                    <div className="mb-2"><span
                                                        className="user-name">Unlogged user</span><br/>
                                                    </div>
                                                    <div><span
                                                        className="user-nickname">@PleaseLogIn</span>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </Col>
                                    <Col xs="12" lg="5">
                                        <button onClick={this.openModal}
                                                className="btn btn-info profile-button mt-4 mr-4">
                                            Edit Profile
                                        </button>
                                        <Modal
                                            isOpen={this.state.modalIsOpen}
                                            onRequestClose={this.closeModal}
                                            contentLabel="Example Modal">
                                            <div className="row editUserModal">
                                                <div className="editUserModalHeader col-12 pt-2 d-flex flex-row">
                                                    <button className="closeModalButton m-1" onClick={this.closeModal}><i
                                                        className="fa fa-times"/></button>
                                                    <span className="edit-your-info-text text-left">Edit profile</span>
                                                    <form className="edit-save-form d-flex justify-content-end"
                                                          onSubmit={this.handleSubmit}>
                                                        <button
                                                            className="btn btn-primary editUserSaveButton float-xs-right">Save
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="col-12 editUserModalElementsDiv d-flex flex-column mt-2">
                                                    <div className="editUserModalElement d-flex flex-column">
                                                        <span className="textareaEditUserUpper">Nickname</span>
                                                        <input value={this.state.nickname}
                                                               onChange={(e) => this.nicknameChange(e)}
                                                               placeholder="Add your nickname"
                                                               className="textareaEditUser "/>
                                                    </div>
                                                    <div className="editUserModalElement d-flex flex-column">
                                                        <span className="textareaEditUserUpper">First Name</span>
                                                        <input value={this.state.firstName}
                                                               onChange={(e) => this.firstNameChange(e)}
                                                               placeholder="Add your first name"
                                                               className="textareaEditUser"/>
                                                    </div>
                                                    <div className="editUserModalElement d-flex flex-column">
                                                        <span className="textareaEditUserUpper">Last Name</span>
                                                        <input value={this.state.lastName}
                                                               onChange={(e) => this.lastNameChange(e)}
                                                               placeholder="Add your last name"
                                                               className="textareaEditUser"/>
                                                    </div>
                                                    <div className="editUserModalElement d-flex flex-column">
                                                        <span className="textareaEditUserUpper">City</span>
                                                        <input value={this.state.city}
                                                               onChange={(e) => this.cityNameChange(e)}
                                                               placeholder="Add your city"
                                                               className="textareaEditUser"/>
                                                    </div>
                                                    <div className="editUserModalElement d-flex flex-column">
                                                        <span className="textareaEditUserUpper">Country</span>
                                                        <input value={this.state.country}
                                                               onChange={(e) => this.countryNameChange(e)}
                                                               placeholder="Add your country"
                                                               className="textareaEditUser"/>
                                                    </div>
                                                    <div className="editUserModalElement d-flex flex-column">
                                                        <span className="textareaEditUserUpper">Planet</span>
                                                        <input value={this.state.planet}
                                                               onChange={(e) => this.planetNameChange(e)}
                                                               placeholder="Add your planet"
                                                               className="textareaEditUser"/>
                                                    </div>

                                                </div>
                                            </div>
                                        </Modal>

                                        <button className="btn btn-info profile-button mt-4 mr-4">
                                            Follow
                                        </button>

                                        <button className="btn btn-info profile-button mt-4">
                                            Send Message
                                        </button>
                                    </Col>
                                    <Col>
                                        <div className="postsToggle mt-2">
                                            <Nav tabs>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: this.state.activeTab === '1'})}
                                                        onClick={() => {
                                                            this.toggle('1');
                                                        }}>
                                                        <span className="navText">Posts</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: this.state.activeTab === '2'})}
                                                        onClick={() => {
                                                            this.toggle('2');
                                                        }}>
                                                        <span className="navText">Followers</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: this.state.activeTab === '3'})}
                                                        onClick={() => {
                                                            this.toggle('3');
                                                        }}>
                                                        <span className="navText">Following</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: this.state.activeTab === '4'})}
                                                        onClick={() => {
                                                            this.toggle('4');
                                                        }}>
                                                        <span className="navText">Groups</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </div>
                    <Row>
                        <Col xs="10" lg="9">
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Posts/>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Followers/>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Following/>
                                </TabPane>
                                <TabPane tabId="4">
                                </TabPane>
                            </TabContent>
                        </Col>
                        <Col xs="2" lg="3">
                            <ListOfPages/>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    addUserAuntificatedData: payload => dispatch(addUserAuntificatedData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);