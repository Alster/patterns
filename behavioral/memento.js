//http://www.dofactory.com/net/memento-design-pattern
class Honey {
    constructor() {
        this.state = 'ambiguous'
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

let honey = new Honey()
honey.state = 'sweet'
let store = new Store(honey.createMemento())
honey.state = 'stupid bitch'
honey.restoreFromMemento(store.mem)
console.log(`honey is ${honey.state}`)

/*
 honey is sweet
 */