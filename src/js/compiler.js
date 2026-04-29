// Global variables
let editor;
let pyodide;

// Initialize Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' } });
require(['vs/editor/editor.main'], function () {
  editor = monaco.editor.create(document.getElementById('monaco-container'), {
    value: "console.log('Brito Engine Active!');",
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
    fontSize: 28,
    fontFamily: 'JetBrains Mono',
    wordWrap: 'on'
  });

  // Change Monaco language dynamically
  document.getElementById("lang-select").addEventListener("change", function () {
    const lang = this.value;
    let monacoLang = "javascript";

    if (lang === "python") monacoLang = "python";
    else if (lang === "typescript") monacoLang = "typescript";
    else if (lang === "html" || lang === "tailwind") monacoLang = "html";
    else if (lang === "css") monacoLang = "css";

    monaco.editor.setModelLanguage(editor.getModel(), monacoLang);
  });
});

// Logging system (terminal output)
function britoLog(msg, color = "text-emerald-500") {
  const term = document.getElementById("terminal");
  const div = document.createElement("div");
  div.className = `${color} mb-1 border-l-2 border-current pl-2`;

  let output;

  if (Array.isArray(msg)) {
    output = msg.map(item =>
      typeof item === 'object'
        ? JSON.stringify(item, null, 2)
        : item
    ).join(" ");
  } else {
    output = typeof msg === 'object'
      ? JSON.stringify(msg, null, 2)
      : msg;
  }

  div.textContent = "» " + output;
  term.appendChild(div);
  term.scrollTop = term.scrollHeight;
}

// Execution handler
document.getElementById("run-btn").onclick = async function () {
  const code = editor.getValue();
  const lang = document.getElementById("lang-select").value;
  const term = document.getElementById("terminal");
  const preview = document.getElementById("preview-container");

  // Reset terminal and preview
  term.innerHTML = "";
  preview.classList.add("hidden");

  try {
    if (lang === 'javascript') {
      const oldLog = console.log;

      console.log = (...args) => britoLog(args);

      new Function(code)();

      console.log = oldLog;
    }

    else if (lang === 'python') {
      britoLog("Loading Python engine...", "text-blue-400");
      if (!pyodide) pyodide = await loadPyodide();
      pyodide.setStdout({ batched: (msg) => britoLog(msg) });
      await pyodide.runPythonAsync(code);
    }

    else if (lang === 'typescript') {
      britoLog("Transpiling TypeScript...", "text-blue-400");
      const js = ts.transpile(code);

      const oldLog = console.log;
      console.log = (...args) => britoLog(args);

      new Function(js)();

      console.log = oldLog;
    }

    else if (lang === 'html') {
      preview.classList.remove("hidden");
      const doc = `
        <html>
        <head><style>body { margin: 0; padding: 0; }</style></head>
        <body>${code}</body>
        </html>`;
      document.getElementById("preview-iframe").srcdoc = doc;
      britoLog("HTML preview rendered.", "text-blue-400");
    }

    else if (lang === 'css') {
      preview.classList.remove("hidden");
      const doc = `
        <html>
        <head><style>${code}</style></head>
        <body>
          <div class="p-6">
            <h1>CSS Preview Applied</h1>
            <p>Edit CSS in the editor to see changes.</p>
          </div>
        </body>
        </html>`;
      document.getElementById("preview-iframe").srcdoc = doc;
      britoLog("CSS preview rendered.", "text-blue-400");
    }

    else if (lang === 'tailwind') {
      preview.classList.remove("hidden");
      const doc = `
        <html>
        <head><script src="https://cdn.tailwindcss.com"></script></head>
        <body>${code}</body>
        </html>`;
      document.getElementById("preview-iframe").srcdoc = doc;
      britoLog("Tailwind CSS preview rendered.", "text-blue-400");
    }

  } catch (e) {
    britoLog("ERROR: " + e.message, "text-red-500 font-bold");
  }
};
