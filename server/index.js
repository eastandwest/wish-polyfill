const WebSocket = require('./wish-websocket')

const wss = new WebSocket({port: 8080})

wss.on('connection', ws => {
  ws.on('message', data => {
    wss.clients.forEach( client => {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})




