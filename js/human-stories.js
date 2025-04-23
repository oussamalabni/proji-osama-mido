/* Human Stories JavaScript for World Wars Digital Museum Website */

document.addEventListener('DOMContentLoaded', function() {
    // Human Stories page functionality
    const storiesPage = document.querySelector('.stories-grid');
    
    if (storiesPage) {
        // Filter buttons functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const storyCards = document.querySelectorAll('.story-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide stories based on filter
                storyCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'flex';
                    } else {
                        const categories = card.getAttribute('data-categories').split(' ');
                        if (categories.includes(filter)) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
                
                // Check if any cards are visible
                const visibleCards = document.querySelectorAll('.story-card[style="display: flex;"]');
                const noResultsMessage = document.querySelector('.no-results-message');
                
                if (visibleCards.length === 0) {
                    // No cards visible, show message
                    if (!noResultsMessage) {
                        const message = document.createElement('div');
                        message.className = 'no-results-message';
                        message.textContent = 'لا توجد قصص متاحة للفئة المحددة.';
                        storiesPage.querySelector('.stories').appendChild(message);
                    }
                } else {
                    // Cards are visible, remove message if it exists
                    if (noResultsMessage) {
                        noResultsMessage.remove();
                    }
                }
            });
        });
        
        // Load more functionality
        const loadMoreBtn = document.getElementById('load-more-btn');
        
        if (loadMoreBtn) {
            // In a real implementation, this would load more stories from a server
            // For demo purposes, we'll just show a message
            
            loadMoreBtn.addEventListener('click', function() {
                // Create placeholder for new stories
                const storiesContainer = document.querySelector('.stories');
                
                // Add 3 more story cards
                for (let i = 0; i < 3; i++) {
                    const newCard = document.createElement('div');
                    newCard.className = 'story-card';
                    newCard.setAttribute('data-categories', 'ww2 civilians');
                    
                    newCard.innerHTML = `
                        <div class="story-image">
                            <img src="#" alt="صورة قصة إضافية">
                        </div>
                        <div class="story-content">
                            <h3>قصة إضافية ${i + 1}</h3>
                            <p class="story-meta">قصة تم تحميلها إضافياً</p>
                            <p class="story-excerpt">هذه قصة إضافية تم تحميلها عند النقر على زر "تحميل المزيد". في التطبيق النهائي، سيتم تحميل قصص حقيقية من قاعدة البيانات.</p>
                            <div class="story-media">
                                <span class="media-icon"><i class="fas fa-file-alt"></i> نص</span>
                                <span class="media-icon"><i class="fas fa-image"></i> صور</span>
                            </div>
                            <a href="#" class="btn btn-outline">قراءة القصة</a>
                        </div>
                    `;
                    
                    storiesContainer.appendChild(newCard);
                }
                
                // Apply current filter to new cards
                const activeFilter = document.querySelector('.filter-btn.active');
                if (activeFilter) {
                    const filter = activeFilter.getAttribute('data-filter');
                    const newCards = document.querySelectorAll('.story-card:nth-last-child(-n+3)');
                    
                    newCards.forEach(card => {
                        if (filter !== 'all') {
                            const categories = card.getAttribute('data-categories').split(' ');
                            if (!categories.includes(filter)) {
                                card.style.display = 'none';
                            }
                        }
                    });
                }
                
                // Disable button after a few loads to simulate end of content
                this.dataset.loadCount = (parseInt(this.dataset.loadCount) || 0) + 1;
                
                if (parseInt(this.dataset.loadCount) >= 2) {
                    this.disabled = true;
                    this.textContent = 'لا توجد المزيد من القصص';
                }
            });
        }
        
        // Audio player enhancements
        const audioPlayers = document.querySelectorAll('audio');
        
        audioPlayers.forEach(player => {
            // Add event listeners for play/pause to update UI
            player.addEventListener('play', function() {
                // In a real implementation, we might update UI elements when audio plays
                console.log('Audio playing');
            });
            
            player.addEventListener('pause', function() {
                // In a real implementation, we might update UI elements when audio pauses
                console.log('Audio paused');
            });
            
            player.addEventListener('ended', function() {
                // In a real implementation, we might update UI elements when audio ends
                console.log('Audio ended');
            });
        });
        
        // Form validation for contribute section
        const contributeForm = document.querySelector('.contribute-form form');
        
        if (contributeForm) {
            contributeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                let isValid = true;
                const requiredFields = this.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                    } else {
                        field.classList.remove('error');
                    }
                });
                
                if (isValid) {
                    // In a real implementation, this would submit the form data to a server
                    
                    // For demo purposes, we'll just show a success message
                    alert('تم استلام قصتك بنجاح! سيتم مراجعتها وإضافتها إلى الموقع قريباً.');
                    
                    // Reset form
                    this.reset();
                } else {
                    alert('يرجى ملء جميع الحقول المطلوبة.');
                }
            });
            
            // Clear error class on input
            contributeForm.querySelectorAll('input, textarea, select').forEach(field => {
                field.addEventListener('input', function() {
                    this.classList.remove('error');
                });
            });
        }
    }
});
