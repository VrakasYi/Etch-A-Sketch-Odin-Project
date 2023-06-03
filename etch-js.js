const container = document.querySelector('#container');
const rowDiv = document.createElement('div');
rowDiv.classList.add('row');
container.appendChild(rowDiv)

for (let i = 0; i <= 15; i++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('column');
    colDiv.textContent = 'pxl';
    rowDiv.appendChild(colDiv);
};
