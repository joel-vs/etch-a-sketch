const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".gridSize");
const resetButton = document.querySelector(".reset");
const randomColorButton = document.querySelector(".randomColor");

let gridSize = 16;

let isOn = false;

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
        if (isOn === true) {
            gridSquares[i].addEventListener("mouseover", function(e) {
                e.currentTarget.style.backgroundColor = toggleRandomColor();
            });
        }
        else if (isOn === false) {
            gridSquares[i].addEventListener("mouseover", function(e) {
                e.currentTarget.style.backgroundColor = "black";
            });
        };
    };    
};   

function toggleRandomColor () {
    let code = '';
    hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    for (let i=0; i<6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        code += hexArray[randomNumber];
    }
    return `#${code}`;
};

createGrid(gridSize);

randomColorButton.addEventListener('click', () => {
    isOn = !isOn; //toggle boolean value of isOn.
    if (isOn === true) {
        alert("Random color mode is now ON.");
    }
    else {
        alert("Random color mode is now OFF.");
    };

    const gridSquares = document.querySelectorAll(".gridSquares");
    for(let i=0; i<gridSquares.length; i++) {
        if (isOn === false) {
            gridSquares[i].addEventListener("mouseover", function(e) {
                e.currentTarget.style.backgroundColor = "black";
            });
        }
        else if (isOn === true) {
            gridSquares[i].addEventListener("mouseover", function(e){
                e.currentTarget.style.backgroundColor = toggleRandomColor();
            });
        };   
    };
});

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