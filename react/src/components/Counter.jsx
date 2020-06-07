import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super()
        this.state = {
            count:props.initCount
        }
    }
    addCount= ()=>{
        this.setState({
            count:this.state.count +1
        },()=>{
            this.props.callBack(this.state.count)
        })
    }
    render() {
        return (
            <div>
                我是子组件----{this.state.count }
                <button onClick={this.addCount}>+1</button>
            </div>
        )
    }
}
