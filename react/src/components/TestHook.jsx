import React, { useState,useEffect } from 'react'

function TestHook() {

    const [cont, setCont] = useState(10)
    const [name, setName] = useState('小明')
    useEffect(() => {
        console.log('effect')
    },[cont])

    return <div>
        <div>我是数字--{cont}</div>
        <button onClick={() => {
            setCont(cont + 1)
        }}>+1</button>
        <br />
        <div>我的名字是 -- {name}</div>
        <button onClick={() => {
            setName('小红')
        }}>更换</button>
    </div>


}
export default TestHook