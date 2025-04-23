/* Mobile Menu JavaScript for World Wars Digital Museum Website */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Toggle aria-expanded attribute for accessibility
      const expanded = navLinks.classList.contains('active');
      mobileMenuToggle.setAttribute('aria-expanded', expanded);
    });
  }
  
  // Add skip link for accessibility
  const body = document.body;
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
  body.insertBefore(skipLink, body.firstChild);
  
  // Add main content ID if it doesn't exist
  const mainContent = document.querySelector('main') || document.querySelector('.main-content');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
  }
  
  // Text resize functionality
  const textSizeControls = document.querySelector('.text-size-controls');
  if (textSizeControls) {
    const smallBtn = textSizeControls.querySelector('.text-size-small-btn');
    const mediumBtn = textSizeControls.querySelector('.text-size-medium-btn');
    const largeBtn = textSizeControls.querySelector('.text-size-large-btn');
    
    if (smallBtn) {
      smallBtn.addEventListener('click', function() {
        document.body.classList.remove('text-size-medium', 'text-size-large');
        document.body.classList.add('text-size-small');
        localStorage.setItem('textSize', 'small');
      });
    }
    
    if (mediumBtn) {
      mediumBtn.addEventListener('click', function() {
        document.body.classList.remove('text-size-small', 'text-size-large');
        document.body.classList.add('text-size-medium');
        localStorage.setItem('textSize', 'medium');
      });
    }
    
    if (largeBtn) {
      largeBtn.addEventListener('click', function() {
        document.body.classList.remove('text-size-small', 'text-size-medium');
        document.body.classList.add('text-size-large');
        localStorage.setItem('textSize', 'large');
      });
    }
    
    // Apply saved text size preference
    const savedTextSize = localStorage.getItem('textSize');
    if (savedTextSize) {
      document.body.classList.add(`text-size-${savedTextSize}`);
    } else {
      document.body.classList.add('text-size-medium');
    }
  } else {
    // Create text size controls if they don't exist
    const header = document.querySelector('header');
    if (header) {
      const controlsDiv = document.createElement('div');
      controlsDiv.className = 'text-size-controls';
      controlsDiv.innerHTML = `
        <span>حجم النص:</span>
        <button class="text-size-small-btn" aria-label="نص صغير">أ-</button>
        <button class="text-size-medium-btn" aria-label="نص متوسط">أ</button>
        <button class="text-size-large-btn" aria-label="نص كبير">أ+</button>
      `;
      header.appendChild(controlsDiv);
      
      // Re-run this function to attach event listeners
      setTimeout(() => {
        document.dispatchEvent(new Event('DOMContentLoaded'));
      }, 0);
    }
  }
  
  // High contrast mode toggle
  const contrastToggle = document.querySelector('.contrast-toggle');
  if (contrastToggle) {
    contrastToggle.addEventListener('click', function() {
      document.body.classList.toggle('high-contrast');
      const isHighContrast = document.body.classList.contains('high-contrast');
      localStorage.setItem('highContrast', isHighContrast);
    });
    
    // Apply saved contrast preference
    const savedContrast = localStorage.getItem('highContrast');
    if (savedContrast === 'true') {
      document.body.classList.add('high-contrast');
    }
  } else {
    // Create contrast toggle if it doesn't exist
    const header = document.querySelector('header');
    if (header) {
      const contrastBtn = document.createElement('button');
      contrastBtn.className = 'contrast-toggle';
      contrastBtn.setAttribute('aria-label', 'تبديل وضع التباين العالي');
      contrastBtn.textContent = 'تباين عالي';
      header.appendChild(contrastBtn);
      
      // Re-run this function to attach event listeners
      setTimeout(() => {
        document.dispatchEvent(new Event('DOMContentLoaded'));
      }, 0);
    }
  }
  
  // Add keyboard navigation class to body when using keyboard
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  // Remove keyboard navigation class when using mouse
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });
  
  // Add dir="rtl" to body for Arabic
  const html = document.documentElement;
  if (html.lang === 'ar' && !html.getAttribute('dir')) {
    html.setAttribute('dir', 'rtl');
  }
});
