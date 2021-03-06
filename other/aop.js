function AOP(target, methodName, onBefore, onAfter) {
    let originalFunc = target[methodName]
    target[methodName] = function () {
        onBefore && onBefore.apply(target, arguments)
        let res = originalFunc.apply(target, arguments)
        onAfter && onAfter.apply(target, arguments)
        return res;
    }
}

class Man {
    constructor(name) {
        this.name = name
    }

    receive(message) {
        console.log(`i got a message '${message}'`)
    }
}

let Rat = {
    spyBefore(message){
        console.log(`${this.name} is ready to receive '${message}'`)
    },
    spyAfter(message){
        console.log(`${this.name} successfully received '${message}'`)
    }
}

let man = new Man('David')
AOP(man, 'receive', Rat.spyBefore, Rat.spyAfter)

man.receive('the attack will be tomorrow')

/*
 David is ready to receive 'the attack will be tomorrow'
 i got a message 'the attack will be tomorrow'
 David successfully received 'the attack will be tomorrow'
 */