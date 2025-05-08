let ctx;
let canvasEl;

function initGame(canvas) {
  canvasEl = canvas;
  ctx = canvas.getContext("2d");
  gameLoop();
}

function gameLoop() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

  // Placeholder for game state
  ctx.fillStyle = "#333";
  ctx.font = "30px Arial";
  ctx.fillText("Office Siege Begins", 50, 100);

  requestAnimationFrame(gameLoop);
}
