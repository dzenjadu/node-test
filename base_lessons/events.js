const EventEmitter = require('events')

// console.log(EventEmitter)

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', `${msg} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on(
    'message',
    (data) => {
        console.log(data)
    }
)

logger.log('Hello1')
logger.log('Hello2')
logger.log('Hello3')