//http://www.dofactory.com/net/adapter-design-pattern
function stringReceiver(text) {
    console.log(`received ${typeof text} ${text}, want string`)
}

function numberReceiver(num) {
    console.log(`received ${typeof num} ${num}, want number`)
}

function adaptForStringsReceiver(receiver) {
    return num=>receiver(num.toString())
}

function adaptForNumbersReceiver(receiver) {
    return num=>receiver(parseFloat(num))
}

let numVal = 15.6
let stringVal = '46.8'

numberReceiver(numVal)
stringReceiver(stringVal)

let adaptedStringReceiver = adaptForStringsReceiver(stringReceiver)
adaptedStringReceiver(numVal)
let adaptedNumberReceiver = adaptForNumbersReceiver(numberReceiver)
adaptedNumberReceiver(stringVal)

/*
 received number 15.6, want number
 received string 46.8, want string
 received string 15.6, want string
 received number 46.8, want number
 */