//http://www.dofactory.com/net/proxy-design-pattern
class Clock {
    constructor() {
    }

    alarm() {
        console.log(`ALARM!!1`)
    }
}

class DumbClock {
    constructor() {
        this.clock = new Clock()
    }

    alarm() {
        console.log(`..zzzz`)
        setTimeout(()=>this.clock.alarm(), 500)
    }
}

let clock = new Clock()
clock.alarm()
let dumbClock = new DumbClock()
dumbClock.alarm()

/*
 ALARM!!1
 ..zzzz
 ALARM!!1
 */