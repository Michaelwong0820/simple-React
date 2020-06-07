import { json } from "body-parser";

export default function (state=[],action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_GOODS':
            // 深拷贝对象 不影响state的值类型
            let GoodsLIST = JSON.parse(JSON.stringify(state))
            GoodsLIST.push(action.goods)
            return GoodsLIST
        default:
            return state;
    }
}