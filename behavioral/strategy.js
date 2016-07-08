//http://www.dofactory.com/net/strategy-design-pattern
class Obj {
    constructor(strategy) {
        this.strategy = strategy
    }

    be() {
        this.strategy()
    }
}

function Careful() {
    console.log(`im careful`)
}
function Reckless() {
    console.log(`im reckless`)
}

let careful = new Obj(Careful)
let reckless = new Obj(Reckless)
careful.be()
reckless.be()