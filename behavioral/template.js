//http://www.dofactory.com/net/template-method-design-pattern
class Template {
    constructor() {
    }

    exec(val) {
        val += ' '
        val = this.method1(val)
        val += ' '
        val = this.method2(val)
        console.log(`result is ${val}`)
    }

    method1() {
    }

    method2() {
    }
}

class SomeOne extends Template {
    constructor() {
        super()
    }

    method1(val) {
        return val + '-'
    }

    method2(val) {
        return val + '+'
    }
}

class SomeTwo extends Template {
    constructor() {
        super()
    }

    method1(val) {
        return val + '+'
    }

    method2(val) {
        return val + '-'
    }
}

let someOne = new SomeOne()
someOne.exec('-')
someOne.exec('+')
let someTwo = new SomeTwo()
someTwo.exec('-')
someTwo.exec('+')