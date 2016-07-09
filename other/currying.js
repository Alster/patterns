function Curry(fn) {
    function _subFn(collectedArgs) {
        if (collectedArgs.length >= fn.length) return fn.apply(this, collectedArgs)
        return function () {
            return _subFn(collectedArgs.concat(Array.prototype.slice.call(arguments)))
        }
    }

    return _subFn([])
}

function tellStory(who, what, where) {
    console.log(`${who} went to ${what} in the ${where}`)
}

let emptyHistory = Curry(tellStory)

emptyHistory('Marco')('kill')('school')

let davidsStory = emptyHistory('David')
let davidWentToLive = davidsStory('live')
davidWentToLive('wood')
davidWentToLive('box')
let davidWentToShit = davidsStory('shit')
davidWentToShit('park')

let annieStory = emptyHistory('Annie')
annieStory('read', 'library')