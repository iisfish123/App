import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import Serverlist from './serverlist/index';
import Servera from './servera/index';
import Serverb from './serverb/index';

export default class Server extends Component {
    render() {
        return (
            <div className="Server-page">
                <Route exact path="/Server/Serverlist" component={Serverlist} />
                <Route exact path="/Server/Servera" component={Servera} />
                <Route exact path="/Server/Serverb" component={Serverb} />
            </div>
        )
    }
}
