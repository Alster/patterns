function say(who, what) {
    console.log(`'${what}' - ${who} said`)
}

let JacobSays = say.bind(undefined, 'Jacob')
JacobSays('azazaazza')
let MiriamSays = say.bind(undefined, 'Miriam')
MiriamSays('lolololo')

/*
 'azazaazza' - Jacob said
 'lolololo' - Miriam said
 */