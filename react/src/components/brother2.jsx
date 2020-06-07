import React, { Component } from 'react'
import {bus} from '../common/Bus'
export default class brother2 extends Component {
    constructor () {
        super ()
        this.state = {
            name:'',
            age:0
        }
        bus.on('sendValue',data=>{
            // console.log(data);
            this.setState(data)
            
        })
    }
    render() {
        return (
            <div>
                我是子组件2--{this.state.name}--{this.state.age}
            </div>
        )
    }
}
