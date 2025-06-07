export const sounds = {
    place: new Audio("../assets/audio/tower-place.mp3"),
    firing: new Audio("../assets/audio/tower-firing.mp3"),
    hit: new Audio("../assets/audio/enemyHit.mp3"),
    upgrade: new Audio("../assets/audio/upgradeApplied.mp3"),
    sell: new Audio("../assets/audio/SellingTower.mp3"),
  };
  
  export function playSound(name) {
    const sfx = sounds[name];
    if (sfx) {
      const sound = sfx.cloneNode();
      sound.play().catch(() => {}); 
    }
  }
  