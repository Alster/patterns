//http://www.dofactory.com/net/chain-of-responsibility-design-pattern
class Handler {
    constructor(min, max, name) {
        this.min = min
        this.max = max
        this.name = name
    }

    handle(req) {
        return req > this.min && req < this.max
    }
}

let handlers = [
    new Handler(0, 2, 'Liam'),
    new Handler(2, 4, 'Emma'),
    new Handler(4, 6, 'Mia')
]

;[0, 1, 2, 3, 4, 5, 6].forEach(req=> {
    handlers.forEach(handle=> {
        if (handle.handle(req)) console.log(`${handle.name} got a ${req} years`)
    })
})

/*
 Liam got a 1 years
 Emma got a 3 years
 Mia got a 5 years
 */