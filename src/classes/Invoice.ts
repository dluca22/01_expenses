import { HasFormatter } from "../interfaces/HasFormatter.js"


// constructor shorthand

// implements HasFormatter ensures it complies with the interface that requires having a method format() returning a string
// removing the method would invalidate the class due to incompliance with the interface
export class Invoice implements HasFormatter{
    readonly id: number = Math.floor(Math.random() * 5000)
    constructor(
        public type: string,
        public name: string,
        public recipient: string,
        public amount: number
        ) {}
        format():string{
            return `${this.recipient} was paid ${this.amount}$ for ${this.name}, [${this.type} Nr: ${this.id}]`
        }
    }

// versione classica
// class Invoice{
    //     readonly id: number = Math.floor(Math.random() * 500 0)
    //     type:string
    //     name:string
    //     recipient:string
    //     amount:number
    //     constructor(name:string, recipient:string, amount:number){
        //         this.name = name
        //         this.recipient = recipient
        //         this.amount = amount
        //     }
        // }
