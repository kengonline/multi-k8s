import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OtherPage extends Component {
    render() {
        return (
            <div>
                <h1>Other Page</h1>
                <Link to="/">Go to home</Link>
            </div>
        );
    }
}

export default OtherPage;