import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import IndexPage from './pages';

export default class App extends Component {
    render() {
        console.log('env = ' + process.env.NODE_ENV);
        return (
            <Router>
                <Route path="/" component={IndexPage}/>
            </Router>
        )
    }
}
