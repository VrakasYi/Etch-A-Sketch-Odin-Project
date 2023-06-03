const container = document.querySelector('#container');
const div = document.createElement('div');

for (let i = 0; i <= 15; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('row');
    div.textContent = 'row';
};
