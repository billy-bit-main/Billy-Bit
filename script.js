// Plant hover interaction
document.querySelectorAll('.plant-link').forEach(link => {
    const plant = link.querySelector('.plant');
    const leaves = link.querySelectorAll('.leaf');

    link.addEventListener('mouseenter', () => {
        leaves.forEach((leaf, index) => {
            leaf.style.animation = 'none';
            setTimeout(() => {
                leaf.style.animation = '';
            }, 10);
        });
    });

    link.addEventListener('mouseleave', () => {
        // Reset leaf animations on mouse leave
        leaves.forEach(leaf => {
            leaf.style.animation = '';
        });
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add a subtle parallax effect on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < 500) {
        header.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// Intersection Observer for staggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all plants
document.querySelectorAll('.plant-link').forEach(plant => {
    plant.style.opacity = '0';
    plant.style.transform = 'translateY(20px)';
    plant.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(plant);
});

// Add click ripple effect
document.querySelectorAll('.plant-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Leaf rotation enhancement on interaction
document.querySelectorAll('.plant').forEach(plant => {
    plant.addEventListener('mouseenter', function() {
        const leaves = this.querySelectorAll('.leaf');
        leaves.forEach((leaf, index) => {
            const randomRotation = (Math.random() - 0.5) * 10;
            leaf.style.setProperty('--rotation', `${randomRotation}deg`);
        });
    });
});

console.log('🌿 Welcome to billy-bit garden! Enjoy exploring the projects.');
