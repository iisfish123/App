import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LicenseAgreementJd from './protocolJd';
import LicenseAgreementOperator from './protocolOperator';
import LicenseAgreementTaobao from './protocolTaobao';
import Loan from './loan';
import SignUp from './signUp';
import './index.less'

export default class LicenseAgreement extends Component {
    render () {
        return(
            <div className="licenseContainer">
                <Route path="/licenseAgreement/protocolJd" component={LicenseAgreementJd} />
                <Route path="/licenseAgreement/protocolOperator" component={LicenseAgreementOperator} />
                <Route path="/licenseAgreement/protocolTaobao" component={LicenseAgreementTaobao} />
                <Route path="/licenseAgreement/loan" component={Loan} />
                <Route path="/licenseAgreement/signUp" component={SignUp} />
            </div>
        )
    }
}
