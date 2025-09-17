document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove old ripple if any
    const oldRipple = link.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    // Create new ripple
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    // Match accent color (hover bg)
    const hoverBg = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent-color')
      .trim();
    ripple.style.background = hoverBg;

    // Size & position
    const rect = link.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    // Append ripple to link
    link.appendChild(ripple);

    // Remove ripple after animation
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
