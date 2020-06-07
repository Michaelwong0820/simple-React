import React, { Component } from 'react'

export default class NewsDetail extends Component {
    constructor(props) {
        super()
        const query = new URLSearchParams(props.location.search)

        this.state = {
            newId:query.get('newId'),
            address:query.get('address')
        }
    }
    render() {
        return (
            <div>
                {/* 新闻详情id--{this.props.match.params.newsId} */}
                新闻详情id--{this.state.newId} -- {this.state.address}
            </div>
        )
    }
}
