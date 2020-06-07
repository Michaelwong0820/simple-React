    import React, { Component } from 'react'

    export default class LifeCycle extends Component {
        constructor() {
            console.log('constructor');

            super()
            this.state = {
                name: '小王'
            }
        }
        componentWillMount() {
            console.log('componentWillMount');

        }
        changeName = () => {
            this.setState({
                name: '小明'
            })
        }
        render() {
            console.log('render');

            return (
                <div>
                    演示生命周期
                    <br />
                    我叫--{this.state.name}
                    <span id="test">test</span>
                    <button onClick={this.changeName}>更改name</button>
                    <br />
                    <span>{this.props.age}</span>
                </div>
            )
        }
        componentDidMount() {
            // console.log(document.getElementById('test'));
            
            console.log('componentDidMount');

        }
        /*****************/
        shouldComponentUpdate() {
            return true
        }
        componentWillReceiveProps () {
            console.log('componentWillReceiveProps');
            
        }
        componentWillUpdate() {
            console.log('componentWillUpdate');

        }
        componentDidUpdate() {
            console.log('componentDidUpdate');

        }
        componentWillUnmount() {
            console.log('componentWillUnmount');
            
        }
    }
