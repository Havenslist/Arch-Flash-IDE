// Live preview rendering
const codeArea = document.getElementById('code-area');
const livePreview = document.getElementById('live-preview');

codeArea.addEventListener('input', () => {
  const content = codeArea.value;
  livePreview.srcdoc = content;
});

// Tab switching (HTML, CSS, JS)
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // Optional: switch content based on tab
    // For now, HTML tab controls the preview
  });
});

// Ripple effect on buttons
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

// Optional: onboarding modal trigger
const logo = document.querySelector('#logo-container img');
logo.addEventListener('click', () => {
  alert('Welcome to Arc Flash. Start with a spark. Let your code catch fire.');
});



