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

    // Visually grey out
    img.style.filter = canAfford ? "none" : "grayscale(100%) opacity(0.4)";
    img.style.pointerEvents = canAfford ? "auto" : "none";

    // Optional: update price label color if you use one
    const label = img.nextElementSibling;
    if (label && label.classList.contains("price-label")) {
      label.style.color = canAfford ? "#fff" : "#888";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateTowerAvailability();
});


  // Open Settings (bind this to the ⚙️ button if not already)
document.querySelector("#game-ui button:last-of-type").addEventListener("click", () => {
  document.getElementById("settings-popup").style.display = "flex";
});

// Close Settings
window.closeSettings = function () {
  document.getElementById("settings-popup").style.display = "none";
};

// Reset Progress
window.resetProgress = function () {
  if (confirm("Are you sure you want to reset all progress?")) {
    localStorage.clear();
    location.reload();
  }
};

// Load saved settings
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle-music").checked = localStorage.getItem("musicEnabled") !== "false";
  document.getElementById("toggle-sfx").checked = localStorage.getItem("sfxEnabled") !== "false";

  document.getElementById("music-volume").value = localStorage.getItem("musicVolume") || 1;
  document.getElementById("sfx-volume").value = localStorage.getItem("sfxVolume") || 1;
});

// Save settings
document.getElementById("toggle-music").addEventListener("change", (e) => {
  localStorage.setItem("musicEnabled", e.target.checked);
  // Optional: control actual music playback here
});

document.getElementById("toggle-sfx").addEventListener("change", (e) => {
  localStorage.setItem("sfxEnabled", e.target.checked);
});

document.getElementById("music-volume").addEventListener("input", (e) => {
  localStorage.setItem("musicVolume", e.target.value);
  // Optional: apply to audio engine here
});

document.getElementById("sfx-volume").addEventListener("input", (e) => {
  localStorage.setItem("sfxVolume", e.target.value);
});
