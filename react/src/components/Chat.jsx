import React, { Component } from 'react'

export default class Chat extends Component {
    
    connect = () => {
        const hoot = document.getElementById('hostID').value
        var ws = new WebSocket(hoot);
        this.ws = ws
        ws.onopen = function () {
            // Web Socket 已连接上，使用 send() 方法发送数据
            ws.send("发送数据");
            //   alert("数据发送中...");
        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            console.log(received_msg);
        };

        ws.onclose = function () {
            // 关闭 websocket
            console.log("连接已关闭...");
        };
    }
    send = ()=> {
        const chat = document.getElementById('chat').value
        this.ws.send(chat)
    }
    closeSend = () => {
        this.ws.close()
    }
    render() {
        return (
            <div>
                <p>聊天</p>
                <input type="text" id="hostID" /><button onClick={this.connect}>连接</button>&nbsp;<button onClick={this.closeSend}>关闭</button><br /><br />
                <textarea name="chat" id="chat" cols="30" rows="10"></textarea>
                <button onClick={this.send}>发送</button>
            </div>
        )
    }
}
