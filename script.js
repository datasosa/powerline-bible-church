/**
 * Powerline Bible Church - Main JavaScript
 * Complete functionality for all pages
 */

document.addEventListener('DOMContentLoaded', function() {

  // ======================
  // 1. CONSTANTS & DOM ELEMENTS
  // ======================
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const yearElement = document.getElementById('current-year');
  const header = document.querySelector('.site-header');

  const NEXT_EVENT_DATE = new Date('2025-07-15T09:00:00');

  // ======================
  // 2. MOBILE NAVIGATION
  // ======================
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
      
      const icon = this.querySelector('i');
      if (icon) {
        icon.className = isExpanded ? 'fas fa-bars' : 'fas fa-times';
      }
    });

    document.addEventListener('click', function(e) {
      if (mainNav.classList.contains('active') && 
          !e.target.closest('.main-nav') && 
          !e.target.closest('.mobile-nav-toggle')) {
        mainNav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.querySelector('i').className = 'fas fa-bars';
      }
    });
  }

  // ======================
  // 3. ACTIVE NAV LINK
  // ======================
  function setActiveNavLink() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkPage = link.getAttribute('href');
      
      if ((currentPage === 'index.html' || currentPage === '') && linkPage === 'index.html') {
        link.classList.add('active');
      } 
      else if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  }

  // ======================
  // 4. CURRENT YEAR IN FOOTER
  // ======================
  function updateCopyrightYear() {
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // ======================
  // 5. SMOOTH SCROLLING
  // ======================
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          if (history.pushState) {
            history.pushState(null, null, targetId);
          } else {
            location.hash = targetId;
          }
        }
      });
    });
  }

  // ======================
  // 6. FORM HANDLING
  // ======================
  function handleForms() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        try {
          submitButton.disabled = true;
          submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
          
          const requiredFields = this.querySelectorAll('[required]');
          let isValid = true;
          
          requiredFields.forEach(field => {
            if (!field.value.trim()) {
              field.classList.add('error');
              isValid = false;
            } else {
              field.classList.remove('error');
            }
          });
          
          if (!isValid) {
            showToast('Please fill all required fields', 'error');
            return;
          }
          
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          this.reset();
          showToast('Message sent successfully!', 'success');
          
        } catch (error) {
          showToast('Error sending message. Please try again.', 'error');
          console.error('Form submission error:', error);
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      });
    }
  }

  // ======================
  // 7. TOAST NOTIFICATIONS
  // ======================
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <span>${message}</span>
      <button class="toast-close" aria-label="Close">
        <i class="fas fa-times"></i>
      </button>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      toast.remove();
    });
    
    setTimeout(() => {
      toast.remove();
    }, 5000);
  }

  // ======================
  // 8. EVENT COUNTDOWN
  // ======================
  function initEventCountdown() {
    const countdownElement = document.querySelector('.event-countdown');
    if (!countdownElement) return;
    
    function updateCountdown() {
      const now = new Date().getTime();
      const diff = NEXT_EVENT_DATE.getTime() - now;
      
      if (diff <= 0) {
        countdownElement.innerHTML = '<p>The event has started!</p>';
        clearInterval(countdownInterval);
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      countdownElement.innerHTML = `
        <p>Next Event: <strong>Annual Conference</strong></p>
        <div class="countdown-timer">
          <span>${days}d ${hours}h ${minutes}m ${seconds}s</span> remaining
        </div>
      `;
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
  }

  // ======================
  // 9. TESTIMONIAL CAROUSEL
  // ======================
  function initTestimonials() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;
    
    const testimonials = [
      {
        quote: "This church transformed my life through the powerful teaching of God's Word.",
        author: "Sister Adeola",
        role: "Member since 2015"
      },
      {
        quote: "I found my spiritual family here at Powerline Bible Church.",
        author: "Brother Tunde",
        role: "Youth Leader"
      },
      {
        quote: "The women's fellowship has been a tremendous blessing to me.",
        author: "Sister Blessing",
        role: "Women's Leader"
      }
    ];
    
    carousel.innerHTML = testimonials.map((test, index) => `
      <div class="testimonial ${index === 0 ? 'active' : ''}">
        <blockquote>"${test.quote}"</blockquote>
        <div class="author">— ${test.author}, ${test.role}</div>
      </div>
    `).join('');
    
    let currentIndex = 0;
    const testimonialElements = carousel.querySelectorAll('.testimonial');
    
    setInterval(() => {
      testimonialElements[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % testimonialElements.length;
      testimonialElements[currentIndex].classList.add('active');
    }, 5000);
  }

  // ======================
  // 10. LAZY LOAD IMAGES
  // ======================
  function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('src');
            img.removeAttribute('loading');
            observer.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      lazyImages.forEach(img => img.src = img.getAttribute('src'));
    }
  }

  // ======================
  // 11. SERMON PAGE FUNCTIONALITY
  // ======================
  function initSermonPage() {
    const seriesFilter = document.getElementById('series-filter');
    const speakerFilter = document.getElementById('speaker-filter');
    const dateFilter = document.getElementById('date-filter');
    const sermonCards = document.querySelectorAll('.sermon-card');
    const playButtons = document.querySelectorAll('.play-btn');

    if (!seriesFilter || !speakerFilter || !dateFilter) return;
    
    function filterSermons() {
      const seriesValue = seriesFilter.value;
      const speakerValue = speakerFilter.value;
      const dateValue = dateFilter.value;
      
      sermonCards.forEach(card => {
        const matchesSeries = seriesValue === 'all' || card.dataset.series === seriesValue;
        const matchesSpeaker = speakerValue === 'all' || card.dataset.speaker === speakerValue;
        const matchesDate = dateValue === 'all' || card.dataset.date.includes(dateValue);
        
        if (matchesSeries && matchesSpeaker && matchesDate) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    seriesFilter.addEventListener('change', filterSermons);
    speakerFilter.addEventListener('change', filterSermons);
    dateFilter.addEventListener('change', filterSermons);

    playButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const sermonCard = this.closest('.sermon-card') || this.closest('.featured-sermon');
        const sermonTitle = sermonCard.querySelector('h2, h3').textContent;
        alert(`Now playing: ${sermonTitle}`);
      });
    });
  }

  // ======================
  // INITIALIZE ALL FUNCTIONS
  // ======================
  setActiveNavLink();
  updateCopyrightYear();
  initSmoothScrolling();
  handleForms();
  initEventCountdown();
  initTestimonials();
  lazyLoadImages();
  initSermonPage(); // New function call
});

