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








