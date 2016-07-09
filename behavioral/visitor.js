//http://www.dofactory.com/net/template-method-design-pattern
//wtf!? я не понял зачем оно
class Collector {
    constructor() {
        this.elements = []
    }

    add(elem) {
        this.elements.push(elem)
    }

    accept(visitor) {
        this.elements.forEach(elem=>elem.accept(visitor))
    }
}
class Element {
    constructor(name) {
        this.name = name
    }

    accept(visitor) {
        visitor.doSomeWithMe(this)
    }
}
class Visitor {
    constructor(name) {
        this.name = name
    }

    doSomeWithMe(elem) {
        console.log(`${this.name} visited ${elem.name}`)
    }
}

let collector = new Collector()
collector.add(new Element('hell'))
collector.add(new Element('heaven'))
collector.accept(new Visitor('motherfucker'))
collector.accept(new Visitor('goodGuy'))

/*
 motherfucker visited hell
 motherfucker visited heaven
 goodGuy visited hell
 goodGuy visited heaven
 */