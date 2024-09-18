const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".gridSize");

let gridSize = 25;

function createGrid(gridSize) {
    container.textContent = ''; 
    let containerSize = Math.min(window.innerWidth, window.innerHeight);
    let divSize = containerSize / gridSize;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement('div');
        div.style.width = `${divSize}px`
        div.style.height = `${divSize}px`
        container.appendChild(div);
    };
};    

createGrid(gridSize);

gridSizeButton.addEventListener('click', () => {
    let input = prompt("Enter the number of square per side (max 100): ")
    if (input === null) {
        return;
    };
    gridSize = parseInt(input); 
    if (isNaN(gridSize) || gridSize > 100 || gridSize <= 0) {
        alert("Please enter a number between 1 and 100.");
    }
    else {
        createGrid(gridSize);
    };    
});

window.addEventListener('resize', () => {
    createGrid(gridSize);
});