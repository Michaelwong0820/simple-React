import {ADD_GOODS,UPDATE_GOODS,DELETE_GOODS} from './actionType'
/**
 * 提取共用方法
*/

//增加
export function addActions(item) {
    return { type: ADD_GOODS, goods:item }
}

// 异步方法
export function addActionsAsync (item) {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addActions(item))
        },200)
    }
}
//修改
export function updateActions(item) {
    return {type: UPDATE_GOODS , goods:item}
}

export function deleteActions(item) {
    return {type:DELETE_GOODS , goods:item}
}