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
//  console.log("[addMoney called]", amount);
  money += amount;
  updateUI();

  if (window.refreshUpgradeMenu) {
//    console.log("[Calling refreshUpgradeMenu]");
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