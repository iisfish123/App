import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import Setting from './setting/index';
import Info from './Info/index';

export default class Myset extends Component {
    render() {
        return (
            <div className="Myset-page">
                <Route exact path="/Myset" component={Setting} />
                <Route path="/Myset/Setting" component={Setting} />
                <Route path="/Myset/Info" component={Info} />
            </div>
        )
    }
}
