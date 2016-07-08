//http://www.dofactory.com/net/strategy-design-pattern
class Some {
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

let careful = new Some(Careful)
let reckless = new Some(Reckless)
careful.be()
reckless.be()