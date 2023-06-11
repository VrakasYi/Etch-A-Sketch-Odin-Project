const container = document.querySelector('#container');
let gridDivsNo = document.getElementById('container').className-1;

//Create a div with class row with container parent
createGrid(gridDivsNo);
pixel = document.getElementsByClassName('column');
//color the pixels when hovering mouse
let click = false;
let useColor = true;
//color();
//use erase button
const eraseButton = document.getElementById('erase');
eraseButton.addEventListener('click', () => {
    useColor = false;
    erase();
});
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
    useColor = true;
    color()
})

//change pixel density
const squareNoButton = document.getElementById('squareNo');
squareNoButton.addEventListener('click', (e) => {
    let squareNo = prompt('Enter a number between 1 and 48');
    while (true) {
        if (!isNaN(squareNo)) {
            if (squareNo < 1 || squareNo > 48) {
                squareNo = prompt('Enter a number between 1 and 48');
            } else {
                break;
            };
        } else {
            squareNo = prompt('Enter a number between 1 and 48');
        };
    };
    squareNo--;
    
    let elementsToRemove = document.querySelectorAll('.row')
    elementsToRemove.forEach(element => element.remove());
    elementsToRemove = document.querySelectorAll('.column')
    elementsToRemove.forEach(element => element.remove());

    createGrid(squareNo);
    color();
});

function mouseDown(event) {
    if (event.button === 0) {
        click = true;
        event.target.classList.add('gray-pixel');
        console.log(event);
    } //else if (event.button === 2) {
       // event.target.classList.remove('gray-pixel');
    //}
}
function mouseOver(event) {
    if (event.button === 0) {
        if (click) {
            event.target.classList.add('gray-pixel');
        }
    } 
}

function color() {    
    if (useColor) {
            
            for (let i = 0; i < pixel.length; i++) {
                pixel[i].addEventListener('mousedown', mouseDown);
                pixel[i].addEventListener('mouseover', mouseOver);
                pixel[i].addEventListener('mouseup', () => {
                    click = false;
                })
            };
    }
}

function erase() {
    
    if (!useColor) {
        for (let i = 0; i < pixel.length; i++) {
            pixel[i].addEventListener('mousedown', (event) => {
                event.target.classList.remove('gray-pixel');
            })
        }
    }
}

//Create a div with class row with container parent
function createGrid(x) {
    for (let i = 0; i <= x; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        container.appendChild(rowDiv);
    
        //Create a column class of divs with row divs as parent
        for (let j = 0; j <= x; j++) {
            let colDiv = document.createElement('div');
            colDiv.classList.add('column');
            //colDiv.textContent = i;
            rowDiv.appendChild(colDiv);
        };
    }
}