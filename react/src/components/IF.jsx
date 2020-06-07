import React, { Component } from 'react'

function Home () {
    return <div>Home Component
    </div>
}
function Posts () {
    return <div>Posts Component</div>
}

export default class IF extends Component {
    constructor () {
        super()
        this.state = {
            isHome : 'home'
     
        }
        
    }
    render() {
        let Component = null
        if(this.state.isHome == 'home') {
            Component = <Home />
        }else if(this.state.isHome == 'post'){
            Component = <Posts />
        }
        return <div>
             <button onClick={()=>{
                 this.setState({isHome : 'home'})
             }}>homt</button>  <button onClick={()=>{
                this.setState({isHome : 'post'})
            }}>post</button>
            {/* {Component} */}
            {/* 三目运算符 */}
            {/* { this.state.isHome == 'home'?<Home />:<Posts/>} */}
            {/* 与运算&&  类似 v-if和v-else的关系*/}
            {/* 根据实际情况 当只有符合条件才显示的优先考虑与运算符 */}
            {this.state.isHome === 'home' && <Home />}
            {this.state.isHome === 'post' && <Posts />}

        </div>
        // if(this.state.isHome == 'home') {
        //     return <Home />
        // }else if (this.state.isHome == 'posts') {
        //     return <Posts/>
        // }else {
        //     return null
        // }
    }
}
