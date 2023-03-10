"use strict";
console.log("ciao");
const body = document.querySelector("body");
const header = document.createElement("h1");
header.innerText = "header ciao";
body === null || body === void 0 ? void 0 : body.append(header);
