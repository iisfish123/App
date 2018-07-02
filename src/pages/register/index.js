import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import phone from './phone/index';
import password from './password/index';
import vcode from './vcode/index';

export default class Register extends Component {
    render() {
        return (
            <div className="register-page">
                <Route exact path="/register" component={phone} />
                <Route exact path="/register/phone" component={phone} />
                <Route path="/register/password" component={password} />
                <Route path="/register/vcode" component={vcode} />
            </div>
        )
    }
}
