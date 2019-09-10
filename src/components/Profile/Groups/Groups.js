// import React, { Component } from "react";
// import { Container, Row, Col, Media } from "reactstrap";
// import { connect } from "react-redux";
// import { getGroups } from "../../../actions/getGroups";
// import "../Groups/Groups.scss";
// import axios from "axios";
//
// class Groups extends Component {
//   componentDidMount() {
//     axios.get(`http://localhost:8081/api/groups`).then(res => {
//       const groups = res.data;
//       this.props.getGroups(groups);
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col>
//             <ul>
//               {this.props.groups.map(group => (
//                 <div key={group.id}>
//                   <a href="#0" className="group-link">
//                     <div className="group">
//                       <div className="groupArea  mt-3 p-3">
//                         <div className="border_bottom">
//                           <img
//                             className="groupImgDiv"
//                             src="https://www.certmetrics.com/api/ob/image/amazon/c/1"
//                           />
//                           <div className="title">{group.name}</div>
//                         </div>
//                         <div className="group-content">
//                           <p className="description">{group.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               ))}
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
//
// /*   <a key={group.id} href="#0" className="group-link">
//              <div className="group">
//                <Media className="postArea mt-3 p-3">
//                  <Media left top className="postImgDiv mr-3 ml-3">
//                    <Media className="postImg" object src={group.img} />
//                  </Media>
//                  <Media body>
//                    <Media heading>
//                      <p className="group_name">{group.name}</p>
//                    </Media>
//                  </Media>
//                </Media>
//              </div>
//            </a>*/
//
// const mapStateToProps = state => {
//   return {
//     groups: state.groups
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     getGroups: payload => dispatch(getGroups(payload))
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Groups);
