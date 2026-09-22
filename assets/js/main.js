document.addEventListener('DOMContentLoaded', function() {
    // Force dark theme always
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');


    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-up').forEach((el) => {
        observer.observe(el);
    });

    // Scroll interactions (Back to top & Navbar)
    const backToTopBtn = document.getElementById('backToTop');
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        // Back to top logic
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
        
        // Navbar glassmorphism logic
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
