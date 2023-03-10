// import { nanoid } from "nanoid"
// in order to use modules in Ts, set tsconfig.json to
// "target": "es6",     /*Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
// "module": "es2015",              /* Specify what module code is generated. */
// constructor shorthand
export default class Submission {
    constructor(type, name, recipient, amount) {
        this.type = type;
        this.name = name;
        this.recipient = recipient;
        this.amount = amount;
        this.id = Math.floor(Math.random() * 5000);
    }
}
