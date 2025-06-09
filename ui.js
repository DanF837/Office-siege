export let lives = 20;
export let money = 500;
export let wave = 0;

export const towerPrices = {
  cannon: 100,
  shredder: 75,
  sniper: 150,
};

export function updateUI() {
  document.getElementById("lives").textContent = lives;
  document.getElementById("money").textContent = money;
  document.getElementById("wave").textContent = wave;
  updateTowerAvailability();
}

export function startWave() {
  wave++;
  updateUI();
}

export function loseLife() {
  lives--;
  updateUI();
}

export function addMoney(amount) {
  money += amount;
  updateUI();

  if (window.refreshUpgradeMenu) {
    window.refreshUpgradeMenu();
  }
}

function updateTowerAvailability() {
  document.querySelectorAll("[data-tower]").forEach((img) => {
    const towerType = img.dataset.tower;
    const price = towerPrices[towerType];
    const canAfford = money >= price;

    img.style.filter = canAfford ? "none" : "grayscale(100%) opacity(0.4)";
    img.style.pointerEvents = canAfford ? "auto" : "none";

    const label = img.nextElementSibling;
    if (label && label.classList.contains("price-label")) {
      label.style.color = canAfford ? "#5C4033" : "#999";
    }
  });
}

// Called by hr.html after ui.html has been injected into the DOM
export function initUI() {
  updateTowerAvailability();

  // Load saved settings
  document.getElementById("toggle-music").checked = localStorage.getItem("musicEnabled") !== "false";
  document.getElementById("toggle-sfx").checked = localStorage.getItem("sfxEnabled") !== "false";

  document.getElementById("music-volume").value = localStorage.getItem("musicVolume") || 1;
  document.getElementById("sfx-volume").value = localStorage.getItem("sfxVolume") || 1;

  updateVolumeLabel(document.getElementById("music-volume"));
  updateVolumeLabel(document.getElementById("sfx-volume"));

  // Open Settings
  document.getElementById("settings-btn").addEventListener("click", () => {
    document.getElementById("settings-popup").style.display = "flex";
    if (typeof window.pauseGame === "function") window.pauseGame();
  });

  // Save settings and apply in real-time
  document.getElementById("toggle-music").addEventListener("change", (e) => {
    localStorage.setItem("musicEnabled", e.target.checked);
    if (typeof window.setThemeEnabled === "function") {
      window.setThemeEnabled(e.target.checked);
    }
  });

  document.getElementById("toggle-sfx").addEventListener("change", (e) => {
    localStorage.setItem("sfxEnabled", e.target.checked);
  });

  document.getElementById("music-volume").addEventListener("input", function () {
    localStorage.setItem("musicVolume", this.value);
    updateVolumeLabel(this);
    if (typeof window.setThemeVolume === "function") {
      window.setThemeVolume(parseFloat(this.value));
    }
  });

  document.getElementById("sfx-volume").addEventListener("input", function () {
    localStorage.setItem("sfxVolume", this.value);
    updateVolumeLabel(this);
  });
}

// Close Settings
window.closeSettings = function () {
  document.getElementById("settings-popup").style.display = "none";
  if (typeof window.resumeGame === "function") window.resumeGame();
};

// Reset Progress
window.resetProgress = function () {
  const popup = document.getElementById("reset-confirm-popup");
  if (popup) {
    popup.style.display = "flex";
  }
};

window.confirmReset = function () {
  localStorage.clear();
  location.reload();
};

window.closeResetPopup = function () {
  const popup = document.getElementById("reset-confirm-popup");
  if (popup) popup.style.display = "none";
};

window.updateVolumeLabel = function (slider) {
  const labelId = slider.id + "-label";
  const label = document.getElementById(labelId);
  if (label) {
    label.textContent = Math.round(slider.value * 100) + "%";
  }
};
