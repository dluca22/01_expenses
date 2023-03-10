// clone of Invoice
// implements HasFormatter ensures it complies with the interface that requires having a method format() returning a string
export class Bill {
    constructor(
    // public type: string,
    service, provider, amount) {
        this.service = service;
        this.provider = provider;
        this.amount = amount;
        this.id = Math.floor(Math.random() * 5000);
    }
    format() {
        return `${this.provider} was paid ${this.amount}$ for ${this.service}, [Bill id: ${this.id}]`;
    }
}
