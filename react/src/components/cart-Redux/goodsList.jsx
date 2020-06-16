import React, { Component } from 'react'
import { Button } from 'element-react';
// import store from './store/store'
import {connect} from 'react-redux'
import {addActions,addActionsAsync} from './store/actionCreators'
class goodsList extends Component {
    constructor() {
        super()
        this.state = {
            frultList: [{
                id: 1001,
                num: 1,
                name: '苹果',
                price: '10.00',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590941673017&di=4eeac0d324e86c0e2e62423a154297bd&imgtype=0&src=http%3A%2F%2Fwww.240ps.com%2Fjc%2Fdfile%2F20170814%2Fjc1708141_15.jpg'
            },
            {
                id: 1002,
                num: 1,
                name: '香蕉',
                price: '78.00',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590941646804&di=bfc2d58c6da8d410286fba4f79c409b4&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2015%2F06%2F06%2FFvZNxCm5eyda1t7Etz_BnO0jGyUF.jpg'

            },
            {
                id: 1003,
                num: 1,
                name: '西瓜',
                price: '3.00',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590941530727&di=1ec45959ebd59c5ccaa7fcbb89035899&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180524%2F95e445560f9c4f5494aa0a304635ffce.jpeg'
            },
            ]
        }
    }
    // addGoods = (goods) => {
    //     // 同步
    //     // const action = addActions(goods)
    //     // store.dispatch(action)

    //     //异步
    //     const action = addActionsAsync(goods)
    //     store.dispatch(action)
    // }
    render() {
        return (
            <div>
                <ul>
                    {this.state.frultList.map(item => {
                        return <li key={item.id}>
                            <img src={item.url} alt="" />
                            <p>{item.name}</p>
                            <p>¥{item.price}</p>
                            <Button onClick={() => this.props.addGoodsAsync(item)} style={{ marginTop: 10 }} type="success">加入购物车</Button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addGoodsAsync(item) {
            dispatch(addActionsAsync(item))
        }
    }
}
export default connect(null,mapDispatchToProps)(goodsList)