import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>this is home page | mr. {this.props.name}</h1>
            </div>
        );
    }
}

export default Home;