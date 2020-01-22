import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notFound';

function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;