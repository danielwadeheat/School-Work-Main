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
