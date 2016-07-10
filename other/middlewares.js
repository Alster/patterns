class SomePipeline {
    constructor() {
        this.middlewares = []
    }

    use(fn) {
        this.middlewares.push(fn)
    }

    run(someVal) {
        this.middlewares.forEach(fn=>fn(someVal))
        return someVal
    }
}

class Human {
    constructor(name, sex, age) {
        this.name = name
        this.sex = sex
        this.age = age
    }

    tellAboutYourself() {
        console.log(`im ${this.name}, very ${this.age} ${this.sex}, have a ${this.specAbility}`)
    }
}

let pipeline = new SomePipeline()

function setSexuality(human) {
    human.age = human.age < 25 ? 'sexy' : 'skilled'
}

function setRole(human) {
    human.sex = human.sex === 'male' ? 'soldier' : 'queen'
}

function setTentacles(human) {
    human.specAbility = human.age === 'sexy' ? 'tentacles' : 'stinking ass'
}

pipeline.use(setSexuality)
pipeline.use(setRole)
pipeline.use(setTentacles)

pipeline.run(new Human('Henry', 'male', 54)).tellAboutYourself()
pipeline.run(new Human('Zoe', 'female', 22)).tellAboutYourself()
pipeline.run(new Human('Riley', 'female', 35)).tellAboutYourself()

/*
 im Henry, very skilled soldier, have a stinking ass
 im Zoe, very sexy queen, have a tentacles
 im Riley, very skilled queen, have a stinking ass
 */