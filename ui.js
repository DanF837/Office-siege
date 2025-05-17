export let lives = 20;
export let money = 500;
export let wave = 1;

export function updateUI() {
  document.getElementById("lives").textContent = lives;
  document.getElementById("money").textContent = money;
  document.getElementById("wave").textContent = wave;
}

export function startWave() {
  console.log("Wave started:", wave);
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
}