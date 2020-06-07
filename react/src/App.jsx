import React from 'react'
const styleObj = {fontSize:50+'px',color:'green'}
// 导入css
import './static/css/App.css'
// 组件命名首字母需大写
import NoStateCompont from './components/noStateComponents'
import StateComponent from './components/stateComponents'
import Brother1 from './components/brother1'
import Brother2 from './components/brother2'
import Crypto from './components/Crypto'
import Chat from './components/Chat'
import LifeCycle from './components/LifeCycle'
import TestHook from './components/TestHook'
import Counter from './components/Counter'
import IF from './components/IF'
import For from './components/For'
import Forms from './components/Froms'
import Refs from './components/Refs'
import PropsType from './components/PropsType'

// 以下是路由
// import Index from './components/router/index'
// import Index from './components/router/nested/index'

// 仓库
// import Index from './components/counter/index'

import Index from './components/cart/index'
// 根组件
class App extends React.Component{
    // jsx语法
    render1(){
        return (
            <div>
                {/**注释 */}
                {/* style={} 只能是字符串和非字符串 */}
                <span style={{fontSize:30+'px',color:'red'}}>hello world</span>
                <span style={styleObj}>hello world</span>
                {/* class在react是关键字 要用className定义类名 */}
                <span className="test1">hello world</span>
            </div>
        )
    }
    getValue = (val) =>{
        console.log(val);
        
    }
    render123 () {
        return <div> 
            {/* 无状态组件 */}
            {/* <NoStateCompont name='张三' age={18}/><br/> */}
            {/* 有状态组件 */}
            {/* <StateComponent callback={this.getValue} name="李四" age={34}/> */}
            {/* < Counter initCount={10} callBack={this.getValue}/> */}
            </div>
    }
    constructor() {
        super()
        this.state = {
            age:30,
            isShow:true
        }
    }
    propValue = () =>{
        this.setState({
            age:18,
            isShow :false
        })
    }

    render () {
        return <div>
            {/* <button onClick={this.propValue}>传值</button>
            <hr/> */}
            {/* <Brother1/>
            <hr/>
            <Brother2/> */}
            {/* <Chat /> */}
            {/* <Crypto /> */}
            {/* {
                this.state.isShow?<LifeCycle age={this.state.age}/>:null
            } */}
            {/* <TestHook /> */}
            {/* <IF /> */}
            {/* <For /> */}
            {/* <Index /> */}
            {/* <Forms /> */}
            {/* <Refs /> */}
            {/* <PropsType name='小明' /> */}
            <Index />
        </div>
    }
}
export default App  