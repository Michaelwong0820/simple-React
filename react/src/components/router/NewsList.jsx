import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* <Link to="/NewsDetail/1001">
                            新闻1
                        </Link> */}
                        {/* <Link to="/NewsDetail?newId=1001&address=中国">
                            新闻1
                        </Link> */}
                        {/* 第二种方式 */}
                        <Link to={{pathname:'NewsDetail',search:'?newId=1001&address=中国'}}>
                            新闻1
                        </Link>
                    </li>
                    <li>新闻2</li>
                    <li>
                        {/* <Link to="/NewsDetail/1003">
                            新闻3
                        </Link> */}
                        <Link to="/NewsDetail?newId=1003&address=日本">
                            新闻3
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
