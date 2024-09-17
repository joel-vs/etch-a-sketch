const container = document.querySelector(".container");
let gridSize = 16;

container.innerHTML = '';

for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
}

container.style.width = `${gridSize * 25}px`;