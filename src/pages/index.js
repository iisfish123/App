import React, { Component } from 'react';
import { Switch, Route, Link, Redirect} from 'react-router-dom';
import routes from './routes';

export default class IndexPage extends Component {
    componentDidMount() {
        this.updateTitle(this.props);
    }

    componentWillUpdate(nextProps) {
        this.updateTitle(nextProps);
    }

    updateTitle = (props) => {
        routes.forEach(route => {
                if (route.path === props.location.pathname) {
                    document.title = route.title;
                }
        })
    }

    render() {
        return (
            <div className="index-page">
                <Switch>

                    {
                        routes.map((item, key) => item.level === 1 && <Route key={key} path={item.path} component={item.component}/>)
                    }
                    {
                        <Redirect from="/" to="/homePage" />
                    }
                </Switch>
            </div>
        )
    }
}
