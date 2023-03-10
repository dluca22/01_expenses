export class ListComponent {
    constructor(container) {
        this.container = container;
    }
    // this method takes a parameter that can be Bill or Invoice... and they both are interface HasFormatter so...
    render(item, type, recipient, amount) {
        // create a heading with type of element and recipient as inline span
        const li = document.createElement("li");
        li.classList.add(type, "list-item");
        const heading = document.createElement("div");
        heading.classList.add("list-heading");
        const docum_type = document.createElement("span");
        docum_type.innerText = type;
        const to = document.createElement("span");
        to.innerText = `To: ${recipient}`;
        heading.append(docum_type, to);
        const amount_section = document.createElement("div");
        amount_section.classList.add("amount_section");
        const amount_label = document.createElement("span");
        amount_label.innerText = "Amount :";
        const transaction_amount = document.createElement("span");
        transaction_amount.classList.add("transaction_amount");
        transaction_amount.innerText = `${amount}$`;
        amount_section.append(amount_label, transaction_amount);
        console.log("item from listcomponetn", item);
        const p = document.createElement("p");
        // prende il metodo format dall'oggetto `item`
        p.innerText = `"${item.format()}"`;
        p.classList.add("transaction_description");
        li.append(heading, p, amount_section);
        if (type === "invoice") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
