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

let pipeline = new SomePipeline()

function checkAuthorization(user) {
    if (user.pass === 'rightPass') user.id = 'abracadabra'
    delete user.pass
}
function checkPermissions(user) {
    if (!user.id) return;
    if (user.id === 'abracadabra') user.permission = 'god'
}

pipeline.use(checkAuthorization)
pipeline.use(checkPermissions)

let godUser = pipeline.run({pass: 'rightPass'})
console.log(`result is ${JSON.stringify(godUser)}`)
let anon = pipeline.run({pass: 'wrongPass'})
console.log(`result is ${JSON.stringify(anon)}`)

/*
 result is {"id":"abracadabra","permission":"god"}
 result is {}
 */