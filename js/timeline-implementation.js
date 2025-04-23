// Timeline Functionality for World Wars Digital Museum Website

document.addEventListener('DOMContentLoaded', function() {
  // Import timeline data
  const { timelineData, comparisonData } = window;
  
  // Initialize timeline
  initializeTimeline();
  
  function initializeTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) return;
    
    // Create timeline elements for WW1
    createTimelineEvents('ww1');
    
    // Set up filter buttons
    setupFilterButtons();
    
    // Set up timeline navigation
    setupTimelineNavigation();
    
    // Set up zoom functionality
    setupZoomFunctionality();
    
    // Set up event details modal
    setupEventDetailsModal();
  }
  
  function createTimelineEvents(warType) {
    const timelineContainer = document.querySelector('.timeline-events');
    if (!timelineContainer) return;
    
    // Clear existing events
    timelineContainer.innerHTML = '';
    
    // Get events for the selected war
    const events = timelineData[warType];
    
    // Sort events by date
    events.sort((a, b) => {
      const dateA = new Date(a.year, a.month - 1, a.day);
      const dateB = new Date(b.year, b.month - 1, b.day);
      return dateA - dateB;
    });
    
    // Create timeline events
    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.className = 'timeline-event';
      eventElement.setAttribute('data-category', event.category);
      
      // Format date in Arabic
      const date = new Date(event.year, event.month - 1, event.day);
      const formattedDate = date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Create event content
      eventElement.innerHTML = `
        <div class="event-date">${formattedDate}</div>
        <div class="event-content">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          ${event.image ? `<div class="event-image"><img src="${event.image}" alt="${event.title}"></div>` : ''}
          <button class="btn event-details-btn">عرض التفاصيل</button>
        </div>
      `;
      
      timelineContainer.appendChild(eventElement);
    });
  }
  
  function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const timelineEvents = document.querySelectorAll('.timeline-event');
        
        // Filter events
        timelineEvents.forEach(event => {
          if (filter === 'all') {
            event.style.display = 'block';
          } else {
            const categories = event.getAttribute('data-category').split(' ');
            if (categories.includes(filter)) {
              event.style.display = 'block';
            } else {
              event.style.display = 'none';
            }
          }
        });
      });
    });
    
    // Activate "all" filter by default
    const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilterBtn) {
      allFilterBtn.click();
    }
  }
  
  function setupTimelineNavigation() {
    const prevYearBtn = document.getElementById('prev-year');
    const nextYearBtn = document.getElementById('next-year');
    const yearDisplay = document.querySelector('.year-display');
    
    if (!prevYearBtn || !nextYearBtn || !yearDisplay) return;
    
    // Define time periods
    const timePeriods = [
      { label: '1914 - 1918', filter: 'ww1' },
      { label: '1919 - 1938', filter: 'interwar' },
      { label: '1939 - 1945', filter: 'ww2' }
    ];
    
    let currentPeriodIndex = 0;
    
    // Update display and filter events based on current period
    const updateTimePeriod = () => {
      const currentPeriod = timePeriods[currentPeriodIndex];
      yearDisplay.textContent = currentPeriod.label;
      
      // Switch between WW1 and WW2 data
      if (currentPeriod.filter === 'ww1') {
        createTimelineEvents('ww1');
      } else if (currentPeriod.filter === 'ww2') {
        createTimelineEvents('ww2');
      }
      
      // Update active filter button
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === 'all') {
          btn.click();
        }
      });
    };
    
    // Initialize with first period
    updateTimePeriod();
    
    // Set up navigation buttons
    prevYearBtn.addEventListener('click', function() {
      if (currentPeriodIndex > 0) {
        currentPeriodIndex--;
        updateTimePeriod();
      }
    });
    
    nextYearBtn.addEventListener('click', function() {
      if (currentPeriodIndex < timePeriods.length - 1) {
        currentPeriodIndex++;
        updateTimePeriod();
      }
    });
  }
  
  function setupZoomFunctionality() {
    const zoomSlider = document.getElementById('zoom-level');
    if (!zoomSlider) return;
    
    zoomSlider.addEventListener('input', function() {
      const zoomLevel = this.value;
      const timelineEvents = document.querySelectorAll('.timeline-event');
      
      // Adjust detail level based on zoom
      timelineEvents.forEach(event => {
        const scale = 0.8 + (zoomLevel * 0.05);
        event.style.transform = `scale(${scale})`;
      });
    });
  }
  
  function setupEventDetailsModal() {
    // Set up event delegation for event detail buttons
    document.addEventListener('click', function(e) {
      if (e.target && e.target.classList.contains('event-details-btn')) {
        const eventCard = e.target.closest('.timeline-event');
        const modal = document.querySelector('.event-details-modal');
        const modalContent = modal ? modal.querySelector('.modal-body') : null;
        
        if (eventCard && modal && modalContent) {
          const eventTitle = eventCard.querySelector('h3').textContent;
          const eventDate = eventCard.querySelector('.event-date').textContent;
          const eventDesc = eventCard.querySelector('p').textContent;
          const eventImage = eventCard.querySelector('.event-image img');
          
          // Build modal content
          let modalHTML = `
            <h2>${eventTitle}</h2>
            <p class="event-date">${eventDate}</p>
            <div class="event-description">
              <p>${eventDesc}</p>
              <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.</p>
            </div>
          `;
          
          if (eventImage) {
            modalHTML += `
              <div class="event-media">
                <img src="${eventImage.src}" alt="${eventImage.alt}" class="event-image-large">
              </div>
            `;
          }
          
          // Add additional content for demo
          modalHTML += `
            <div class="additional-resources">
              <h3>مصادر إضافية</h3>
              <ul>
                <li><a href="#">وثائق تاريخية</a></li>
                <li><a href="#">مقاطع فيديو</a></li>
                <li><a href="#">شهادات شهود عيان</a></li>
              </ul>
            </div>
          `;
          
          // Set modal content
          modalContent.innerHTML = modalHTML;
          
          // Show modal
          modal.style.display = 'block';
          
          // Prevent body scrolling when modal is open
          document.body.style.overflow = 'hidden';
        }
      }
    });
    
    // Close modal when clicking the close button
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        const modal = document.querySelector('.event-details-modal');
        if (modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
    
    // Close modal when clicking outside the content
    const modal = document.querySelector('.event-details-modal');
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  }
});
