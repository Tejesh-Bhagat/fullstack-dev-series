document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for user's preferred theme in local storage or system preference
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    htmlElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        let newTheme;
        if (htmlElement.getAttribute('data-theme') === 'light') {
            newTheme = 'dark';
        } else {
            newTheme = 'light';
        }
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});