document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    // Get click coordinates relative to link
    const rect = link.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';

    link.appendChild(ripple);

    // Remove after animation ends
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

