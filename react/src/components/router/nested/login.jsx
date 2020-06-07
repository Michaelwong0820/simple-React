import React, { Component } from 'react'
import '../../../static/css/nested/login.css'

export default class login extends Component {
    login= ()=> {
        this.props.history.push('/layout')
    }
    render() {
        return (
            <div className="login">
                <div>
                    <span>用户名：</span>
                    <input type="text"/>
                </div>
                <div>
                    <span>密码：</span>
                    <input type="text"/>
                </div>
                <button onClick={this.login}>登录</button>
            </div>
        )
    }
}
