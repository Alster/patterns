let cache = {}

function timeout(time) {
    return new Promise(resolve=>setTimeout(resolve, time))
}

function makeRealRequest(url) {
    return timeout(300).then(()=>'some answer')
}

function Request(url) {
    let cacheUpdateId = ++Request.counter
    return new Promise(resolve=> {
        console.time('cache updated ' + cacheUpdateId)
        if (cache.hasOwnProperty(url)) resolve(cache[url])
        makeRealRequest(url).then(answer=> {
            console.timeEnd('cache updated ' + cacheUpdateId)
            cache[url] = answer
            resolve(answer)
        })
    })
}
Request.counter = 0

function clientRequest(url, time) {
    let requestId = ++clientRequest.counter
    return timeout(time)
        .then(()=>console.time('request ' + requestId))
        .then(()=>Request(url))
        .then(answer=> {
            console.timeEnd('request ' + requestId)
            return answer;
        })
}
clientRequest.counter = 0

clientRequest('lol', 500)
    .then(()=>clientRequest('lol', 500))
    .then(()=>clientRequest('lol', 500))

/*
 cache updated 1: 316.194ms
 request 1: 327.502ms
 request 2: 0.449ms
 cache updated 2: 300.396ms
 request 3: 0.278ms
 cache updated 3: 300.315ms
 */