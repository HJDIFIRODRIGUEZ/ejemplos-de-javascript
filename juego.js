const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameContainer = document.querySelector(".game-container");

let playerPositionX = 180; // Posición inicial del jugador
let enemyPositionY = 10;  // Posición inicial del enemigo
let enemySpeedY = 2;      // Velocidad del enemigo
let gameInterval;         // Variable para el intervalo del juego

function movePlayer(event) {
    // Mueve al jugador izquierda o derecha usando las teclas de flecha
    if (event.key === "ArrowLeft" && playerPositionX > 0) {
        playerPositionX -= 10;
    } else if (event.key === "ArrowRight" && playerPositionX < 360) {
        playerPositionX += 10;
    }
    updatePlayerPosition();
}

function updatePlayerPosition() {
    player.style.left = playerPositionX + "px";
}

function updateEnemyPosition() {
    enemyPositionY += enemySpeedY;
    enemy.style.top = enemyPositionY + "px";
}

function checkCollision() {
    if (
        enemyPositionY > 560 && // Comprueba si el enemigo está cerca de la posición del jugador
        playerPositionX < enemyPositionY + 40 && // Comprueba si el jugador está dentro del rango horizontal del enemigo
        playerPositionX + 40 > enemyPositionY
    ) {
        clearInterval(gameInterval); // Detiene el juego
        alert("Game Over"); // Puedes reemplazar esto con tu lógica de "Game Over"
        // Reinicia el juego o toma la acción apropiada en caso de "Game Over"
    }
}

function startGame() {
    // Inicia el juego y configura los listeners de eventos
    gameInterval = setInterval(updateGameArea, 20);
    document.addEventListener("keydown", movePlayer);
}

function updateGameArea() {
    updatePlayerPosition();
    updateEnemyPosition();
    checkCollision();
}

// Inicia el juego cuando se carga la página
window.onload = startGame;
