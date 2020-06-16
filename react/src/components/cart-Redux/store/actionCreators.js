/**
 * 提取共用方法
*/
export function addActions(item) {
    return { type: 'ADD_GOODS', goods:item }
}

// 异步方法
export function addActionsAsync (item) {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addActions(item))
        },200)
    }
}