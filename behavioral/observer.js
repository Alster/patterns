//http://www.dofactory.com/net/observer-design-pattern
const EventEmitter = require('events')

class SomeClass {
    constructor() {
        this.events = new EventEmitter()
        this._state = null
    }

    set state(state) {
        this._state = state
        this.events.emit('some', this._state)
    }
}

class Observer {
    constructor(emitter, name) {
        emitter.events.on('some', state=>this.receive(state))
        this.name = name
    }

    receive(msg) {
        console.log(`${this.name} just heard a "${msg}"`)
    }
}

let emitter = new SomeClass()
new Observer(emitter, 'Michael')
new Observer(emitter, 'Olivia')
new Observer(emitter, 'Alexander')

emitter.state = 'Allah Akbar'