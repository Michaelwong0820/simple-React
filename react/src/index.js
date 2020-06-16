import React from 'react'
import ReactDOM from 'react-dom'


import { Provider } from 'react-redux'

import store from './components/cart-Redux/store/store'
// 导入根组件
import App from './App'

// 使用Reactdom的render方法来渲染根组件
//给App及所有子组件注入store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))