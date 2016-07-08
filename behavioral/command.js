//http://www.dofactory.com/net/command-design-pattern
class Receiver {
    constructor(name) {
        this.name = name
    }

    receive(command) {
        console.log(`  ${this.name} was ${command.name}ed`)
    }
}

class Command {
    constructor(name) {
        this.name = name
    }
}

class Dispatcher {
    constructor() {
        this.commands = []
    }

    send(command, receiver) {
        this.commands.push(()=> {
            console.log(`preparing to ${command.name} the ${receiver.name}`)
            receiver.receive(command)
        })
    }

    execute() {
        this.commands.forEach(c=>c())
        this.commands.length = 0
    }
}

let mad = new Receiver('Isabella')
let vika = new Receiver('Ethan')

let kill = new Command('kill')
let rescue = new Command('rescue')

let dis = new Dispatcher()
dis.send(kill, mad)
dis.send(rescue, vika)

dis.execute()