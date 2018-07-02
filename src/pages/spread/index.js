import './index.less';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SpreadOne from './one';
import SpreadOne2 from './one/index2';
import SpreadTwo from './two';
import SpreadThree from './three';
import SpreadFour from './four'
import SuccessOne from './one/success';
import SuccessTwo from './two/success';
import SuccessThree from './three/success';
import Agreement from './agreement'

export default class Spread extends Component {
    render() {
        return (
            <div className="spread">
                <Route exact path="/spread/one" component={SpreadOne} />
                <Route exact path="/spread/one2" component={SpreadOne2} />
                <Route exact path="/spread/two" component={SpreadTwo} />
                <Route exact path="/spread/three" component={SpreadThree} />
                <Route exact path="/spread/four" component={SpreadFour} />
                <Route path="/spread/one/success" component={SuccessOne} />
                <Route path="/spread/two/success" component={SuccessTwo} />
                <Route path="/spread/three/success" component={SuccessThree} />
                <Route exact path="/spread/agreement" component={Agreement} />
            </div>
        )
    }
}
