/* Dark Mode Toggle JavaScript for World Wars Digital Museum Website */

document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Check for saved theme preference or respect OS preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            // Update icon
            const moonIcon = themeToggle.querySelector('.fa-moon');
            if (moonIcon) {
                moonIcon.classList.remove('fa-moon');
                moonIcon.classList.add('fa-sun');
            }
        }
        
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle theme
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                // Update icon
                const sunIcon = themeToggle.querySelector('.fa-sun');
                if (sunIcon) {
                    sunIcon.classList.remove('fa-sun');
                    sunIcon.classList.add('fa-moon');
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                // Update icon
                const moonIcon = themeToggle.querySelector('.fa-moon');
                if (moonIcon) {
                    moonIcon.classList.remove('fa-moon');
                    moonIcon.classList.add('fa-sun');
                }
            }
        });
    }
});
