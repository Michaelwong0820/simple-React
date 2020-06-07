import React, { Component } from 'react'

import NewsList from './NewsList'//路由组件
import FoodsList from './FoodsList'//路由组件
import NotFound from './404'//路由组件
import NewsDetail from './NewsDetail'//路由组件

// HashRouter as Router 作用是替换HashRouter
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
export default class index extends Component {
    render() {
        return (
            // Router路由容器
            <Router>
                {/* Link 声明导航 */}
                <Link to="/newsList">新闻列表</Link>&nbsp;
                <Link to="foodsList">食品列表</Link>
                <hr />
                {/* 设置路由跳转的组件 */}
                {/* exact 路由精准匹配 */}
                {/* <Route exact path="/" component = {NewsList}/> */}
                <Switch>
                    {/* <Redirect from="/" to="/foodsList"/> */}
                    <Route path="/newsList" component={NewsList} />
                    <Route path="/foodsList" component={FoodsList} />
                    {/* params传参 */}
                    {/* <Route path="/NewsDetail/:newsId" component={NewsDetail} /> */}
                    {/* query传参 */}
                    <Route path="/NewsDetail" component={NewsDetail} /> 
                    <Redirect exact from="/" to="/foodsList"/>

                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
