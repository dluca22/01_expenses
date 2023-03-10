// import { nanoid } from "nanoid"

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
export default class Submission {
    readonly id: number = Math.floor(Math.random() * 5000)
    constructor(
        public type: string,
        public name: string,
        public recipient: string,
        public amount: number
    ) {

    }
}