//Задание 7.3 n 1

// function revealObj(object) {
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {
//             console.log(`${key}: ${object[key]}`)
//         }
//     }
// }



// let musician = {
//     city: 'Moscow',
//     degree: 'Moscow State Conservatory',
//     age: 25,
//     job: 'state orchestra'
// }

// const violinist = Object.create(musician);

// violinist.instrument = 'violin';
// violinist.ownCity = 'Perm';
// violinist.job = 'freelance';

// revealObj(musician);
// revealObj(violinist);

//Задание 7.3 n 2

// function checkProp(str, object) {
//     if (str in object) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let person = {
//     name: 'gleb',
//     surname: 'khokhlov',
//     job: 'musician'
// }

// console.log(checkProp('name', person));
// console.log(checkProp('age', person));

//Задание 7.3 n 3

// function createEmptyObj() {
//     const emptyObj = Object.create(null);
//     return emptyObj;
// }

// console.log(createEmptyObj())

//Задание 7.4 n 4

// function Gadget(name, powerConsumption, on) {
//     this.name = name;
//     this.powerConsumption = powerConsumption;
//     this.powerConsumptionValue = function() {
//         console.log(`${this.name} consumes around ${this.powerConsumption} W per hour`)
//     };
//     this.on = on
//     this.isOn = function() {
//         if (this.on === true) {
//             console.log(`${this.name} is on`)
//         } else {
//             console.log(`${this.name} is off`)
//         }
//     }
// }

// function SoundElectronic(type, name, powerConsumption, on) {
//     this.type = type;
//     this.name = name;
//     this.powerConsumption = powerConsumption;
//     this.on = on
// }

// // ConsumerElectronics.prototype = new Gadget();
// SoundElectronic.prototype = new Gadget();

// const Pot = new Gadget('Pot', 800, false);
// const MusicPlayer = new SoundElectronic('music player', 'Panasonic', 1700, true);

// Pot.dailyPowerConsumption = function(hours) {
//     this.hours = hours;
//     console.log(this.powerConsumption * this.hours)
// }

//Задание 7.5 no. 5

class Gadget {
    constructor(name, powerConsumption, on) {
        this.name = name;
        this.powerConsumption = powerConsumption;
        this.on = on;
    }
    powerConsumptionValue() {
        console.log(`${this.name} consumes around ${this.powerConsumption} W per hour`)
    }
    isOn() {
        this.on ? console.log(`${this.name} is on`) : console.log(`${this.name} is off`);
    }

}

class SoundElectronic extends Gadget {
    constructor(name, powerConsumption, on, type) {
        super(name, powerConsumption, on);
        this.type = type;
    }
}

class Light extends Gadget {
    constructor(name, powerConsumption, on) {
        super(name, powerConsumption, on);
    }
    isEnergySaving() {
        this.powerConsumption < 10 ? console.log(`${this.name} has a energy saving light bulb`) : console.log(`${this.name} has not a energy saving light bulb`)
    }
}
const musicPlayer = new SoundElectronic('Panasonic', 1700, true, 'music player');
const audioSystem = new SoundElectronic('Yamaha', 300, false, 'audio system');
const tableLamp = new Light('Table Lamp', 15, true);
const pot = new Gadget('Pot', 800, false);
pot.dailyPowerConsumption = function(hours) {
    this.hours = hours;
    console.log(this.powerConsumption * this.hours)
}