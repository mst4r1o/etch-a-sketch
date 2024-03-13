const body = document.querySelector("body");
const button = document.querySelector(".button");

function createDiv() {
    const gridDiv = document.createElement("div");
    gridDiv.className = "grid-div";
    
    return gridDiv;
}

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

function createGrid(size) {
    const container = document.createElement("div");
    container.className = "container";

    for (let i = 0; i < size; i++) {
        const flexContainer = document.createElement("div");
        flexContainer.className = "flex-container";

        for (let j = 0; j < size; j++) {
            let newDiv = createDiv();
            newDiv.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
                e.target.style.cursor = "pointer";
            })
            flexContainer.appendChild(newDiv);
        }
        container.appendChild(flexContainer);
    }
    return container;
}
let gridContainer = createGrid(16);
body.insertBefore(gridContainer, button.nextSibling);

button.addEventListener("click", () => {
    console.log("clicked");
    let size = 101;
    while (size > 100 || size < 0) {
        size = prompt("How many squares per side would you like?");
    }
    body.removeChild(gridContainer);
    gridContainer = createGrid(size);
    body.insertBefore(gridContainer, button.nextSibling);
})