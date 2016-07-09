//http://www.dofactory.com/net/mediator-design-pattern
class Mediator {
    constructor() {
        this.party = []
    }

    apply(obj) {
        this.party.push(obj)
    }

    send(text, emitter) {
        this.party.forEach(participant=> {
            if (participant === emitter) return;
            participant.receive(text)
        })
    }
}

class Obj {
    constructor(name, mediator) {
        this.name = name
        this.mediator = mediator
        this.mediator.apply(this)
    }

    send(text) {
        this.mediator.send(text, this)
    }

    receive(text) {
        console.log(`${this.name} received ${text}`)
    }
}

let mediator = new Mediator()
let william = new Obj('William', mediator)
let zzzzzzz = new Obj('zzzzzzz', mediator)

william.send('for honor!')
zzzzzzz.send('bueegulgylbuaaa!')

/*
 zzzzzzz received for honor!
 William received bueegulgylbuaaa!
 */