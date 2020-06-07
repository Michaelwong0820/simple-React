import React, { Component } from 'react'

import img from '../../static/images/u=2047903001,4087545182&fm=26&gp=0.jpg'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <img style={{width:'100%',height:'100%'}} src={img} alt=""/>
            </div>
        )
    }
}
