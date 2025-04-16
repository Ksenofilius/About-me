// Theme switching logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

function toggleTheme() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);
