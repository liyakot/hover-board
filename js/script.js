const board = document.querySelector('#board');
const colors = ['rgb(255, 127, 249)', 'rgb(84, 98, 221)', 'rgb(100, 248, 248)', 'rgb(101, 255, 121)', 'rgb(252, 255, 101)', 'rgb(255, 170, 101)', 'rgb(255, 118, 118)', 'rgb(219, 129, 255)']
const squaresNumber = 500;


for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('touchstart', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    square.addEventListener('touchend', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = 'rgb(90, 90, 90)';
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}