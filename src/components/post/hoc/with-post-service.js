import React from 'react';
import {PostServiceConsumer} from '../post-service-context';

const withPostService = () => (Wrapped) => {

    return (props) => {
         return(
             <PostServiceConsumer>
                 {
                     (postService) => {
                        return (
                            <Wrapped {...props} postService = {postService}/>
                            );
                     }
                 }
             </PostServiceConsumer>
         );
    }
};

export  default withPostService;