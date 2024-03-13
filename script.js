const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";

function createDiv() {
    const gridDiv = document.createElement("div");
    gridDiv.className = "grid-div";
    
    return gridDiv;
}

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

for (let i = 0; i < 16; i++) {
    const flexContainer = document.createElement("div");
    flexContainer.className = "flex-container";

    for (let j = 0; j < 16; j++) {
        let newDiv = createDiv();
        newDiv.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
            e.target.style.cursor = "pointer";
        })
        flexContainer.appendChild(newDiv);
    }
    container.appendChild(flexContainer);
}

body.appendChild(container);