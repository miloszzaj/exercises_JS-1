// http://websamuraj.pl/examples/js/projekt11/

const start = document.querySelector(".main");
const reset = document.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0;
let active = false;
let idI;

const czas = () => {
    if(!active) {
        active =!active;
        start.textContent = "Stop";
        idI = setInterval(beginning, 10);
    } else {active =!active;
        start.textContent = "Start";
    clearInterval(idI)}
}

const beginning = () => {
    time++;
    panel.textContent = (time/100).toFixed(2);

}

const zerowanie = () => {
    time = 0;
    panel.textContent = "----";
    active = false;
    start.textContent = "Start";
    clearInterval(idI);
}
start.addEventListener('click', czas)
reset.addEventListener('click', zerowanie)