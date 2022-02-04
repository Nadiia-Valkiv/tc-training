let snake1 = new Snake(USER);
document.addEventListener("keydown", function (event) {
    snake1.move(event)
}, false);
gameLoop();

function gameLoop() {
    HELPERS.clearField();    
    snake1.draw();
    setTimeout(gameLoop, TIME_INTERVAL)
}