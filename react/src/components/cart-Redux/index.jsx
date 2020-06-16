import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

import './css/index.css'
import Cart from './Cart'
import goodsList from './goodsList'
import NotFound from '../router/404'

import 'element-theme-default';
// 建立组件和仓库的关系
import { connect } from 'react-redux'
class index extends Component {
    // clec = () => {
    //     let goodsLi = store.getState()
    //     let num = 0
    //     goodsLi.forEach(item => {
    //         num += item.num
    //     })
    //     return num
    // }
    componentWillMount() {
        // store.subscribe(()=>{
        //     this.setState({
        //         conut:this.clec()
        //     })
        // })
        //页面刷新时存储商品信息
        window.onbeforeunload = () => {
            localStorage.setItem('GOODS',JSON.stringify(this.props.goodsList))
        }
    }
    componentWillUnmount() {
        store.unsubscribe && store.unsubscribe()
    }
    render() {
        return (
            <Router>
                <h2 className='title'>黑马买买买-商城
                    <p>
                        <Link to='/goodsList'>
                            商品列表
                        </Link>
                        <Link to='/cart'>
                            购物车{this.props.count > 0 && <span>({this.props.count})</span>}
                        </Link>
                    </p>
                </h2>
                <Switch>
                    <Route path="/goodsList" component={goodsList} />
                    <Route path="/cart" component={Cart} />
                    <Redirect exact from='/' to='/goodsList' component={goodsList} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    const clec = () => {
        let goodsLi = state
        let num = 0
        goodsLi.forEach(item => {
            num += item.num
        })
        return num
    }
    return {
        count: clec(),
        goodsList: state
    }
}
export default connect(mapStateToProps, null)(index)