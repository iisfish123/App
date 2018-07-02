import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoanSupermarketList from './loanIndex';


class LoanSupermarket extends Component {

    state = {};

    render () {
        return (
            <div className="loan-supermarket">
                <Route exact path={'/loanSupermarket'} component={LoanSupermarketList} />
            </div>
        )
    }
}

export default LoanSupermarket;
