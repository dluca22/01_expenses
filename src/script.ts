import { Invoice } from "./classes/Invoice.js"
import { Bill } from "./classes/Bill.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListComponent } from "./classes/ListComponent.js";


const form = document.querySelector("#input-form") as HTMLFormElement;
const ul = document.querySelector('ul.list') as HTMLUListElement;
const list = new ListComponent(ul)

// instantiate an array of items with HasFormatter interface
let savedDocs: HasFormatter[]
// if localstorage, load elements from it, else empty array only accepting interface compliant objects
if (localStorage.getItem("documents")) {
    savedDocs = JSON.parse(localStorage.getItem("documents")!)
} else {
    savedDocs = []
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    const type: string = typeof data.type === "string" ? data.type : ""
    const name: string = typeof data.name === "string" ? data.name : ""
    const recipient: string = typeof data.recipient === "string" ? data.recipient : ""
    let amount: string = typeof data.amount === "string" ? data.amount : ""

    if (!recipient) {
        alertBox('Recipient is missing', 'info');
        return
    } else if (!name) {
        alertBox('name is missing', 'warn');
        return
    } else if (!amount) {
        alertBox('amount is missing', 'alert');
        return
    }

    let values: [string, string, string, string];
    values = [type, name, recipient, amount]

    let doc: HasFormatter;
    if (type === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Bill(...values)
    }
    // savedDocs.push(doc)
    // after updating with new document, save to localstorage
    // localStorage.setItem("documents", JSON.stringify(savedDocs))
    // savedDocs.map(element => list.render())

    list.render(doc, type, recipient, amount)



    form.reset()
})


// void function because handles DOM manipulation from withing
// doesn't return anything
function alertBox(msg: string, color: string): void {
    const box = document.createElement('div');
    box.classList.add('alert-box', color);
    box.innerText = msg;
    document.body.append(box);

    setTimeout(() => {
        document.body.removeChild(box);
    }, 3000);
}
