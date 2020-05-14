var canvas = document.querySelector('canvas');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

ctx = canvas.getContext('2d');
ctx.strokeStyle = 'red';


const draw = (event) => {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
};

function setEventListenerForDraw(element) {
    element.addEventListener('mousemove', draw);
}

setEventListenerForDraw(canvas);


window.addEventListener('keydown', (event) => {
    if (event.code == 'KeyC') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    } else if (event.code == 'KeyG') {
        canvas.removeEventListener('mousemove', draw);
        ctx.beginPath();
    }
});

window.addEventListener('keyup', (event) => {
    if (event.code == 'KeyG') {
        setEventListenerForDraw(canvas);
    }
});