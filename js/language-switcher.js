/* Language Switcher JavaScript for World Wars Digital Museum Website */

document.addEventListener('DOMContentLoaded', function() {
    // Language Switcher
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        // Check for saved language preference
        const currentLanguage = localStorage.getItem('language') || 'ar';
        languageSelect.value = currentLanguage;
        
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            localStorage.setItem('language', selectedLanguage);
            
            // In a real implementation, this would redirect to language-specific pages
            // or dynamically load translated content
            
            // For demo purposes, we'll just show an alert
            if (selectedLanguage === 'ar') {
                alert('تم اختيار اللغة العربية');
            } else if (selectedLanguage === 'en') {
                alert('English language selected');
            } else if (selectedLanguage === 'fr') {
                alert('Langue française sélectionnée');
            }
            
            // In a real implementation, we would reload the page with the new language
            // window.location.reload();
        });
    }
});
