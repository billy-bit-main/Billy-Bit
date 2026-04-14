const overlay = document.getElementById('sidebar-overlay');

function openSidebar(sidebar) {
    sidebar.classList.add('open');
    overlay.classList.add('open');
}

function closeAll() {
    document.querySelectorAll('.sidebar').forEach(s => s.classList.remove('open'));
    overlay.classList.remove('open');
}

const pairs = [
    ['planet-doofus',  'sidebar-doofus'],
    ['planet-glasshouse', 'sidebar-glasshouse'],
    ['planet-shortcuts', 'sidebar-shortcuts'],
    ['planet-bot',     'sidebar-p4'],
    ['planet-display', 'sidebar-p5'],
    ['planet-p6',      'sidebar-p6'],
    ['planet-p7',      'sidebar-p7'],
    ['planet-p8',      'sidebar-p8'],
];

pairs.forEach(([planetId, sidebarId]) => {
    document.getElementById(planetId).addEventListener('click', () => {
        openSidebar(document.getElementById(sidebarId));
    });
});

document.querySelectorAll('.sidebar-close').forEach(btn => btn.addEventListener('click', closeAll));
overlay.addEventListener('click', closeAll);

if ('ontouchstart' in window) {
    let startX, startY, panX = 0, panY = 0, dragging = false;
    const ss = document.querySelector('.solar-system');

    document.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX - panX;
        startY = e.touches[0].clientY - panY;
        dragging = false;
    });

    document.addEventListener('touchmove', e => {
        e.preventDefault();
        dragging = true;
        panX = e.touches[0].clientX - startX;
        panY = e.touches[0].clientY - startY;
        ss.style.transform = `translate(calc(-50% + ${panX}px), calc(-50% + ${panY}px))`;
    }, { passive: false });

    document.addEventListener('touchend', e => {
        if (dragging) e.preventDefault();
    });
}
