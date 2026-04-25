

const projects = [
    {
        featured: true,
        date: "2025",
        title: "Glasshouse Mountains",
        description: "A 3D render of the Glasshouse Mountains, with info panels that show facts and useful information. I did not make the interactive 3D landscape, credit to <a href='https://github.com/pipxrm'>pipxrm</a> for that.",
        status: "ACTIVE",
        slug: "glasshouse-mountains"
    }
];


function render() {
    const timeline = document.getElementById('timeline');

    const sorted = [...projects].sort((a, b) => a.date.localeCompare(b.date));

    sorted.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';

        const statusClass = project.status.toLowerCase();

   
        item.innerHTML = `
            <div class="project-date">${project.date}</div>
            <div class="project-title">${project.title}</div>
            <div class="project-desc">${project.description}</div>
            <div class="project-status status-${statusClass}">${project.status}</div>
        `;

        if (project.slug == "glasshouse-mountains") {
            item.addEventListener('click', () => {
                window.location.href = `https://billy-bit.com/${project.slug}`;
            });
        elseif (project.slug) {
            item.addEventListener('click', () => {
                window.location.href = `https://billy-bit.com/webpages-HTMLCSSJS/${project.slug}`;
            });
        }

        if (project.featured) {
            item.classList.add('featured-project')
        }
        
        timeline.appendChild(item);
    });
}


function updateFocus() {
    const items = document.querySelectorAll('.project-item');
    const center = window.innerHeight / 2;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - center);
        const maxDistance = window.innerHeight * 0.55;

        // focus goes from 0 (far) to 1 (centered)
        const focus = Math.max(0, 1 - distance / maxDistance);

        const scale   = 0.93 + focus * 0.09;   // 0.93 → 1.02
        const opacity = 0.35 + focus * 0.65;   // 0.35 → 1.0

        item.style.transform = `scale(${scale})`;
        item.style.opacity   = opacity;
    });
}

render();
updateFocus();
window.addEventListener('scroll', updateFocus, { passive: true });
