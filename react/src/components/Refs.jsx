import React, { Component } from 'react'

export default class Refs extends Component {
    constructor() {
        super() 
        this.getRef = React.createRef()
    }
    componentDidMount () {
        this.refs.myref.focus()
    }
    getFile = () => {
        // console.log(this.getRef.current);
        let file = this.getRef.current.files[0]
        console.log(file);
        
    }
    render() {
        return (
            <div>
                <input type="text" ref='myref'/>
                <input type="file" name="file" id="" ref={this.getRef}/>
                <br/>
                <button onClick={this.getFile}>获取文件</button>
            </div>
        )
    }
}
