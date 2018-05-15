const clock = document.querySelector('.clock');
const color = document.querySelector('.color');

setInterval(function() {
    clock.textContent = getCurrentTime(new Date());
}, 1000);

setInterval(function() {
    const randomColor = randomHexColor(13);
    document.body.style = 'background-color:' + randomColor;
    color.textContent = randomColor;
}, 5000);

function getCurrentTime(date) {
    return date.toLocaleTimeString();
}

function randomHexColor(maxHexNumber) {
    let randomNumber = 0;
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        randomNumber = Math.round(Math.random() * maxHexNumber);
        hexColor += randomNumber.toString(16).toUpperCase();
    }
    return hexColor;
}