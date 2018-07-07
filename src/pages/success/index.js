import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import Charge from './charge/index';

export default class Success extends Component {
    render() {
        return (
            <div className="card-page">
                <Route exact path="/Success/Charge" component={Charge} />
            </div>
        )
    }
}
