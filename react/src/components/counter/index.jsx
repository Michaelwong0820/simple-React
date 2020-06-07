import React, { Component } from 'react'
import store from './store/store'
export default class index extends Component {
    constructor() {
        super()
        this.state = {
            mycount: store.getState()
        }
    }
    mint = () => {
        store.dispatch({ type: 'DECREMENT',num: 1 });
    }
    add = () => {
        store.dispatch({ type: 'INCREMENT',num : 2 });
    }
    componentWillMount() {
        store.subscribe(() =>
            // console.log(store.getState())
            this.setState( {
                mycount:store.getState()
            })
        );
    }
    render() {
        return (
            <div>
                仓库中的值是 -- {this.state.mycount}
                <div>
                    <button onClick={this.mint}>-</button> &nbsp; <button onClick={this.add}>+</button>
                </div>
            </div>
        )
    }
}
