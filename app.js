const STORAGE_KEY = "findsafe_reports_v1";

const sampleReports = [
  {
    id: "R001",
    name: "Ramanathan K",
    age: 72,
    location: "Chennai Central",
    lastSeenDate: "2026-10-06",
    contactName: "Meena K",
    contactPhone: "9000000001",
    description: "Wearing a light blue shirt and dark trousers. Carries a small black walking stick.",
    status: "active"
  },
  {
    id: "R002",
    name: "Lakshmi Devi",
    age: 68,
    location: "Tambaram Bus Stand",
    lastSeenDate: "2026-10-02",
    contactName: "Arun S",
    contactPhone: "9000000002",
    description: "Wearing a green saree with a cream shawl. Please approach calmly and contact the family.",
    status: "active"
  },
  {
    id: "R003",
    name: "Joseph M",
    age: 75,
    location: "Coimbatore Railway Station",
    lastSeenDate: "2026-09-29",
    contactName: "Maria J",
    contactPhone: "9000000003",
    description: "Reported missing earlier; safely reunited with family.",
    status: "resolved"
  }
];

let reports = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || sampleReports;

const list = document.getElementById("reportsList");
const empty = document.getElementById("emptyState");
const search = document.getElementById("searchInput");
const filter = document.getElementById("statusFilter");
const modal = document.getElementById("reportModal");
const form = document.getElementById("reportForm");

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[c]));
}

function render() {
  const q = search.value.trim().toLowerCase();
  const status = filter.value;
  const filtered = reports.filter(r => {
    const text = `${r.name} ${r.location} ${r.description}`.toLowerCase();
    return (!q || text.includes(q)) && (status === "all" || r.status === status);
  });

  document.getElementById("totalCount").textContent = reports.length;
  document.getElementById("activeCount").textContent = reports.filter(r => r.status === "active").length;
  document.getElementById("resolvedCount").textContent = reports.filter(r => r.status === "resolved").length;

  list.innerHTML = filtered.map(r => `
    <article class="report-card">
      <div class="report-head">
        <div>
          <h3>${escapeHTML(r.name)}, ${escapeHTML(r.age)}</h3>
          <div class="meta"><strong>Last seen:</strong> ${escapeHTML(r.location)} on ${escapeHTML(r.lastSeenDate)}</div>
        </div>
        <span class="badge ${r.status}">${r.status.toUpperCase()}</span>
      </div>
      <p>${escapeHTML(r.description)}</p>
      <div class="meta"><strong>Family contact:</strong> ${escapeHTML(r.contactName)} · ${escapeHTML(r.contactPhone)}</div>
      ${r.status === "active" ? `<div class="actions"><button class="secondary" onclick="markResolved('${r.id}')">Mark Resolved</button></div>` : ""}
    </article>
  `).join("");

  empty.classList.toggle("hidden", filtered.length !== 0);
}

function markResolved(id) {
  const report = reports.find(r => r.id === id);
  if (report) {
    report.status = "resolved";
    save();
    render();
  }
}

function openModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  form.reset();
}

document.getElementById("openReportBtn").addEventListener("click", openModal);
document.getElementById("closeModalBtn").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
search.addEventListener("input", render);
filter.addEventListener("change", render);

form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const report = Object.fromEntries(data.entries());
  report.id = "R" + String(Date.now()).slice(-6);
  report.age = Number(report.age);
  report.status = "active";
  reports.unshift(report);
  save();
  render();
  closeModal();
  alert("Report submitted successfully.");
});

render();
