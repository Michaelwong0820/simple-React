import React from 'react'

class StateComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            nickname: '王五'
        }
        this.clickMe2 = this.clickMe2.bind(this)
    }
    clickMe() {
        console.log(111, this);
        this.setState({
            nickname: '暴怒'
        })
    }
    clickMe2() {
        this.setState({
            nickname: '坎坷'
        })
    }
    clickMe3 = () => {
        // 高级语法，需要安装插件支持
        //@babel/plugin-proposal-class-properties
        // console.log(this);

        this.setState({
            nickname: '哦呵'
        })
    }
    valueToFather = () => {
        // console.log(this);

        this.props.callback(this.state.nickname)
    }
    render() {
        // console.log(this.props);

                return <div>
                        我是有状态组件---{this.props.name}--{this.props.age}
                        我是子组件的值---{this.state.nickname}
                    <br />
                    {/* 我是子组件的值---{this.state.nickname} */}
                    {/* 事件绑定 */}
                    {/* 每次触发点击事件都需要绑定this */}
                    <button onClick={this.clickMe.bind(this)}>更改1</button>
                    <br />
                    {/* 在组件生成的时候就可以绑定this */}
                    {/* 我是子组件的值---{this.state.nickname} */}
                    <button style={{ background: 'red' }} onClick={this.clickMe2}>更改2</button>
                    <br />
                    {/* 使用箭头函数 */}

                    <button onClick={this.clickMe3}>更改3</button>
                    <br />
                    <button onClick={this.valueToFather}>子组件传值给父组件</button>
                </div>
            }
}

export default StateComponent