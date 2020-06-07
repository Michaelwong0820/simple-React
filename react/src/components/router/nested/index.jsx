import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './login'
import Layout from './layout'
import NotFound from '../404'

export default class index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/layout' component={Layout} />
                    <Redirect exact from='/' to='/login'/>
                    <Route component={NotFound}/>
                </Switch>

            </Router>
        )
    }
}
