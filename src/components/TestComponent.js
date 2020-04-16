import React, {Component} from 'react';

const TestComponent = ({ match :{params}}) => {
    console.log(params.postId);
    return <h1>hello world</h1>
}

export default TestComponent;