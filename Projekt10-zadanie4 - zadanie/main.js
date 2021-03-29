const iksik = () => {
    let time = 0;
    const timer = () => {
    time++;
    document.body.textContent = `${time} sekund`;
}

setInterval(timer, 1000);

}
iksik()