require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@latest/min/vs' } });

require(['vs/editor/editor.main'], function () {
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: #f4f4f4;
        text-align: center;
        padding-top: 100px;
        font-family: 'Courier New', monospace;
      }
      .signature {
        font-size: 48px;
        color: #4B0082;
        font-style: italic;
        text-shadow: 2px 2px #aaa;
      }
    </style>
  </head>
  <body>
    <div class="signature">Jordon</div>
  </body>
</html>`,
    language: 'html',
    theme: 'vs-dark'
  });

  editor.onDidChangeModelContent(() => {
    const code = editor.getValue();
    const previewFrame = document.getElementById('preview');
    previewFrame.srcdoc = code;
  });

  // Initial render
  document.getElementById('preview').srcdoc = editor.getValue();
});
