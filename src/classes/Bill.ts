import { HasFormatter } from "../interfaces/HasFormatter.js"

// clone of Invoice

// implements HasFormatter ensures it complies with the interface that requires having a method format() returning a string

export class Bill implements HasFormatter{
    readonly id: number = Math.floor(Math.random() * 5000)
    constructor(
        // public type: string,
        public service: "gas" | "water" | "heating" | "isp",
        public provider: string,
        public amount: number
        ) {}
        format():string{
            return `${this.provider} was paid ${this.amount} $ for ${this.service}, [transaction_id: ${this.id}]`
        }
    }
