// constructor shorthand
// implements HasFormatter ensures it complies with the interface that requires having a method format() returning a string
// removing the method would invalidate the class due to incompliance with the interface
export class Invoice {
    constructor(
    // public type: string,
    name, recipient, amount) {
        this.name = name;
        this.recipient = recipient;
        this.amount = amount;
        this.id = Math.floor(Math.random() * 5000);
    }
    format() {
        return `${this.recipient} was paid ${this.amount}$ for ${this.name}, [Invoice Nr: ${this.id}]`;
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
