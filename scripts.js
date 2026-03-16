const planet = document.getElementById('planet-glasshouse');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const closeBtn = document.getElementById('sidebar-close');

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
}

planet.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
