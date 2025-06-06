export let lives = 20;
export let money = 500;
export let wave = 0;

export function updateUI() {
  document.getElementById("lives").textContent = lives;
  document.getElementById("money").textContent = money;
  document.getElementById("wave").textContent = wave;
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
  console.log("[addMoney called]", amount);
  money += amount;
  updateUI();

  if (window.refreshUpgradeMenu) {
    console.log("[Calling refreshUpgradeMenu]");
    window.refreshUpgradeMenu();
  }
}