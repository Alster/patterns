function say(who, what) {
    console.log(`'${what}' - ${who} said`)
}

let JacobSays = say.bind(undefined, 'Jacob')
JacobSays('ololololo')
let MiriamSays = say.bind(undefined, 'Miriam')
MiriamSays('what?')
JacobSays('bebebebee')

/*
 'ololololo' - Jacob said
 'what?' - Miriam said
 'bebebebee' - Jacob said
 */