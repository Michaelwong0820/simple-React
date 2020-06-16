import React, { Component } from 'react'
import store from './store/store'

import { Table,Button,InputNumber,MessageBox,Message } from 'element-react'
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
                // prop:"num"
                render:data => {
                    return <InputNumber defaultValue={data.num} onChange={(value)=>{this.editChange(data.id,value)}} min={1} size="small" value={data.num}></InputNumber>
                }

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
                    return <Button type="danger" onClick={this.deleteGoods.bind(this,data.id)}> 删除</Button>
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
        store.subscribe(()=>{
            this.setState({
                goodsList:store.getState(),
                toTalPrice:this.calcTotalPrice()
            })
        })
    }
    calcTotalPrice = () => {
        let total = 0
        store.getState().forEach(item=>{
            total += item.num * item.price
        })
        return total
    }
    editChange = (id,value) => {
        console.log(id,value);
        store.dispatch({
            type:"UPDATA_GOODS",
            goods:{
                id,
                value
            }
        })
    }
    deleteGoods = (id)=>{
        // console.log(id);
        MessageBox.confirm('此操作将永久删除该商品, 是否继续?', '提示', {
            type: 'warning'
          }).then(() => {
            store.dispatch({
                type:'DELETE_GOODS',
                goods:{
                    id
                }
            })
            Message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            Message({
              type: 'info',
              message: '已取消删除'
            });
          });
        
        
    }
    componentWillUnmount() {
        store.unsubscribe&&store.unsubscribe()
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
