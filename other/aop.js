function AOP(target, methodName, onBefore, onAfter) {
    let originalFunc = target[methodName]
    target[methodName] = function () {
        onBefore && onBefore.apply(target, arguments)
        originalFunc.apply(target, arguments)
        onAfter && onAfter.apply(target, arguments)
    }
}

class Obj {
    constructor(name) {
        this.name = name
    }

    receive(message) {
        console.log(`i got a message ${message}`)
    }
}

let Logger = {
    logBefore(message){
        console.log(`${this.name} is ready to receive '${message}'`)
    },
    logAfter(message){
        console.log(`${this.name} successfully received '${message}'`)
    }
}

let man = new Obj('David')
AOP(man, 'receive', Logger.logBefore, Logger.logAfter)

man.receive('azazaz')