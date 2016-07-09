//http://www.dofactory.com/net/template-method-design-pattern
class Template {
    constructor() {
    }

    exec(val) {
        val += ' '
        val = this.StepOne(val)
        val += ' '
        val = this.StepTwo(val)
        console.log(`result is ${val}`)
    }

    StepOne() {
    }

    StepTwo() {
    }
}

class SomeOne extends Template {
    constructor() {
        super()
    }

    StepOne(val) {
        return val + '-'
    }

    StepTwo(val) {
        return val + '+'
    }
}

class SomeTwo extends Template {
    constructor() {
        super()
    }

    StepOne(val) {
        return val + '+'
    }

    StepTwo(val) {
        return val + '-'
    }
}

let someOne = new SomeOne()
someOne.exec('-')
someOne.exec('+')
let someTwo = new SomeTwo()
someTwo.exec('-')
someTwo.exec('+')

/*
 result is - - +
 result is + - +
 result is - + -
 result is + + -
 */