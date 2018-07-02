import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import HelpIndex from './helpIndex';
import ProblemList from './problemList';
import AnswerDetail from './answerDetail';
import NoviceGuide from './guide';

class HelpCenter extends Component {

    state = {};

    render () {
        return (
            <div className="help-center">
                <Route exact path={'/helpCenter'} component={HelpIndex} />
                <Route path={'/helpCenter/problemList/:nav'} component={ProblemList} />
                <Route path={'/helpCenter/answerDetail/:nav/:id'} component={AnswerDetail} />
                <Route path={'/helpCenter/guide'} component={NoviceGuide}></Route>
            </div>
        )
    }
}

export default HelpCenter;