"use strict";
// import { nanoid } from "nanoid"
Object.defineProperty(exports, "__esModule", { value: true });
// versione classica
// class FormData{
//     readonly id:string
//     type:string
//     name:string
//     recipient:string
//     amount:number
//     constructor(type:string, name:string, recipient:string, amount:number){
//         this.type = type
//         this.name = name
//         this.recipient = recipient
//         this.amount = amount
//     }
// }
// constructor shorthand
class Submission {
    constructor(type, name, recipient, amount) {
        this.type = type;
        this.name = name;
        this.recipient = recipient;
        this.amount = amount;
        this.id = Math.floor(Math.random() * 5000);
    }
}
exports.default = Submission;
