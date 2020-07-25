const EventEmitter = require('events')

class Kettle extends EventEmitter {
    start = () => {
        setTimeout(() => {
            this.emit('ready')
        }, 5000)
    }

}

const newKettle = new Kettle()
newKettle.start()
newKettle.on('ready', () => console.log('Чайник закипел'))
