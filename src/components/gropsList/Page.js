import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import "./Page.scss";
import Groups from "./Groups";
import Search from "./Search";
import ListOfPages from "./ListOfPages";

export default class Page extends Component {
    render() {
        return (
            <div className="stars">
                <div className="twinkling">
                    <Container className="group-page">
                        <div className="profileHeader">
                            <Row className="profileHeaderGrid">
                                <Col xs={{sise: 12, offset: 1}} sm="7" md="9">
                                    <Row>
                                        <Col xs="12" lg="7">
                                            <div className="profile_info">
                                                <i class="fa fa-users" aria-hidden="true"/>
                                                <p id="group_name">Groups</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col xs="10" lg="9">
                                <div className="search">
                                    <Search/>
                                </div>
                            </Col>
                            <Col xs="10" lg="9">
                                <div className="groups_area">
                                    <Groups/>
                                </div>
                            </Col>
                            <Col xs="2" lg="3">
                                <ListOfPages/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
