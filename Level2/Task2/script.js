document.addEventListener('DOMContentLoaded', () => {
    const navToggleButton = document.getElementById('navToggleButton');
    const navLinks = document.getElementById('navLinks');

    if (navToggleButton && navLinks) {
        navToggleButton.addEventListener('click', () => {
            // Toggle the .is-active class on the nav links container
            navLinks.classList.toggle('is-active');

            // Toggle the aria-expanded attribute for accessibility
            const isActive = navLinks.classList.contains('is-active');
            navToggleButton.setAttribute('aria-expanded', isActive ? 'true' : 'false');

            // Optional: Toggle active class on button itself for 'X' animation
             navToggleButton.classList.toggle('is-active');
        });
    } else {
        console.error("Could not find navigation toggle button or links container.");
    }
});
