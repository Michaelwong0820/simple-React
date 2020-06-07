import React, { Component } from 'react'
import store from './store/store'

import { Table,Button } from 'element-react'
export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            columns: [{
                label: '名字',
                prop: 'name'
            },
            {
                label:'图片',
                render:data=>{
                    return <img src={data.url} style={{width:100,height:60}} alt=""/>
                }
            },
            {
                label:'数量',
                prop:"num"

            },
            {
                label:'单价',
                prop:"price",
            },
            {
                label:'总价',
                render:data => {
                return <span>{data.num * data.price}</span>
                }
            },
            {
                label:'操作',
                render: data => {
                    return <Button type="danger"> 删除</Button>
                }
            }
            ],
            goodsList:[],//产品数据列表
            toTalPrice:this.calcTotalPrice(),//总价

        }
    }
    componentWillMount() {
        this.setState({
            goodsList:store.getState()
        })
    }
    calcTotalPrice = () => {
        let total = 0
        store.getState().forEach(item=>{
            total += item.num * item.price
        })
        return total
    }
    render() {
        return (
            <div>
                <Table 
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.goodsList}
                />
                <p>总价：{this.state.toTalPrice}</p>
                <Button type="success">结算</Button>
            </div>
        )
    }
}
