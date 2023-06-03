const container = document.querySelector('#container');
const div = document.createElement('div');
for (let i = 0; i <= 15; i++) {
    container.appendChild(div);
    div.classList.add('pixel')
}