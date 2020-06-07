const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8081 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    // console.log('received: %s', message);
    if(message.includes('好')){
        ws.send('我很好')
    }else if(message.includes('吃')){
        ws.send('我吃了')
    }else {
        ws.send('你大爷')
    }
  });
 
  ws.send('welcome!');
});