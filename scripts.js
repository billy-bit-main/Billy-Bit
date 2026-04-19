const overlay = document.getElementById('sidebar-overlay');
let sidebarOpen = false; 
let infoOpen = false;
function openSidebar(sidebar) {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    sidebarOpen = true;
}

function closeAll() {
    document.querySelectorAll('.sidebar').forEach(s => s.classList.remove('open'));
    overlay.classList.remove('open');
    sidebarOpen = false; 
}

function openInfo(info) {
    info.classList.add('isopen')
    infoOpen = true;
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
    const planet = document.getElementById(planetId);
    const sidebar = document.getElementById(sidebarId);
    if (planet && sidebar) {
        planet.addEventListener('click', () => openSidebar(sidebar));
    }
});

document.querySelectorAll('.sidebar-close').forEach(btn => btn.addEventListener('click', closeAll));
overlay.addEventListener('click', closeAll);

if ('ontouchstart' in window) {
    let startX, startY, panX = 0, panY = 0, dragging = false;
    const ss = document.querySelector('.solar-system');

    document.addEventListener('touchstart', e => {
        // Only allow pan start if sidebar is closed
        if (sidebarOpen) return; 
        
        startX = e.touches[0].clientX - panX;
        startY = e.touches[0].clientY - panY;
        dragging = false;
    });

    document.addEventListener('touchmove', e => {
        if (sidebarOpen) return;

        e.preventDefault();
        dragging = true;
        panX = e.touches[0].clientX - startX;
        panY = e.touches[0].clientY - startY;
        
        if (ss) {
            ss.style.transform = `translate(calc(-50% + ${panX}px), calc(-50% + ${panY}px))`;
        }
    }, { passive: false });

    document.addEventListener('touchend', e => {
        if (dragging && !sidebarOpen) e.preventDefault();
    });
}
