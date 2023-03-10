import { Invoice } from "./classes/Invoice.js"
import { Bill } from "./classes/Bill.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";


const form = document.querySelector("#input-form") as HTMLFormElement;

// instantiate an array of items with HasFormatter interface
let savedDocs: HasFormatter[]
// if localstorage, load elements from it, else empty array only accepting interface compliant objects
if (localStorage.getItem("documents")){
    savedDocs = JSON.parse(localStorage.getItem("documents")!)
}else{
    savedDocs = []
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    const type: string = typeof data.type === "string" ? data.type : ""
    const name: string = typeof data.name === "string" ? data.name : ""
    const recipient: string = typeof data.recipient === "string" ? data.recipient : ""
    let amount: number = typeof data.amount === "string" ? parseFloat(data.amount) : 0
    let values: [string, string, number];
    values = [name, recipient, amount]

    let doc: HasFormatter;
    if (type === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Bill(...values)
    }
    savedDocs.push(doc)
    // after updating with new document, save to localstorage
    localStorage.setItem("documents", JSON.stringify(savedDocs))
})

// === code for formData ====

// using arrays and tuples

// form.addEventListener("submit", (e: Event) => {
//     e.preventDefault();
//     let values : [string, string, string, number];
//     values = [type.value, name.value, recipient.value, amount.value ]
// })

// {type: 'invoice', name: 'daf', recipient: 'adf', amount: ''}
