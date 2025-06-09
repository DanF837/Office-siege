// Game constants
export const VIRTUAL_WIDTH = 1920;
export const VIRTUAL_HEIGHT = 1080;
export const SPRITE_SIZE = 64;
export const TOWER_COLLISION_RADIUS = 32;
export const PATH_BUFFER = 30;
export const TOWER_MIN_DISTANCE = 50;
export const PROJECTILE_SPEED = 600;
export const SPAWN_INTERVAL = 800;
export const MAX_UPGRADE_LEVEL = 10;
export const UPGRADE_BASE_COST = 100;

// Tower stats
export const towerStats = {
  cannon:   { range: 180, damage: 25, fireRate: 1 },
  sniper:   { range: 9999, damage: 100, fireRate: 6, losBlocked: true },
  shredder: { range: 180, damage: 10, fireRate: 0.25 },
};

export const defaultTower = { range: 100, damage: 20, fireRate: 1 };

export const towerPrices = {
  cannon: 100,
  shredder: 75,
  sniper: 150,
};

export const towerNames = {
  cannon: "Coffee Cannon",
  shredder: "Paper Shredder",
  sniper: "Monitor Sniper",
};

export const towerDescriptions = {
  cannon: "Balanced damage & range",
  shredder: "Rapid fire, short range",
  sniper: "High damage, infinite range (blocked by obstacles)",
};

// Enemy types
export const enemyTypes = {
  normal: { hp: 100, speed: 100, reward: 1 },
  fast:   { hp: 60,  speed: 180, reward: 1 },
  tank:   { hp: 300, speed: 60,  reward: 1 },
  boss:   { hp: 50000, speed: 40, reward: 1000 },
};

// Difficulty multipliers
export const difficultySettings = {
  easy:   { hpMult: 0.7, speedMult: 0.9 },
  normal: { hpMult: 1.0, speedMult: 1.0 },
  hard:   { hpMult: 1.4, speedMult: 1.1 },
};

// Allowed placement color (from map background)
export const PLACEMENT_COLOR = { r: 194, g: 154, b: 85 };
export const COLOR_TOLERANCE = 10;
