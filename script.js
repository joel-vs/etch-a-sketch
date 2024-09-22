const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".gridSize");
const resetButton = document.querySelector(".reset");

let gridSize = 16;

function createGrid(gridSize) {
    container.textContent = ''; 
    let divWidth = 750 / gridSize;
    let divHeight = 690 / gridSize;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('gridSquares');
        div.style.width = `${divWidth}px`;
        div.style.height = `${divHeight}px`;
        container.appendChild(div);
    };

    const gridSquares = document.querySelectorAll(".gridSquares");

    for(let i=0; i<gridSquares.length; i++) {
        gridSquares[i].addEventListener("mouseover", function(e) {
            e.currentTarget.style.backgroundColor = "black";
        });
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

resetButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll(".gridSquares");
    for(let i=0; i<gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = "#1F2937";
    };   
});