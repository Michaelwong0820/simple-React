import React, { Component } from 'react'

export default class For extends Component {
    constructor () {
        super()
        this.state = {
            persons : [
                {id:1001,name:'josh',age:10},
                {id:1002,name:'ash',age:12},
                {id:1003,name:'ken',age:13},
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.persons.map(item => {
                            return <li key={item.id}>
                                {item.name} -- {item.age}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
