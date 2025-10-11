const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@latest/min/vs' } });

require(['vs/editor/editor.main'], function () {
  const files = {
    html: `<!DOCTYPE html>
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
    
  </body>
</html>`,
    css: `body {
  background-color: #fdf6e3;
  font-family: 'Courier New', monospace;
}`,
    js: `console.log("Welcome to Arc Flash IDE");`
  };

  let currentFile = 'html';

  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: files[currentFile],
    language: 'html',
    theme: 'vs-dark'
  });

  window.switchFile = function (file) {
    currentFile = file;
    editor.setValue(files[file]);
    editor.updateOptions({ language: file === 'js' ? 'javascript' : file });
    if (file === 'html') {
      document.getElementById('preview').srcdoc = editor.getValue();
    } else {
      document.getElementById('preview').srcdoc = files['html'];
    }
  };

  document.getElementById('preview').srcdoc = files['html'];
});
window.saveProject = async function () {
  try {
    const docRef = await db.collection("projects").add({
      html: files.html,
      css: files.css,
      js: files.js,
      timestamp: new Date()
    });
    alert("Project saved! ID: " + docRef.id);
  } catch (e) {
    console.error("Error saving project: ", e);
    alert("Failed to save project.");
  }
};



