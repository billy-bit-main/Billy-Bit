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
