//http://www.dofactory.com/net/bridge-design-pattern
class Worker{
    constructor(){}
    buildWell(target){}
    buildBad(target){}
}

class RightWorker extends Worker{
    constructor(){
        super()
    }
    buildWell(target){
        this.build(target, `fully`)
    }
    buildBad(target){
        this.build(target, `almost`)
    }
    build(target, perfect){
        console.log(`${target} built ${perfect} perfectly`)
    }
}

class Emigrant extends Worker{
    constructor(){
        super()
    }
    buildWell(target){
        this.tryBuild(target, `well`)
    }
    buildBad(target){
        this.tryBuild(target, `bad`)
    }
    tryBuild(target, which){
        console.log(`what? ${which} ${target}? haha, do shit`)
    }
}

class House{
    constructor(worker){
        this.worker = worker
    }
}

class Penthouse extends House{
    constructor(worker){
        super(worker)
    }
    build(){
        this.worker.buildWell('penthouse')
    }
}

class Ruin extends House{
    constructor(worker){
        super(worker)
    }
    buildSomehow(){
        this.worker.buildBad('ruin')
    }
}

let rightWorker = new RightWorker()
let emigrant = new Emigrant()

let gracefulPenthouse = new Penthouse(rightWorker)
gracefulPenthouse.build()
let frugalPenthouse = new Penthouse(emigrant)
frugalPenthouse.build()
let typicalRuins = new Ruin(rightWorker)
typicalRuins.buildSomehow()
let uglyRuins = new Ruin(emigrant)
uglyRuins.buildSomehow()