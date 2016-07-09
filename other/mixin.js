function Mix(target, mixin) {
    for (let field in mixin) {
        if (!target.hasOwnProperty(field)) target[field] = mixin[field]
    }
}

function Man(name) {
    this.name = name
}

let Introducer = {
    introduce(){
        console.log(`hello, my name is ${this.name}`)
    }
}

let BadHabits = {
    smoking: 'no',
    wino: 'no',
    tellAboutHabits(){
        console.log(`smoking? ${this.smoking}. wino? ${this.wino}`)
    }
}

let man = new Man(`Daniel`)
Mix(man, Introducer)
man.introduce()
Mix(man, BadHabits)
man.wino = `not yet`
man.tellAboutHabits()