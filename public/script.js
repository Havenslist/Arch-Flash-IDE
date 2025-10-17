const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const previewFrame = document.getElementById("live-preview");
const tabs = document.querySelectorAll(".tab");
const codeAreas = document.querySelectorAll(".code-area");

function updatePreview() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  const fullCode = html + css + js;

  const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  preview.open();
  preview.write(fullCode);
  preview.close();
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    codeAreas.forEach(area => area.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab + "Code").classList.add("active");
  });
});

htmlCode.addEventListener("input", updatePreview);
cssCode.addEventListener("input", updatePreview);
jsCode.addEventListener("input", updatePreview);

updatePreview();
document.getElementById("runBtn").addEventListener("click", () => {
  const preview = document.getElementById("previewPane");
  preview.classList.add("ripple");
  setTimeout(() => preview.classList.remove("ripple"), 1000);
});

document.getElementById("commitBtn").addEventListener("click", () => {
  document.getElementById("commitModal").classList.remove("hidden");
});

document.getElementById("confirmCommit").addEventListener("click", () => {
  const reflection = document.querySelector("#commitModal input").value;
  logMilestone("Refinement", reflection);
  document.getElementById("commitModal").classList.add("hidden");
});

document.getElementById("deployBtn").addEventListener("click", () => {
  document.body.classList.add("sunrise");
  logMilestone("Breakthrough", "Deployed with intention.");
  setTimeout(() => document.body.classList.remove("sunrise"), 1500);
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  const confirm = window.confirm("Are you releasing with intention?");
  if (confirm) {
    document.getElementById("previewPane").style.opacity = 0;
    logMilestone("Release", "Element removed with intention.");
  }
});

function logMilestone(type, message) {
  const log = document.getElementById("milestoneLog");
  const entry = document.createElement("div");
  entry.innerHTML = `<strong>${type}</strong>: ${message} <em>(${new Date().toLocaleTimeString()})</em>`;
  log.appendChild(entry);
}
// === Arc Flash Glyph Logic ===

document.getElementById("runBtn").addEventListener("click", () => {
  const preview = document.getElementById("previewPane");
  preview.classList.add("ripple");
  setTimeout(() => preview.classList.remove("ripple"), 1000);
});

document.getElementById("commitBtn").addEventListener("click", () => {
  document.getElementById("commitModal").classList.remove("hidden");
});

document.getElementById("confirmCommit").addEventListener("click", () => {
  const reflection = document.querySelector("#commitModal input").value;
  logMilestone("Refinement", reflection);
  document.getElementById("commitModal").classList.add("hidden");
});

document.getElementById("deployBtn").addEventListener("click", () => {
  document.body.classList.add("sunrise");
  logMilestone("Breakthrough", "Deployed with intention.");
  setTimeout(() => document.body.classList.remove("sunrise"), 1500);
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  const confirm = window.confirm("Are you releasing with intention?");
  if (confirm) {
    document.getElementById("previewPane").style.opacity = 0;
    logMilestone("Release", "Element removed with intention.");
  }
});

function logMilestone(type, message) {
  const log = document.getElementById("milestoneLog");
  const entry = document.createElement("div");
  entry.innerHTML = `<strong>${type}</strong>: ${message} <em>(${new Date().toLocaleTimeString()})</em>`;
  log.appendChild(entry);
}











