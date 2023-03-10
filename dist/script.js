"use strict";
// import Submission from "./interfaces/Submission";
// import { nanoid } from "nanoid";
const form = document.querySelector("#input-form");
// constructor shorthand
class Submission {
    constructor(type, name, recipient, amount) {
        this.type = type;
        this.name = name;
        this.recipient = recipient;
        this.amount = amount;
        this.id = Math.floor(Math.random() * 200);
    }
}
// === code for formData ====
/*
added this code to tsconfig to allow Object.fromEntries to iterate over DOM objects
"lib": [
    "es2019",
    "dom",
    "dom.iterable"
],
*/
form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const type = typeof data.type === "string" ? data.type : "";
    const name = typeof data.name === "string" ? data.name : "";
    const recipient = typeof data.recipient === "string" ? data.recipient : "";
    let amount = typeof data.amount === "string" ? parseFloat(data.amount) : 0;
    // let values : [string, string, string, number];
    // values = [type, name, recipient, amount ]
    const submission = new Submission(type, name, recipient, amount);
    console.log(submission);
});
// === code for formData ====
// using arrays and tuples
// form.addEventListener("submit", (e: Event) => {
//     e.preventDefault();
//     let values : [string, string, string, number];
//     values = [type.value, name.value, recipient.value, amount.value ]
// })
// {type: 'invoice', name: 'daf', recipient: 'adf', amount: ''}
