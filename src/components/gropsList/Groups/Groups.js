import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import "./Groups.scss";

export default class Followers extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.props.groups.map(group => {
              return (
                <a key={group.id} href="#0" className="group-link">
                  <div className="group">
                    <Media className="postArea mt-3 p-3">
                      <Media left top className="postImgDiv mr-3 ml-3">
                        <Media className="postImg" object src={group.img} />
                      </Media>
                      <Media body>
                        <Media heading>
                          <p className="group_name">{group.name}</p>
                        </Media>
                      </Media>
                    </Media>
                  </div>
                </a>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
