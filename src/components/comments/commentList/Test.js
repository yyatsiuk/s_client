import React, { Component } from 'react';

class Test extends Component {

    constructor(props){
        super(props);
        this.state = {
            comment: []
        };

        // this.componentDidMount();
    }

    componentDidMount() {
        fetch('http://localhost:8081/api/comments/1')
            .then(response => response.json())
            .then(data => {
                this.setState({comment : data})
                console.log(this.state.comment);
            });
    }

    render() {
        return (
            <h1>{this.state.comment.text}</h1>
        )
    }

}

export default Test;