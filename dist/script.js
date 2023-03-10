import { Invoice } from "./classes/Invoice.js";
import { Bill } from "./classes/Bill.js";
const form = document.querySelector("#input-form");
// === code for formData ====
/*
added this code to tsconfig to allow Object.fromEntries to iterate over DOM objects
"lib": [
    "es2019",
    "dom",
    "dom.iterable"
],
*/
let docUno;
let docDue;
let docTre;
docUno = new Invoice("car", "concessionaria", 25000);
docDue = new Bill("isp", "fastweb", 24.99);
docTre = new Bill("isp", "fastweb", 24.99);
const docsArray = [];
docsArray.push(docUno);
docsArray.push(docDue);
docsArray.push(docTre);
form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const type = typeof data.type === "string" ? data.type : "";
    const name = typeof data.name === "string" ? data.name : "";
    const recipient = typeof data.recipient === "string" ? data.recipient : "";
    let amount = typeof data.amount === "string" ? parseFloat(data.amount) : 0;
    let values;
    values = [type, name, recipient, amount];
    const m = new Invoice("pavement", "mario", 599);
    console.log(m);
    console.log(m.format());
});
// === code for formData ====
// using arrays and tuples
// form.addEventListener("submit", (e: Event) => {
//     e.preventDefault();
//     let values : [string, string, string, number];
//     values = [type.value, name.value, recipient.value, amount.value ]
// })
// {type: 'invoice', name: 'daf', recipient: 'adf', amount: ''}
