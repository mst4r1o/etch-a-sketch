const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";

function createDiv() {
    const gridDiv = document.createElement("div");
    gridDiv.className = "grid-div";
    
    return gridDiv;
}

let count = 0;
for (let i = 0; i < 16; i++) {
    const flexContainer = document.createElement("div");
    flexContainer.className = "flex-container";

    for (let j = 0; j < 16; j++) {
        let newDiv = createDiv();
        flexContainer.appendChild(newDiv);
        console.log(++count);
    }
    container.appendChild(flexContainer);
}

body.appendChild(container);
console.log("hi");