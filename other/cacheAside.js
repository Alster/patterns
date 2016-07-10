let cache = {}

function timeout(time) {
    return new Promise(resolve=>setTimeout(resolve, time))
}

function makeRealRequest(url) {
    return timeout(300).then(()=>'some answer')
}

function Request(url) {
    return new Promise(resolve=> {
        if (cache.hasOwnProperty(url)) resolve(cache[url])
        makeRealRequest(url).then(answer=> {
            console.log('cache updated')
            cache[url] = answer
            resolve(answer)
        })
    })
}

function clientRequest(url, time) {
    let requestId = ++clientRequest.counter
    return timeout(time)
        .then(()=>console.time('request' + requestId))
        .then(()=>Request(url))
        .then(answer=> {
            console.timeEnd('request' + requestId)
            return answer;
        })
}
clientRequest.counter = 0

clientRequest('lol', 500)
    .then(()=>clientRequest('lol', 0))
    .then(()=>clientRequest('lol', 0))

/*
 cache updated
 request1: 315.012ms
 request2: 0.274ms
 request3: 0.307ms
 cache updated
 cache updated
 */