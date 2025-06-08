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
      label.style.color = canAfford ? "#fff" : "#888";
    }
  });
}

window.updateVolumeLabel = function (slider) {
  const labelId = slider.id + "-label";
  const label = document.getElementById(labelId);
  if (label) {
    label.textContent = Math.round(slider.value * 100) + "%";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  updateTowerAvailability();

  const toggleMusic = document.getElementById("toggle-music");
  const toggleSfx = document.getElementById("toggle-sfx");
  const musicVolume = document.getElementById("music-volume");
  const sfxVolume = document.getElementById("sfx-volume");
  const openSettingsBtn = document.getElementById("settings-btn");

  if (toggleMusic) {
    toggleMusic.checked = localStorage.getItem("musicEnabled") !== "false";
    toggleMusic.addEventListener("change", (e) => {
      localStorage.setItem("musicEnabled", e.target.checked);
    });
  }

  if (toggleSfx) {
    toggleSfx.checked = localStorage.getItem("sfxEnabled") !== "false";
    toggleSfx.addEventListener("change", (e) => {
      localStorage.setItem("sfxEnabled", e.target.checked);
    });
  }

  if (musicVolume) {
    musicVolume.value = localStorage.getItem("musicVolume") || 1;
    musicVolume.addEventListener("input", function () {
      localStorage.setItem("musicVolume", this.value);
      updateVolumeLabel(this);
    });
    updateVolumeLabel(musicVolume);
  }

  if (sfxVolume) {
    sfxVolume.value = localStorage.getItem("sfxVolume") || 1;
    sfxVolume.addEventListener("input", function () {
      localStorage.setItem("sfxVolume", this.value);
      updateVolumeLabel(this);
    });
    updateVolumeLabel(sfxVolume);
  }

  if (openSettingsBtn) {
    openSettingsBtn.addEventListener("click", () => {
      document.getElementById("settings-popup").style.display = "flex";
    });
  }
});

// Settings buttons
window.closeSettings = function () {
  document.getElementById("settings-popup").style.display = "none";
};

window.resetProgress = function () {
  if (confirm("Are you sure you want to reset all progress?")) {
    localStorage.clear();
    location.reload();
  }
};
