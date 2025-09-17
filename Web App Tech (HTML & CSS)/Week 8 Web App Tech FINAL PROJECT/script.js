document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove any existing ripple
    const oldRipple = link.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    // Create new ripple
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    // Calculate position & size
    const rect = link.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2; // ensures full coverage
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    // Append ripple
    link.appendChild(ripple);

    // Clean up after animation completes
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
