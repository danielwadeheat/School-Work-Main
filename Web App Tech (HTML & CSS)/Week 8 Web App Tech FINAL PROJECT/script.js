const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "アァイィウヴエェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン".split("");

const fontSize = 14;
let drops;
function resetDrops() {
  const columns = canvas.width / fontSize;
  drops = Array.from({ length: columns }).fill(1);
}
resetDrops();
window.addEventListener("resize", resetDrops);

let animationId;

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

// Attach effect to all nav links
document.querySelectorAll("header nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // stop immediate navigation
    const targetUrl = this.getAttribute("href");

    // Show canvas + start animation
    canvas.style.display = "block";
    draw();

    // After 1.5s, stop animation and navigate
    setTimeout(() => {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = "none";
      window.location.href = targetUrl; // now navigate
    }, 1500);
  });
});
