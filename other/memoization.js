function Memoize(fn, thisArg) {
    let cache = []
    return function () {
        let key = Array.prototype.join.call(arguments, ' ')
        if (!cache.hasOwnProperty(key)) {
            console.log(`need to ${key}?`)
            cache[key] = fn.apply(thisArg, arguments)
        }
        else {
            console.log(`${key}? again?`)
        }
        return cache[key]
    }
}

function doSomeHard(a, b) {
    return `${a}ing is done`
}

let memoized = Memoize(doSomeHard)
console.log(memoized(`wear`, `socks`))
console.log(memoized(`wear`, `socks`))
console.log(memoized(`kill`, `bill`))