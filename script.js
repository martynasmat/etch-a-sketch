function normalHover() {
    let sketchContainer = document.querySelector('.sketch-container');
    let rows = sketchContainer.children;
    rows = Array.from(rows);
    rows.forEach((row) => {
        let squares = row.children;
        squares = Array.from(squares);
        squares.forEach((square) => {
            square.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.backgroundColor = 'black';
                });
            });
    });
}

function modernHover() {
    let sketchContainer = document.querySelector('.sketch-container');
    let rows = sketchContainer.children;
    rows = Array.from(rows);
    rows.forEach((row) => {
        let squares = row.children;
        squares = Array.from(squares);
        squares.forEach((square) => {
            square.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.backgroundColor = 'black';
                });
            });
    });
}

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
    removeGrid();
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
    normalHover();
}

function removeGrid() {
    let sketchContainer = document.querySelector('.sketch-container');
    while(sketchContainer.hasChildNodes()) {
        sketchContainer.removeChild(sketchContainer.lastChild);
    };
}


let form = document.querySelector(".grid-select");
form.addEventListener('submit', (e) => e.preventDefault());
createGrid(16);
normalHover();