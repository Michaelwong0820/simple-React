import { json } from "body-parser";
const goodList = JSON.parse(localStorage.getItem('GOODS')|| '[]')
export default function (state=goodList,action) {
    // console.log(action);
    switch (action.type) {
        case 'ADD_GOODS':
            // 深拷贝对象 不影响state的值类型
            let GoodsLIST = JSON.parse(JSON.stringify(state))
            let goods = GoodsLIST.find(item=>item.id === action.goods.id)
            if(goods) {
                goods.num += action.goods.num
            }else {
                GoodsLIST.push(action.goods)
            }
            
            return GoodsLIST
        case 'UPDATA_GOODS':
            // 深拷贝对象 不影响state的值类型
            let updataList = JSON.parse(JSON.stringify(state))
            let updataobj = updataList.find(item=>item.id === action.goods.id)
            updataobj.num = action.goods.value

            return updataList

        case 'DELETE_GOODS':
            // 深拷贝对象 不影响state的值类型
            let deleteList = JSON.parse(JSON.stringify(state))
            // deleteList = deleteList.filter(item=>{
            //     if(item.id != action.goods.id) {
            //         return item
            //     }
            // })
            //ES6 的findIndex方法获得需要删除的商品下标
            let deleteIndex = deleteList.findIndex(item=>item.id === action.goods.id)
            deleteList.splice(deleteIndex,1)
            return deleteList
        default:
            return state;
    }
}