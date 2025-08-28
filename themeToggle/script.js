// Utility: apply theme to <body>
function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // save preference
}

// STEP 1: Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// STEP 2: Load theme (from localStorage OR system default)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDark.matches ? 'dark' : 'light');
}

// STEP 3: Update live if system theme changes
prefersDark.addEventListener('change', (event) => {
  // Only update if user has NOT manually chosen a theme
  if (!localStorage.getItem('theme')) {
    setTheme(event.matches ? 'dark' : 'light');
  }
});

// STEP 4: Toggle theme on button click
document.getElementById('theme-toggle').addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});
