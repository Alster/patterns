//http://www.dofactory.com/net/abstract-factory-design-pattern
//Weapons
class WeaponBase {
    constructor(name) {
        this.name = name
    }
}

class SwordOfTheGods extends WeaponBase {
    constructor() {
        super(`Sword of the Gods`)
    }
}

class ShitStick extends WeaponBase {
    constructor() {
        super(`shit stick`)
    }
}

//Armor
class ArmorBase {
    constructor(name) {
        this.name = name
    }
}

class TheDragonsArmor extends ArmorBase {
    constructor() {
        super(`the Dragon's Armor`)
    }
}

class DirtySkin extends ArmorBase {
    constructor() {
        super(`dirty skin`)
    }
}

//Factory
class AbstractFactory {
    constructor() {
    }

    createWeapon() {
    }

    createArmor() {
    }
}

class HeroFactory extends AbstractFactory {
    constructor() {
        super()
    }

    createWeapon() {
        return new SwordOfTheGods()
    }

    createArmor() {
        return new TheDragonsArmor()
    }
}

class PeasantFactory extends AbstractFactory {
    constructor() {
        super()
    }

    createWeapon() {
        return new ShitStick()
    }

    createArmor() {
        return new DirtySkin()
    }
}

//Man
class Man {
    constructor(name, factory) {
        this.name = name
        this.weapon = factory.createWeapon()
        this.armor = factory.createArmor()
    }

    presentYourself() {
        console.log(`Hello, i'm ${this.name}, armed with ${this.weapon.name} and dressed in ${this.armor.name} `)
    }
}

let heroFactory = new HeroFactory()
let peasantFactory = new PeasantFactory()
let hero = new Man(`Great`, heroFactory)
let peasant = new Man(`dude`, peasantFactory)
hero.presentYourself()
peasant.presentYourself()