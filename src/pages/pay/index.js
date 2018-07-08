import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import setmoney from './setmoney/index';
import over from './over/index';
import start from './start/index';

export default class Pay extends Component {
    render() {
        return (
            <div className="Pay-page">
                <Route exact path="/Pay" component={start} />
                <Route exact path="/Pay/Setmoney" component={setmoney} />
                <Route path="/Pay/Over" component={over} />
                <Route path="/Pay/Start" component={start} />
            </div>
        )
    }
}
