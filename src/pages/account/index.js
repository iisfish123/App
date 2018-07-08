import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import list from './list/index';
import detail from './detail/index';

export default class Account extends Component {
    render() {
        return (
            <div className="detail-page">
                <Route exact path="/Account/List" component={list} />
                <Route path="/Account/Detail" component={detail} />
            </div>
        )
    }
}
