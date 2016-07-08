//http://www.dofactory.com/net/interpreter-design-pattern
class Interpreter {
    constructor() {
        this.expressions = []
        this._context = null
    }

    set context(ctx) {
        this._context = ctx
    }

    addExpression(exp) {
        this.expressions.push(exp)
    }

    run() {
        this.expressions.forEach(e=>e.exec(this._context))
        console.log(JSON.stringify(this._context))
    }
}

class Expression {
    constructor() {
    }

    exec(ctx) {
    }
}

class SetVar extends Expression {
    constructor(name, val) {
        super()
        this.name = name
        this.val = val
    }

    exec(ctx) {
        ctx[this.name] = this.val
    }
}

let interpreter = new Interpreter()
interpreter.context = {}
interpreter.addExpression(new SetVar('im', 'a'))
interpreter.addExpression(new SetVar('new', 'variables'))
interpreter.run()