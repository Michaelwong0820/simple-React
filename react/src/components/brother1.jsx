import React, { Component } from 'react'
import {bus} from '../common/Bus'
export default class brother1 extends Component {
    sendValueToBro2 = ()=>{
        // console.log(222);
        bus.emit('sendValue',{name:'王生',age:12})
    }
    render() {
        return (
            <div>
                我是子组件1
                <br/>
                <button onClick={this.sendValueToBro2}>传值给组件2</button>
            </div>
        )
    }
}
