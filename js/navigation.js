const clickSound = new Audio("assets/audio/button-click.mp3");

export function playAndNavigate(url, isFullscreen = false) {
  const sound = clickSound.cloneNode();
  sound.play().catch(console.warn);

  setTimeout(() => {
    if (isFullscreen) {
      const body = document.body;
      if (body.requestFullscreen) {
        body.requestFullscreen().then(() => {
          window.location.href = url;
        });
      } else if (body.webkitRequestFullscreen) {
        body.webkitRequestFullscreen();
        window.location.href = url;
      } else if (body.msRequestFullscreen) {
        body.msRequestFullscreen();
        window.location.href = url;
      } else {
        window.location.href = url;
      }
    } else {
      window.location.href = url;
    }
  }, 200);
}

// Expose globally for onclick attributes
window.playAndNavigate = playAndNavigate;
