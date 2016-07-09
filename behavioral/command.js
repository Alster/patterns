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

let isabella = new Receiver('Isabella')
let ethan = new Receiver('Ethan')

let kill = new Command('kill')
let rescue = new Command('rescue')

let dis = new Dispatcher()
dis.send(kill, isabella)
dis.send(rescue, ethan)

dis.execute()

/*
 preparing to kill the Isabella
 Isabella was killed
 preparing to rescue the Ethan
 Ethan was rescueed
 */