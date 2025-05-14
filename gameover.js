export function showGameOver() {
    const screen = document.getElementById("game-over-screen");
    if (screen) screen.style.display = "flex";
  }
  
  export function retryGame() {
    window.location.reload(); 
  }
  
  export function goHome() {
    window.location.href = "../hub.html"; 
  }
  