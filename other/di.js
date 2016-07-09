let dependencies = {
    weather: 'good',
    shout(msg){
        console.log(`${msg}!!1`)
    }
}

class Woman {
    constructor(name, {weather, shout}) {
        shout(`${name} was born at ${weather} weather`)
    }
}

new Woman('Charlotte', dependencies)