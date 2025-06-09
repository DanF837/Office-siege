// Play theme music
const themeAudio = new Audio("../assets/audio/main-theme.mp3");
themeAudio.loop = true;

// Read saved volume from localStorage (default 0.5)
const savedVolume = localStorage.getItem("musicVolume");
themeAudio.volume = savedVolume !== null ? parseFloat(savedVolume) : 0.5;

window.playTheme = () => {
  if (themeAudio.paused) {
    themeAudio.play().catch(() => {});
  }
};

// Expose setter so ui.js can update volume in real-time
window.setThemeVolume = (vol) => {
  themeAudio.volume = vol;
};

window.setThemeEnabled = (enabled) => {
  if (enabled) {
    themeAudio.play().catch(() => {});
  } else {
    themeAudio.pause();
  }
};

// Auto-play on load if music is enabled
window.addEventListener("DOMContentLoaded", () => {
  const musicEnabled = localStorage.getItem("musicEnabled") !== "false";
  if (musicEnabled) {
    window.playTheme();
  }
});
