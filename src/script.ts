console.log("ciao")

const body = document.querySelector("body")

const header: HTMLElement = document.createElement("h1")
header.innerText = "header ciao"

body?.append(header)

