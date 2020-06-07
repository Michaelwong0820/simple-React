import React, { Component } from 'react'

export default class Froms extends Component {
    constructor() {
        super()
        this.state ={
            username:'',
            password:''
        }
    }
    handleSubmit= (e)=> {
            e.preventDefault()
            console.log(this.state);
            
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        <span>用户名：</span>
                        <input type="text" value={this.state.username} name='username' onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label htmlFor="">
                        <span>密码：</span>
                        <input type="password" value={this.state.password} name='password' onChange={this.handleChange}/>
                    </label>
                    <div>
                        <button>登录</button>
                    </div>
                </form>
            </div>
        )
    }
}
