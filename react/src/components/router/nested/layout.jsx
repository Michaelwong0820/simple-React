import React, { Component } from 'react'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import NotFound from '../404'

import '../../../static/css/nested/layout.css'
export default class layout extends Component {
    render() {

        function menu1() {
            return <div style={{ color: 'blue' }}>
                菜单1
            </div>
        }
        function menu2() {
            return <div style={{ color: 'pink' }}>
                <br />
                <br />
                <br />
                菜单2
            </div>
        }
        return (
            <div>
                <div className='layout'>
                    <div className='left'>
                        左边菜单
                        <div>
                            <Link to='/layout/menu1'>菜单1</Link>
                        </div>
                        <div>
                            <Link to='/layout/menu2'>菜单2</Link>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='content'>
                            <Switch>
                                <Route path='/layout/menu1' component={menu1} />
                                <Route path='/layout/menu2' component={menu2} />

                                <Redirect exact from='/layout/' to='/layout/menu2' />
                                <Route component={NotFound} />
                            </Switch>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
