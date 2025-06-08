// Play theme music
const themeAudio = new Audio("../assets/audio/main-theme.mp3");
themeAudio.loop = true;
themeAudio.volume = 0.5;

window.playTheme = () => {
  if (themeAudio.paused) {
    themeAudio.play().catch(() => {});
  }
};

// Button click sound
const clickSound = new Audio("../assets/audio/button-click.mp3");
clickSound.volume = 0.4;

window.attachClickSounds = () => {
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});

//      clickSound.addEventListener("canplaythrough", () => console.log("Sound loaded"));
//      clickSound.addEventListener("error", () => console.error("Sound failed to load"));
    });
  });
};

// Auto-play on load
window.addEventListener("DOMContentLoaded", () => {
  window.playTheme();
  window.attachClickSounds();
});

