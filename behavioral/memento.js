//http://www.dofactory.com/net/memento-design-pattern
class Honey {
    constructor(state) {
        this.state = state
    }

    createMemento() {
        return new Memento(this.state)
    }

    restoreFromMemento(mem) {
        this.state = mem.state
    }
}

class Memento {
    constructor(state) {
        this.state = state
    }
}

class Store {
    constructor(mem) {
        this.mem = mem
    }
}

let o = new Honey('i love you')
let store = new Store(o.createMemento())
o.state = 'stupid bitch'
o.restoreFromMemento(store.mem)
console.log(o.state)