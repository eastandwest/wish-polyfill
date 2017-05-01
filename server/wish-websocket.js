const http2 = require('http2')
const fs    = require('fs')
const EventEmitter = require('events').EventEmitter
const log4js = require('log4js')
const logger = log4js.getLogger()

const options = {
    key:  fs.readFileSync(__dirname + '/../cert/server.key'),
    cert: fs.readFileSync(__dirname + '/../cert/server.crt')
};

class WebSocket extends EventEmitter {
  constructor(options) {
    super(options)

    this.options = Object.assign({}, options)
    this.clients = []

    this.startServer()
  }

  startServer(){
    http2.createServer(options, (request, response) => {
      logger.debug('Hello world!')
      response.end('Hello world!');
    }).listen(this.options.port);

    logger.info("start Wish-WebSocket server on port %d", this.options.port)
  }
}

module.exports = WebSocket
