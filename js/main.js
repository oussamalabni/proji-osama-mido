/* Main JavaScript for World Wars Digital Museum Website */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
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
    
    // Language Switcher
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            
            // In a real implementation, this would redirect to language-specific pages
            // or dynamically load translated content
            
            // For demo purposes, we'll just show an alert
            alert('تم اختيار اللغة: ' + selectedLanguage + '\nسيتم تنفيذ تغيير اللغة في الإصدار النهائي.');
            
            // Reset to Arabic for demo
            this.value = 'ar';
        });
    }
    
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would send the form data to a server
            
            // For demo purposes, we'll just show an alert
            alert('تم استلام النموذج بنجاح!\nسيتم معالجة البيانات في الإصدار النهائي.');
            
            // Reset form
            form.reset();
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or a non-scroll link like the theme toggle
            if (href === '#' || this.id === 'theme-toggle') {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation classes when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .impact-item, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});
