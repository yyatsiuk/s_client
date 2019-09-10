import React, {Component} from "react";

import API from "../../../utills/API";

class Post extends Component {

    state = {
        text: ""
    };
    
    componentWillMount() {
        API.get("/posts/get-top-rated").then(resp => {
            this.setState({
               text: resp.data.text
            });
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className='hero-widget'>
                <div className='hero-widget__img'>
                    {/* For image */}
                </div>
                <div className='hero-widget__text'>
                    <p>
                        {this.state.text}
                    </p>
                </div>
                <div className='hero-widget__footer'>
                    <div className='hero-widget__footer__column'>
                        <h4>Our Text:</h4>
                        <div className="account">
                            <div className="account__wrapper"><a className="account__display-name"
                                                                 href="https://fosstodon.org/@fosstodon">
                                <div className="account__avatar-wrapper">
                                </div>
                                <span className="display-name"><bdi><strong
                                    className="display-name__html emojify">Our Text</strong></bdi><span
                                    className="display-name__account">@sonet</span></span></a>
                            </div>
                        </div>
                    </div>
                    <div className='hero-widget__footer__column'>
                        <h4>Server stats:</h4>
                        <div style={{'display': 'flex'}}>
                            <div className='hero-widget__counter' style={{'width': '50%'}}>
                                <strong>1000k</strong>
                                <span>users</span>
                            </div>
                            <div className='hero-widget__counter' style={{'width': '50%'}}>
                                <strong>1000k</strong>
                                <span>
active
<abbr title='Monthly Active Users (MAU)'>*</abbr>
</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;