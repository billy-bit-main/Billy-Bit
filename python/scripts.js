// ── PROJECT DATA ──────────────────────────────────────────────
// To add a project: copy one object, fill it in, done.
// status options: "ACTIVE" | "WIP" | "ARCHIVED"
// slug: the path on billy-bit.com — e.g. "billy-bot" → billy-bit.com/billy-bot
// omit slug if there's no dedicated page yet

const projects = [
    {
        date: "April 2026",
        title: "Billy Bot",
        description: "A local voice assistant running 24/7 on a Raspberry Pi. Listens for the wake word 'Billy', then handles weather, timers, jokes, maths, and more.,
        status: "ACTIVE",
        slug: "billy-bot"
    },

    {
        date: "2024",
        title: "Billy Bot",
        description: "A local voice assistant running 24/7 on a Raspberry Pi. Listens for the wake word 'Billy', then handles weather, timers, jokes, maths, and more — no cloud AI, just keyword matching and pre-recorded clips of my own voice.",
        status: "ACTIVE",
        slug: "billy-bot"
    },
    // {
    //     date: "2025",
    //     title: "Your Next Project",
    //     description: "One sentence on what it does.",
    //     status: "WIP",
    //     slug: "your-slug"
    // },
];

// ── RENDER ────────────────────────────────────────────────────
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

        if (project.slug) {
            item.addEventListener('click', () => {
                window.location.href = `https://billy-bit.com/${project.slug}`;
            });
        }

        timeline.appendChild(item);
    });
}

// ── FOCUS SCALING ON SCROLL ───────────────────────────────────
// Items near the centre of the viewport are full opacity + slightly larger.
// Items further away are dimmed + scaled down a touch.

function updateFocus() {
    const items = document.querySelectorAll('.project-item');
    const center = window.innerHeight / 2;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - center);
        const maxDistance = window.innerHeight * 0.55;

        const focus = Math.max(0, 1 - distance / maxDistance);

        const scale   = 0.93 + focus * 0.09;   // 0.93 → 1.02
        const opacity = 0.35 + focus * 0.65;   // 0.35 → 1.0

        item.style.transform = `scale(${scale})`;
        item.style.opacity   = opacity;
    });
}

// ── INIT ──────────────────────────────────────────────────────
render();
updateFocus();
window.addEventListener('scroll', updateFocus, { passive: true });
