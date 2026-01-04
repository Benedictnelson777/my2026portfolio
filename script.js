document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Glow Effect
    const cursor = document.querySelector('.cursor-glow');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.boxShadow = 'none';
            navbar.style.boxShadow = 'none';
        }
    });


    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate form submission
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.style.background = '#00C6FF'; // Success color
                btn.style.opacity = '1';

                contactForm.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = ''; // Reset to default gradient
                }, 3000);
            }, 1500);
        });
    }
});
