import React, {Component} from "react";
import {Container, Row, Col, Media} from "reactstrap";
import './Following.css';


export default class Following extends Component {
    render() {
        return <Container>
            <Row>
                <Col>
                    {this.props.following.map(function (following, i) {
                        return (
                            <div key={i}>
                                <Media className="postArea mt-3 p-3">
                                    <Media left top className="postImgDiv mr-3 ml-3">
                                        <Media className="postImg" object src={following.img}/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            <span>{following.name}</span>
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

