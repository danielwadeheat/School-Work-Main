// ======= MATRIX EFFECT SETUP =======
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", () => {
  resizeCanvas();
  resetDrops();
});

// Characters for Matrix rain
const letters = "アァイィウヴエェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン".split("");

// Font settings
const fontSize = 14;
let drops;

// Initialize drops based on canvas width
function resetDrops() {
  const columns = canvas.width / fontSize;
  drops = Array.from({ length: columns }).fill(1);
}
resetDrops();

// Animation variables
let animationId;

// Draw Matrix rain
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  animationId = requestAnimationFrame(draw);
}

// ======= NAV LINK TRIGGER =======
document.querySelectorAll("header nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetUrl = this.getAttribute("href");

    // Show canvas + start animation
    canvas.style.display = "block";
    draw();

    // Flag to continue effect on next page
    sessionStorage.setItem("matrixEffect", "true");

    // Delay before navigating
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 1500); // 1.5 seconds before navigation
  });
});

// ======= CONTINUE EFFECT ON PAGE LOAD =======
window.addEventListener("load", () => {
  if (sessionStorage.getItem("matrixEffect") === "true") {
    canvas.style.display = "block";
    draw();

    // Remove the flag
    sessionStorage.removeItem("matrixEffect");

    // Stop after 1 second lingering
    setTimeout(() => {
      // Fade out the canvas
      canvas.style.opacity = "0";
      setTimeout(() => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = "none";
        canvas.style.opacity = "1"; // Reset for next time
      }, 600); // Match the CSS transition duration
    }, 1000); // 1 second lingering
  }
});

// ======= POWERGLITCH SETUP =======
const heroEl = document.querySelector(".hero-image");
if (heroEl && window.PowerGlitch) {
  PowerGlitch.glitch(heroEl, {
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: { duration: 4000, iterations: 1 },
    glitchTimeSpan: { start: 0.1, end: 0.9 },
    shake: { velocity: 15, amplitudeX: 0.2, amplitudeY: 0.2 },
    slice: { count: 10, velocity: 8, minHeight: 0.05, maxHeight: 0.15, hueRotate: true },
  });
}

// ======= REMOVE/SAFEGUARD OLD SINGLE-CANVAS BLOCK =======
// Guard so missing #shadesCanvas doesn't crash the file
const heroImage = document.querySelector(".hero-image");
const shadesCanvas = document.getElementById("shadesCanvas");
if (heroImage && shadesCanvas) {
  const scx = shadesCanvas.getContext("2d");
  const shadesSymbols = "01{}();<>=+- React.useEffect const let return";
  const shadesFontSize = 12;
  const shadesColumns = Math.floor(shadesCanvas.width / shadesFontSize);
  let shadesYpos = Array(shadesColumns).fill(0);
  let shadesAnimFrame;
  let shadesActive = false;

  function drawShadesMatrix() {
    scx.clearRect(0,0,shadesCanvas.width, shadesCanvas.height);
    scx.fillStyle = "rgba(9, 245, 29, 0.81)";
    scx.fillRect(0, 0, shadesCanvas.width, shadesCanvas.height);
    scx.fillStyle = "#0F0";
    scx.font = shadesFontSize + "px monospace";
    for (let i = 0; i < shadesColumns; i++) {
      const char = shadesSymbols[Math.floor(Math.random() * shadesSymbols.length)];
      scx.fillText(char, i * shadesFontSize, shadesYpos[i] * shadesFontSize);
      if (shadesYpos[i] * shadesFontSize > shadesCanvas.height && Math.random() > 0.975) shadesYpos[i] = 0;
      shadesYpos[i]++;
    }
    shadesAnimFrame = requestAnimationFrame(drawShadesMatrix);
  }

  heroImage.addEventListener("click", () => {
    shadesActive = !shadesActive;
    if (shadesActive) { heroImage.classList.add("active"); drawShadesMatrix(); }
    else { heroImage.classList.remove("active"); cancelAnimationFrame(shadesAnimFrame); scx.clearRect(0,0,shadesCanvas.width,shadesCanvas.height); }
  });
}

// ======= MINI LENS MATRIX (per-lens) =======
function startLensMatrix(canvas) {
  if (!canvas) return;

  // If already running, stop before restarting
  if (canvas.__rafId) cancelAnimationFrame(canvas.__rafId);

  const ctxL = canvas.getContext('2d');
  const fontSize = 12;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array.from({ length: cols }, () => 1);

  function drawLens() {
    // Dark trail
    ctxL.globalCompositeOperation = 'source-over';
    ctxL.fillStyle = 'rgba(0,0,0,0.12)';
    ctxL.fillRect(0, 0, canvas.width, canvas.height);

    // Bright green letters
    ctxL.globalCompositeOperation = 'screen';
    ctxL.filter = 'saturate(1.6) brightness(1.35)';
    ctxL.fillStyle = '#00ff00';
    ctxL.shadowColor = '#00ff00';
    ctxL.shadowBlur = 3;
    ctxL.font = '900 ' + fontSize + 'px monospace';

    for (let i = 0; i < cols; i++) {
      const ch = letters[(Math.random() * letters.length) | 0];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctxL.fillText(ch, x, y);
      ctxL.fillText(ch, x, y); // double-pass to intensify
      if (y > canvas.height && Math.random() > 0.965) drops[i] = 0;
      drops[i]++;
    }

    // reset
    ctxL.shadowBlur = 0;
    ctxL.filter = 'none';
    ctxL.globalCompositeOperation = 'source-over';

    canvas.__rafId = requestAnimationFrame(drawLens);
  }
  drawLens();
}

function stopLensMatrix(canvas) {
  if (!canvas) return;
  if (canvas.__rafId) {
    cancelAnimationFrame(canvas.__rafId);
    canvas.__rafId = null;
  }
  const ctxL = canvas.getContext('2d');
  ctxL.clearRect(0, 0, canvas.width, canvas.height);
}

// ======= REVEAL/TOGGLE ON CLICK =======
(function initHeroGlasses() {
  const hero = document.querySelector('.hero-image');
  const left = document.getElementById('lensLeft');
  const right = document.getElementById('lensRight');
  if (!hero || !left || !right) return;

  let visible = false;
  hero.addEventListener('click', () => {
    visible = !visible;
    if (visible) {
      hero.classList.add('glasses-on');
      startLensMatrix(left);
      startLensMatrix(right);
    } else {
      hero.classList.remove('glasses-on');
      stopLensMatrix(left);
      stopLensMatrix(right);
    }
  });
})();
