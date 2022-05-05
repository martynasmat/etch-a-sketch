function changeGrid(){
    removeGrid();
    let message = document.querySelector('.grid-info');
    const gridEntry = document.querySelector('.grid-entry');
    const squares = parseInt(gridEntry.value);
    if(squares >= 16 && squares <= 100){
        createGrid(squares);
        message.textContent = `Current grid: ${squares}x${squares}`;
    }else {
        message.textContent = 'Enter a number between 16 and 100';
        createGrid(16);
    };
}

function createGrid(squares) {
    for(let i = 0; i < squares; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        row.flexFlow = 'row nowrap';
        for(let j = 0; j < squares; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.minWidth = `${400/squares}px`;
            square.style.minHeight = `${400/squares}px`;
            square.style.backgroundColor = 'rgb(255, 255, 255)';
            row.appendChild(square);
        };
        let sketchContainer = document.querySelector('.sketch-container');
        sketchContainer.appendChild(row);
    };
}

function removeGrid() {
    let sketchContainer = document.querySelector('.sketch-container');
    while(sketchContainer.hasChildNodes()) {
        sketchContainer.removeChild(sketchContainer.lastChild);
    };
}

function normalHover() {
    changeGrid();
    let sketchContainer = document.querySelector('.sketch-container');
    let rows = sketchContainer.children;
    rows = Array.from(rows);
    rows.forEach((row) => {
        let squares = row.children;
        squares = Array.from(squares);
        squares.forEach((square) => {
            square.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.backgroundColor = 'rgb(0, 0, 0)';
                });
            });
    });
}

function modernHover() {
    changeGrid();
    let sketchContainer = document.querySelector('.sketch-container');
    let rows = sketchContainer.children;
    rows = Array.from(rows);
    rows.forEach((row) => {
        let squares = row.children;
        squares = Array.from(squares);
        squares.forEach((square) => {
            square.addEventListener('mouseenter', (e) => {
                let currentColor = e.currentTarget.style.backgroundColor.slice(3);
                currentColor = currentColor.replaceAll(' ', '');
                currentColor = currentColor.replaceAll('(', '');
                currentColor = currentColor.replaceAll(')', '');
                currentColor = currentColor.split(',');
                e.currentTarget.style.backgroundColor = `rgb(${parseInt(currentColor[0]) - 50}, ${parseInt(currentColor[1]) - 50}, ${parseInt(currentColor[2]) - 50})`;
                });
            });
    });
}

function rainbowHover() {
    changeGrid();
    let sketchContainer = document.querySelector('.sketch-container');
    let rows = sketchContainer.children;
    rows = Array.from(rows);
    rows.forEach((row) => {
        let squares = row.children;
        squares = Array.from(squares);
        squares.forEach((square) => {
            square.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.backgroundColor = `rgb(${Math.floor(Math.random() * 155) + 100}, ${Math.floor(Math.random() * 155) + 100}, ${Math.floor(Math.random() * 155) + 100})`;
                });
            });
    });
}

function clearGrid() {
    let sketchContainer = document.querySelector('.sketch-container');
    let rows = sketchContainer.children;
    rows = Array.from(rows);
    for(let i = 0; i < rows.length; i++) {
        let squares = rows[i].children;
        squares = Array.from(squares);
        for(let j = 0; j < squares.length; j++) {
            squares[j].style.backgroundColor = "rgb(255, 255, 255)";
        };
    };
}

let form = document.querySelector(".grid-select");
form.addEventListener('submit', (e) => e.preventDefault());
createGrid(16);