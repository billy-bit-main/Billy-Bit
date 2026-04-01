// ── CHANGE THIS to your raw GitHub JSON URL ──
const JSON_URL = "https://raw.githubusercontent.com/Billy-Bit/Billy-Bit/main/shortcuts.json";

const CATEGORY_ORDER = ["productivity", "automation", "life_improvement"];

const CATEGORY_META = {
  productivity: {
    label: "Productivity",
    headingClass: "heading-productivity",
    catClass: "cat-productivity",
  },
  automation: {
    label: "Automation",
    headingClass: "heading-automation",
    catClass: "cat-automation",
  },
  life_improvement: {
    label: "Life Improvement",
    headingClass: "heading-life_improvement",
    catClass: "cat-life_improvement",
  },
};

function buildCard(shortcut, key) {
  const meta = CATEGORY_META[key];
  const a = document.createElement("a");
  a.className = "shortcut-card";
  a.href = shortcut.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.innerHTML = `
    <div class="card-cat ${meta.catClass}">${meta.label}</div>
    <div class="card-name">${shortcut.name}</div>
    <div class="card-desc">${shortcut.description}</div>
    <div class="card-cta">open shortcut →</div>
  `;
  return a;
}

fetch(JSON_URL)
  .then(r => {
    if (!r.ok) throw new Error("Could not load shortcuts.json");
    return r.json();
  })
  .then(data => {
    const root = document.getElementById("shortcuts-root");
    root.innerHTML = "";

    CATEGORY_ORDER.forEach((key, i) => {
      if (!data[key] || !data[key].length) return;
      const meta = CATEGORY_META[key];

      const block = document.createElement("div");
      block.className = "section-block";
      block.style.animationDelay = `${0.2 + i * 0.15}s`;

      const heading = document.createElement("div");
      heading.className = `section-heading ${meta.headingClass}`;
      heading.textContent = meta.label;

      const grid = document.createElement("div");
      grid.className = "cards-grid";
      data[key].forEach(s => grid.appendChild(buildCard(s, key)));

      block.appendChild(heading);
      block.appendChild(grid);
      root.appendChild(block);
    });
  })
  .catch(err => {
    document.getElementById("shortcuts-root").innerHTML =
      `<p class="status-msg">⚠ ${err.message}</p>`;
  });
