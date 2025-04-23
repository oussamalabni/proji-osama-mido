// Comparison Functionality for World Wars Digital Museum Website

document.addEventListener('DOMContentLoaded', function() {
  // Import comparison data
  const { comparisonData } = window;
  
  // Initialize comparison
  initializeComparison();
  
  function initializeComparison() {
    const comparisonContainer = document.querySelector('.comparison-container');
    if (!comparisonContainer) return;
    
    // Set up comparison tabs
    setupComparisonTabs();
    
    // Set up side-by-side sliders
    setupSideBySideSliders();
    
    // Initialize charts
    initializeCharts();
    
    // Set up interactive maps
    setupInteractiveMaps();
  }
  
  function setupComparisonTabs() {
    const tabButtons = document.querySelectorAll('.comparison-tab-btn');
    const tabContents = document.querySelectorAll('.comparison-tab-content');
    
    if (!tabButtons.length || !tabContents.length) return;
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding content
        const tabId = this.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
          tabContent.classList.add('active');
        }
      });
    });
    
    // Activate first tab by default
    if (tabButtons.length > 0) {
      tabButtons[0].click();
    }
  }
  
  function setupSideBySideSliders() {
    const slider = document.querySelector('.comparison-slider');
    const beforeImage = document.querySelector('.comparison-before');
    const afterImage = document.querySelector('.comparison-after');
    const sliderHandle = document.querySelector('.slider-handle');
    
    if (!slider || !beforeImage || !afterImage || !sliderHandle) return;
    
    let isDragging = false;
    
    // Set initial position
    updateSliderPosition(50);
    
    // Mouse events
    sliderHandle.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
    
    // Touch events for mobile
    sliderHandle.addEventListener('touchstart', startDragging);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', stopDragging);
    
    // Click on slider to move handle
    slider.addEventListener('click', function(e) {
      if (e.target !== sliderHandle) {
        const sliderRect = slider.getBoundingClientRect();
        const position = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
        updateSliderPosition(position);
      }
    });
    
    function startDragging(e) {
      e.preventDefault();
      isDragging = true;
    }
    
    function drag(e) {
      if (!isDragging) return;
      
      let clientX;
      if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      
      const sliderRect = slider.getBoundingClientRect();
      let position = ((clientX - sliderRect.left) / sliderRect.width) * 100;
      
      // Constrain position between 0 and 100
      position = Math.max(0, Math.min(position, 100));
      
      updateSliderPosition(position);
    }
    
    function stopDragging() {
      isDragging = false;
    }
    
    function updateSliderPosition(position) {
      sliderHandle.style.left = `${position}%`;
      beforeImage.style.width = `${position}%`;
    }
  }
  
  function initializeCharts() {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js is not loaded. Charts will not be displayed.');
      return;
    }
    
    // Create casualties chart
    createCasualtiesChart();
    
    // Create countries chart
    createCountriesChart();
    
    // Create technology chart
    createTechnologyChart();
  }
  
  function createCasualtiesChart() {
    const casualtiesCanvas = document.getElementById('casualties-chart');
    if (!casualtiesCanvas) return;
    
    const ctx = casualtiesCanvas.getContext('2d');
    
    // Get casualties data
    const { casualties } = comparisonData;
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['القتلى العسكريين', 'القتلى المدنيين', 'إجمالي القتلى', 'الجرحى', 'المفقودين'],
        datasets: [
          {
            label: 'الحرب العالمية الأولى',
            data: [
              casualties.ww1.military,
              casualties.ww1.civilian,
              casualties.ww1.total,
              casualties.ww1.wounded,
              casualties.ww1.missing
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'الحرب العالمية الثانية',
            data: [
              casualties.ww2.military,
              casualties.ww2.civilian,
              casualties.ww2.total,
              casualties.ww2.wounded,
              casualties.ww2.missing
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'بالملايين'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'مقارنة الخسائر البشرية بين الحربين العالميتين',
            font: {
              size: 16
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.raw} مليون`;
              }
            }
          }
        }
      }
    });
  }
  
  function createCountriesChart() {
    const countriesCanvas = document.getElementById('countries-chart');
    if (!countriesCanvas) return;
    
    const ctx = countriesCanvas.getContext('2d');
    
    // Get countries data
    const { countries } = comparisonData;
    
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['دول الحلفاء', 'دول المحور/المركز'],
        datasets: [
          {
            data: [countries.ww1.allies, countries.ww1.central],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'الدول المشاركة في الحرب العالمية الأولى',
            font: {
              size: 16
            }
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    });
    
    // Create WW2 countries chart
    const countriesCanvas2 = document.getElementById('countries-chart-2');
    if (!countriesCanvas2) return;
    
    const ctx2 = countriesCanvas2.getContext('2d');
    
    new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['دول الحلفاء', 'دول المحور'],
        datasets: [
          {
            data: [countries.ww2.allies, countries.ww2.axis],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'الدول المشاركة في الحرب العالمية الثانية',
            font: {
              size: 16
            }
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
  
  function createTechnologyChart() {
    // Create technology comparison table instead of chart
    const techComparisonContainer = document.getElementById('technology-comparison');
    if (!techComparisonContainer) return;
    
    const { technology } = comparisonData;
    
    let tableHTML = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th>الحرب العالمية الأولى</th>
            <th>الحرب العالمية الثانية</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    // Get max length of both arrays
    const maxLength = Math.max(technology.ww1.length, technology.ww2.length);
    
    // Create rows
    for (let i = 0; i < maxLength; i++) {
      tableHTML += '<tr>';
      tableHTML += `<td>${i < technology.ww1.length ? technology.ww1[i] : ''}</td>`;
      tableHTML += `<td>${i < technology.ww2.length ? technology.ww2[i] : ''}</td>`;
      tableHTML += '</tr>';
    }
    
    tableHTML += `
        </tbody>
      </table>
    `;
    
    techComparisonContainer.innerHTML = tableHTML;
  }
  
  function setupInteractiveMaps() {
    // This would typically use a mapping library like Leaflet.js
    // For now, we'll create a simple placeholder
    const mapContainers = document.querySelectorAll('.map-container');
    
    mapContainers.forEach(container => {
      const warType = container.getAttribute('data-war');
      const mapTitle = warType === 'ww1' ? 
        'خريطة الشرق الأوسط خلال الحرب العالمية الأولى' : 
        'خريطة الشرق الأوسط خلال الحرب العالمية الثانية';
      
      container.innerHTML = `
        <div class="map-placeholder">
          <h3>${mapTitle}</h3>
          <p>هنا ستظهر خريطة تفاعلية للشرق الأوسط خلال ${warType === 'ww1' ? 'الحرب العالمية الأولى' : 'الحرب العالمية الثانية'}</p>
          <div class="map-image">
            <img src="../images/${warType}/${warType}_map.jpg" alt="${mapTitle}" onerror="this.src='../images/common/map_placeholder.jpg'">
          </div>
        </div>
      `;
    });
  }
});
