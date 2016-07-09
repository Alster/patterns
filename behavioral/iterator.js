//http://www.dofactory.com/net/iterator-design-pattern
function *Iter() {
    yield 'it is'
    yield 'javascript es6'
    yield 'feature :3'
}

let iter = Iter()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
//:3

/*
 { value: 'it is', done: false }
 { value: 'javascript es6', done: false }
 { value: 'feature :3', done: false }
 { value: undefined, done: true }
 */