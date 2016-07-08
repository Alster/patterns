//http://www.dofactory.com/net/state-design-pattern
class Honey {
    constructor() {
        this.mood = Angry
    }

    doSome() {
        this.mood(this)
    }
}

function Calm(guy) {
    console.info(`honey is calm`)
    guy.mood = Angry
}

function Angry(guy) {
    console.warn(`honey is angry`)
    guy.mood = Calm
}

let guy = new Honey()
guy.doSome()
guy.doSome()
guy.doSome()
guy.doSome()