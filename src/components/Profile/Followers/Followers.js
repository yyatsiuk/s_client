import React, {Component} from "react";
import {Container, Row, Col, Media} from "reactstrap";
import './Followerss.css';


export default class Followers extends Component {
    render() {
        return <Container>
            <Row>
                <Col>
                    {this.props.followers.map(function (follower, i) {
                        // moment.locale('en');
                        return (
                            <div key={i}>
                                <Media className="postArea mt-3 p-3">
                                    <Media left top className="postImgDiv mr-3 ml-3">
                                        <Media className="postImg" object src={follower.img}/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            <span>{follower.name}</span>
                                        </Media>
                                    </Media>
                                </Media>
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    }
}

