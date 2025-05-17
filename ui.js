export let lives = 20;
export let money = 200;
export let wave = 0;

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