const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const livePreview = document.getElementById('live-preview');
const tabs = document.querySelectorAll('.tab');
const codeAreas = document.querySelectorAll('.code-area');

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    codeAreas.forEach(area => area.classList.remove('active'));
    const selected = document.getElementById(`${tab.dataset.tab}Code`);
    selected.classList.add('active');

    updatePreview();
  });
});

// Live preview rendering
function updatePreview() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  livePreview.srcdoc = `${html}${css}${js}`;
}

[htmlCode, cssCode, jsCode].forEach(area => {
  area.addEventListener('input', updatePreview);
});

// Ripple effect
const buttons = document.querySelectorAll('.action');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});



