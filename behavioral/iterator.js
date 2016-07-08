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