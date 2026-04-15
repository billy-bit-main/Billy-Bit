// drag-to-scroll for parts rail and gallery strip
function makeDraggable(el) {
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    el.addEventListener('mousedown', e => {
        isDown = true;
        el.style.cursor = 'grabbing';
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
    });
    el.addEventListener('mouseleave', () => {
        isDown = false;
        el.style.cursor = 'grab';
    });
    el.addEventListener('mouseup', () => {
        isDown = false;
        el.style.cursor = 'grab';
    });
    el.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1.5;
        el.scrollLeft = scrollLeft - walk;
    });

    el.style.cursor = 'grab';
}

makeDraggable(document.getElementById('parts-rail'));
makeDraggable(document.getElementById('gallery-strip'));

// section fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.section').forEach(el => {
    el.classList.add('fade-section');
    observer.observe(el);
});

// inject fade-section CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-section {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-section.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// waveform — randomise heights on interval for a live feel
const bars = document.querySelectorAll('.hero-waveform span');
function randomiseWave() {
    bars.forEach(bar => {
        const h = Math.floor(Math.random() * 28) + 4;
        const delay = (Math.random() * 0.4).toFixed(2);
        bar.style.animationDelay = delay + 's';
        bar.style.setProperty('--wave-h', h + 'px');
    });
}
setInterval(randomiseWave, 2800);
