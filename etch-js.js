const container = document.querySelector('#container');
let gridDivsNo = document.getElementById('container').className-1;

//Create a div with class row with container parent
for (let i = 0; i <= gridDivsNo; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);

    //Create a column class of divs with row divs as parent
    for (let j = 0; j <= gridDivsNo; j++) {
        let colDiv = document.createElement('div');
        colDiv.classList.add('column');
        //colDiv.textContent = i;
        rowDiv.appendChild(colDiv);
    };
}
//color the pixels when hovering mouse
pixel = document.getElementsByClassName('column');
for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('mouseover', (event) => {
        event.target.classList.add('gray-pixel');
    });
};

const squareNoButton = document.getElementById('squareNo');
squareNoButton.addEventListener('click', (e) => {
    let squareNo = prompt('Enter a number between 1 and 100');
    while (true) {
        if (!isNaN(squareNo)) {
            if (squareNo < 1 || squareNo > 100) {
                squareNo = prompt('Enter a number between 1 and 100');
            } else {
                break;
            };
        } else {
            squareNo = prompt('Enter a number between 1 and 100');
        };
    };
    squareNo--;
    
    let elementsToRemove = document.querySelectorAll('.row')
    elementsToRemove.forEach(element => element.remove());
    elementsToRemove = document.querySelectorAll('.column')
    elementsToRemove.forEach(element => element.remove());

    for (let i = 0; i <= squareNo; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        container.appendChild(rowDiv);
    
        //Create a column class of divs with row divs as parent
        for (let j = 0; j <= squareNo; j++) {
            let colDiv = document.createElement('div');
            colDiv.classList.add('column');
            //colDiv.textContent = i;
            rowDiv.appendChild(colDiv);
        };
    }
    pixel = document.getElementsByClassName('column');
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener('mouseover', (event) => {
            event.target.classList.add('gray-pixel');
        });
    };

    
});