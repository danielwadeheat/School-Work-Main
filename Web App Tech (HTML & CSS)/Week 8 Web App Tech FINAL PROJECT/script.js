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
const hero = document.querySelector(".hero-image");

// Configure glitch
const glitch = PowerGlitch.glitch(hero, {
  playMode: "hover", // Only shows on hover
  createContainers: true,
  hideOverflow: false, // Allow overflow
  timing: {
    duration: 4000, // long (4s)
    iterations: 1,  // run once per hover
  },
  glitchTimeSpan: {
    start: 0.1,
    end: 0.9,
  },
  shake: {
    velocity: 15, // slower & laggier
    amplitudeX: 0.2,
    amplitudeY: 0.2,
  },
  slice: {
    count: 10, // more slices
    velocity: 8, // slower movement
    minHeight: 0.05,
    maxHeight: 0.15,
    hueRotate: true,
  },
});

// ======= NEO SHADES + MINI REFLECTION (CLICK TO TOGGLE) =======
const heroImage = document.querySelector(".hero-image");
const shadesCanvas = document.getElementById("shadesCanvas");
const shadesCtx = shadesCanvas.getContext("2d");

// Matrix-like characters
const shadesSymbols = "01{}();<>=+- React.useEffect const let return";
const shadesFontSize = 12;
const shadesColumns = Math.floor(shadesCanvas.width / shadesFontSize);
let shadesYpos = Array(shadesColumns).fill(0);
let shadesAnimFrame;
let shadesActive = false; // track toggle state

function drawShadesReflection() {
  shadesCtx.fillStyle = "rgba(0,0,0,0.2)";
  shadesCtx.fillRect(0, 0, shadesCanvas.width, shadesCanvas.height);

  shadesCtx.fillStyle = "#0F0";
  shadesCtx.font = shadesFontSize + "px monospace";

  for (let i = 0; i < shadesColumns; i++) {
    const char = shadesSymbols[Math.floor(Math.random() * shadesSymbols.length)];
    shadesCtx.fillText(char, i * shadesFontSize, shadesYpos[i] * shadesFontSize);

    if (shadesYpos[i] * shadesFontSize > shadesCanvas.height && Math.random() > 0.975) {
      shadesYpos[i] = 0;
    }
    shadesYpos[i]++;
  }

  shadesAnimFrame = requestAnimationFrame(drawShadesReflection);
}

// Toggle shades on click
heroImage.addEventListener("click", () => {
  shadesActive = !shadesActive;

  if (shadesActive) {
    heroImage.classList.add("active");
    drawShadesReflection();
  } else {
    heroImage.classList.remove("active");
    cancelAnimationFrame(shadesAnimFrame);
    shadesCtx.clearRect(0, 0, shadesCanvas.width, shadesCanvas.height);
  }
});
