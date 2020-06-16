import React, { Component } from 'react'
import {connect} from 'react-redux'
 class index extends Component {
    render() {
        return (
            <div>
                仓库中的值是 -- {this.props.count}
                <div>
                    <button onClick={this.props.asyncMinx}>-</button> &nbsp; <button onClick={this.props.add}>+</button>
                </div>
            </div>
        )
    }
}
/**
 * state 仓库的数据
 * */ 
const mapStateToProps = (state) => {
    return {
        count:state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add() {
            dispatch({type:'INCREMENT',num:2})
        },
        asyncMinx() {
            dispatch(dis=>{
                setTimeout(()=>{
                    dis({type:'DECREMENT',num:3})
                },200)
            })
        }
    }
}
//在需要的子组件中映射仓库的内容
export default connect(mapStateToProps,mapDispatchToProps)(index)