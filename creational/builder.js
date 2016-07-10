//http://www.dofactory.com/net/builder-design-pattern
//Бесполезная хрень?
class Man {
    constructor() {
        this.deadline = 'i do not have'
        this.working = 'work hard'
        this.weather = 'fine'
    }

    tellAboutYourself() {
        console.log(` ${this.deadline} a deadline, so i ${this.working} because the weather is ${this.weather}`)
    }
}

class Director {
    constructor() {
    }

    spawn(builder) {
        builder.stepOne()
        builder.stepTwo()
    }
}

class BuilderBase {
    constructor() {
        this.man = new Man()
    }

    stepOne() {
    }

    stepTwo() {
    }

    getMan() {
        return this.man
    }
}

class BuilderFreelancer extends BuilderBase {
    constructor() {
        super()
    }

    stepOne() {
        this.man.deadline = 'i have'
    }

    stepTwo() {
        this.man.working = 'sleep today'
    }
}

class BuilderWorkaholic extends BuilderBase {
    constructor() {
        super()
    }

    stepOne() {
    }

    stepTwo() {
        this.man.weather = 'nasty'
    }
}

let director = new Director()
let freelancerBuilder = new BuilderFreelancer()
let workaholic = new BuilderWorkaholic()
director.spawn(freelancerBuilder)
freelancerBuilder.getMan().tellAboutYourself()
director.spawn(workaholic)
workaholic.getMan().tellAboutYourself()

/*
 i have a deadline, so i sleep today because the weather is fine
 i do not have a deadline, so i work hard because the weather is nasty
 */