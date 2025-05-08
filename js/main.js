document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startBtn").focus();
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && document.activeElement.id === "startBtn") {
        startGame();
      }
    });
  });
  
  function startGame() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("creditsScreen").style.display = "none";
  
    const canvas = document.getElementById("gameCanvas");
    canvas.style.display = "block";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    initGame(canvas);
  }
  
  function showCredits() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("creditsScreen").style.display = "flex";
  }
  
  function backToMenu() {
    document.getElementById("creditsScreen").style.display = "none";
    document.getElementById("mainMenu").style.display = "flex";
  }
  