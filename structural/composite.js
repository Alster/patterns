//http://www.dofactory.com/net/composite-design-pattern
class NodeBase {
    constructor(name) {
        this.name = name
    }

    display(level) {
        return level + this.name
    }
}

class Composite extends NodeBase {
    constructor(name) {
        super(name)
        this.list = []
    }

    add(node) {
        this.list.push(node)
    }

    display(level) {
        return `${super.display(level)}\n${this.list.map(e=>e.display(level + '--')).join(`\n`)}`
    }
}

class Node extends NodeBase {
    constructor(name) {
        super(name)
    }
}

let child = new Composite('child')
let pets = new Composite('pets')
pets.add(new Node('hamster'))
child.add(pets)
let family = new Composite('family')
family.add(new Node('dad'))
family.add(new Node('mom'))
child.add(family)

console.log(child.display(''))

/*
 child
 --pets
 ----hamster
 --family
 ----dad
 ----mom
 */