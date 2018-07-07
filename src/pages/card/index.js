import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import SelectCard from './selectCard/index';
import Create from './Create/index';

export default class Card extends Component {
    render() {
        return (
            <div className="card-page">
                <Route exact path="/Card/SelectCard" component={SelectCard} />
                <Route exact path="/Card/Create" component={Create} />
            </div>
        )
    }
}
