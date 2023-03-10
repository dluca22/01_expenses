// clone of Invoice
// implements HasFormatter ensures it complies with the interface that requires having a method format() returning a string
export class Bill {
    constructor(type, service, provider, amount) {
        this.type = type;
        this.service = service;
        this.provider = provider;
        this.amount = amount;
        this.id = Math.floor(Math.random() * 5000);
    }
    format() {
        return `${this.provider} was paid ${this.amount}$ for ${this.service}, [${this.type} id: ${this.id}]`;
    }
}
