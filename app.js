const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    console.log('tutorial event has occurred');
});

eventEmitter.emit('tutorial');

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let liam = new Person('Liam');
let amy = new Person('Amy');
amy.on('name', ()=>{
    console.log('My name is ' + amy.name);
});


liam.on('name', ()=>{
    console.log('My name is ' + liam.name);
});

liam.emit('name');
amy.emit('name');
