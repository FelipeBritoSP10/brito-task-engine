const btnGenerate = document.getElementById('generate-btn');
const emptyState = document.getElementById('empty-state');
const resultState = document.getElementById('result-state');

const taskTitle = document.getElementById('task-title');
const taskText = document.getElementById('task-text');
const badgeLevel = document.getElementById('badge-level');
const copyBtn = document.getElementById('copy-btn');

function britoEngine() {
    const tech = document.getElementById('tech-select').value;
    const level = document.getElementById('level-select').value;

    const list = britoTasks[tech] || [];
    const filtered = list.filter(item => item.level === level);

    if (filtered.length > 0) {
        const random = filtered[Math.floor(Math.random() * filtered.length)];

        taskTitle.innerText = random.title || "Task Técnica";
        taskText.innerText = `// Task:\n"${random.task}"`;
        badgeLevel.innerText = random.level;

        applyStyles(random.level);

        emptyState.classList.add('hidden');
        resultState.classList.remove('hidden');
    } else {
        alert("Ops! Desafio não encontrado para essa combinação.");
    }
}

function applyStyles(level) {
    badgeLevel.className = "px-4 py-1 text-[10px] font-black rounded-full border uppercase tracking-widest";

    const colors = {
        "Iniciante": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        "Média": "bg-amber-500/10 text-amber-400 border-amber-500/20",
        "Avançada": "bg-rose-500/10 text-rose-400 border-rose-500/20"
    };

    const selectedStyle = colors[level] || colors["Iniciante"];
    badgeLevel.classList.add(...selectedStyle.split(' '));
}

function copyToClipboard() {
    const text = taskText.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Enunciado copiado!");
    });
}

btnGenerate.addEventListener('click', britoEngine);
copyBtn.addEventListener('click', copyToClipboard);