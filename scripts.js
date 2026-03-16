const overlay = document.getElementById('sidebar-overlay');

const planetDoofus    = document.getElementById('planet-doofus');
const sidebarDoofus   = document.getElementById('sidebar-doofus');
const closeDoofus     = document.getElementById('close-doofus');

const planetGlass     = document.getElementById('planet-glasshouse');
const sidebarGlass    = document.getElementById('sidebar-glasshouse');
const closeGlass      = document.getElementById('close-glasshouse');


function openSidebar(sidebar) {
    sidebar.classList.add('open');
    overlay.classList.add('open');
}

function closeAll() {
    sidebarDoofus.classList.remove('open');
    sidebarGlass.classList.remove('open');
    overlay.classList.remove('open');
}


planetDoofus.addEventListener('click', function() { openSidebar(sidebarDoofus); });
closeDoofus.addEventListener('click', closeAll);

planetGlass.addEventListener('click', function() { openSidebar(sidebarGlass); });
closeGlass.addEventListener('click', closeAll);

overlay.addEventListener('click', closeAll);
