import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Home from './containers/Home';
import Users from './containers/users';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/usuarios' component={Users} />
            </Switch>
        </Router>
    );
}

export default Routes;