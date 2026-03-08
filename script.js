// Add ambient sound suggestion and mouse interaction
document.addEventListener('mousemove', (e) => {
    const greenhouses = document.querySelectorAll('.plant-container');
    
    greenhouses.forEach(container => {
        const rect = container.getBoundingClientRect();
        const distX = e.clientX - rect.left - rect.width / 2;
        const distY = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
            const leaves = container.querySelectorAll('.plant-leaf');
            leaves.forEach(leaf => {
                const angle = Math.atan2(distY, distX) * (180 / Math.PI);
                leaf.style.setProperty('--rotation', `${angle - 90}deg`);
            });
        }
    });
});

// Smooth scroll for content
document.addEventListener('scroll', () => {
    const content = document.querySelector('.greenhouse-content');
    const header = document.querySelector('.greenhouse-header');
    
    if (window.scrollY > 100) {
        header.style.opacity = '0.7';
    } else {
        header.style.opacity = '1';
    }
});

// Add ripple effect on click
document.querySelectorAll('.plant-container').forEach(plant => {
    plant.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(212, 232, 168, 0.5)';
        ripple.style.pointerEvents = 'none';
        ripple.style.left = e.clientX - rect.left + 'px';
        ripple.style.top = e.clientY - rect.top + 'px';
        ripple.style.width = '0px';
        ripple.style.height = '0px';
        ripple.style.animation = 'rippleExpand 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS animation for ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleExpand {
        from {
            width: 0px;
            height: 0px;
            opacity: 1;
        }
        to {
            width: 400px;
            height: 400px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🌿 Welcome to billy-bit garden! Enjoy exploring the projects.');
