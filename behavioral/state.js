//http://www.dofactory.com/net/state-design-pattern
class Honey {
    constructor() {
        this.mood = Angry
    }

    doSome() {
        this.mood(this)
    }
}

function Calm(honey) {
    console.info(`honey is calm`)
    honey.mood = Angry
}

function Angry(honey) {
    console.warn(`honey is angry`)
    honey.mood = Calm
}

let honey = new Honey()
honey.doSome()
honey.doSome()
honey.doSome()
honey.doSome()