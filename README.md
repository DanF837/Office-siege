# Office Siege - v2.0

**Office Siege** is a free, offline tower defense game where you defend your office from quirky, chaotic waves of workplace-themed enemies — with improvised towers like Coffee Cannons, Paper Shredders, and Monitor Snipers.

Built using **HTML5**, **JavaScript**, and **Electron**, this game is packaged for **Windows** and **Linux** and launched directly from an executable.

---

## Gameplay Overview

- **Defend Your Office**
  Fight off waves of office-themed enemies (from annoying interns to annoying HR).

- **Place Towers**
  Choose from three tower types:
  - **Coffee Cannon** – balanced damage against groups
  - **Paper Shredder** – fast, single-target DPS
  - **Monitor Sniper** – long-range precision

- **Survive the Waves**
  Enemies grow faster and tougher with each wave. A **boss enemy** arrives at **Wave 25**.

- **Endless Mode**
  After beating the boss, continue playing with infinitely scaling waves. Mini-bosses appear every 10 waves.

- **Fast-Forward**
  Toggle 2x speed to blast through easier waves.

- **Tower Tooltips**
  Hover towers in the sidebar to preview stats before purchasing.

- **Strategize**
  Earn money by defeating enemies, upgrade towers, or sell to optimize your layout.

- **Audio Settings**
  Music & SFX can be toggled or volume adjusted in the in-game settings panel.

---

## How to Install & Play

### Windows
1. Visit the **[Office Siege GitHub Releases Page](https://github.com/DanF837/Office-siege/releases)**
2. Download the latest `OfficeSiege.exe` file listed under **Assets**
3. Double-click the `.exe` file
4. **Play instantly** — no install or setup required!

### Linux
1. Visit the **[Office Siege GitHub Releases Page](https://github.com/DanF837/Office-siege/releases)**
2. Download the `.zip` file labeled for **Linux**
3. Extract the folder
4. Inside, run the `OfficeSiege` binary
   > _(You may need to make it executable: `chmod +x OfficeSiege`)_
5. **Launch and play!**

---

## System Requirements

### Windows
- **OS:** Windows 10 or later
- **CPU:** 2.0 GHz dual-core or better
- **RAM:** 4 GB minimum
- **Disk Space:** ~150 MB
- **Graphics:** Integrated GPU is fine (uses HTML5 Canvas)
- **Internet:** Not required (runs offline)

### Linux
- **OS:** Most 64-bit Linux distributions (tested on Linux Mint)
- **Executable:** `OfficeSiege` binary
- **Permissions:** May need `chmod +x OfficeSiege`
- **Internet:** Not required
- **Dependencies:** None (Electron bundled)

---

## Project Structure

```
Office-siege/
├── index.html           # Main menu
├── hub.html             # Mission hub / map select
├── credits.html         # Credits page
├── patch-notes.html     # Patch notes viewer
├── patch-notes.txt      # Patch notes content
├── ui.html              # In-game UI overlay (loaded dynamically)
├── ui.js                # UI logic (lives, money, wave, settings)
├── style.css            # Shared styles for all pages and game UI
├── main.js              # Electron main process
├── preload.js           # Electron preload script
├── package.json         # Project config
├── js/
│   ├── config.js        # Game constants, tower stats, enemy types
│   ├── navigation.js    # Shared click-sound + page navigation
│   ├── globalAudio.js   # Theme music (respects localStorage settings)
│   └── gameAudio.js     # SFX (place, fire, hit, upgrade, sell)
├── maps/
│   └── hr.html          # HR Hallway game map (main game logic)
└── assets/
    ├── audio/           # Music and sound effects
    ├── enemy/           # Enemy sprites
    ├── tower/           # Tower sprites
    ├── maps/            # Map background images
    └── icon.ico         # App icon
```

---

## Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- npm (comes with Node.js)

### Setup
```bash
git clone https://github.com/DanF837/Office-siege.git
cd Office-siege
npm install
```

### Run locally
```bash
npm start
```

### Package for distribution
```bash
npm run package-win    # Windows build
npm run package-linux  # Linux build
```

Builds are output to the `dist/` folder.

---

## Technical Stack

- HTML5 Canvas for rendering
- Vanilla JavaScript + ES6 modules
- Electron for desktop app bundling
- LocalStorage for persistent settings
- Custom drag & drop tower placement
- Custom background music and SFX

---

## Bug Reporting

Spotted a bug or issue?
Please report it on the GitHub Issues page:
[https://github.com/DanF837/Office-siege/issues](https://github.com/DanF837/Office-siege/issues)

---

## Version

`v2.0.0` — Codebase cleanup, endless mode, fast-forward, tower tooltips

---

## Credits

Developed by: **Daniel**
Assets: Mix of custom-created and royalty-free assets
Audio: Edited from free-to-use sound libraries

---

## License

Licensed under the MIT License.
Free to play, share, and modify — but not for resale.

---

Thank you for playing **Office Siege** — where spreadsheets are deadly and printers fight back!
