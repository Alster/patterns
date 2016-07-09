//SHIT
class COP {
    constructor(neededComponents) {
        this.components = {}
        neededComponents.forEach(comp=> {
            let createdComp = new comp()
            createdComp.getComponent = type=>this.getComponent(type.name)
            this.components[createdComp.constructor.name] = createdComp
        })
        for (let compName in this.components)
            this.components[compName].init && this.components[compName].init()
    }

    getComponent(name) {
        return this.components[name]
    }
}

class Head {
    constructor() {
    }

    init() {
        this.getComponent(Ass).fart()
    }

    think() {
        console.log('cognitive functions are not configured')
    }

}

class Ass {
    constructor() {
    }

    init() {
        this.getComponent(Head).think()
    }

    fart() {
        console.log('what the fuck?!')
    }
}

new COP([Head, Ass])

/*
 what the fuck?!
 cognitive functions are not configured
 */