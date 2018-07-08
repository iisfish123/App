import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import vcode from './vcode/index';
import setter from './setter/index';

export default class Password extends Component {
    render() {
        return (
            <div className="Password-page">
                <Route path="/Password/Vcode" component={vcode} />
                <Route path="/Password/Setter" component={setter} />
            </div>
        )
    }
}
