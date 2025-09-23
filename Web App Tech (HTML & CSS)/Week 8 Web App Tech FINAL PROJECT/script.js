document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove any existing ripple
    const oldRipple = this.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    // Get click position relative to the link
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create ripple element
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    // Set size (make it cover the whole button)
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.width = ripple.style.height = `${size}px`;

    // Set position (center the ripple at click)
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Add ripple to link
    this.appendChild(ripple);

    // Remove ripple after animation
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});
