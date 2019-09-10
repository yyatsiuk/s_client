import React, {Component} from "react";
import { Container, Row, Col, Media } from "reactstrap";
import './Posts.css';
import PostListItem from "../../post/post-list-item";



export default class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    {this.props.posts.map(function (post, i) {
                        // moment.locale('en');

                        return (
                            <div key={post.id}><PostListItem post={post} /></div>

                            //<div key={i}>
                           //     <Media className="postArea mt-3 p-3">
                             //       <Media left top className="postImgDiv mr-3 ml-3">
                               //         <Media className="postImg" object src={post.img} alt={post.title}/>
                                 //   </Media>
                                   // <Media body>
                                     //   <Media heading>
                                       //     <span>{post.title}</span>
                                       // </Media>
                                       // <span>{post.text}</span>

                                //    </Media>
                              //  </Media>
                            //</div>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    }
}

