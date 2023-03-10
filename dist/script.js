"use strict";
const form = document.querySelector("#input-form");
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
    console.log(data.name);
    form.reset();
});
