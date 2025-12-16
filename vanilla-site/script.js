/* =====================================================
   AustinstayerFX - JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // MOBILE MENU
    // =====================================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // =====================================================
    // CAROUSEL
    // =====================================================
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.getElementById('carouselDots');
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    
    let currentIndex = 0;
    let slidesPerView = getSlidesPerView();
    let totalPages = Math.ceil(slides.length / slidesPerView);
    let autoRotateInterval;
    
    function getSlidesPerView() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 640) return 2;
        return 1;
    }
    
    function createDots() {
        carouselDots.innerHTML = '';
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            carouselDots.appendChild(dot);
        }
    }
    
    function updateCarousel() {
        const slideWidth = 100 / slidesPerView;
        const offset = currentIndex * slidesPerView * slideWidth;
        carouselTrack.style.transform = `translateX(-${offset}%)`;
        
        // Update dots
        const dots = carouselDots.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex >= totalPages) currentIndex = 0;
        if (currentIndex < 0) currentIndex = totalPages - 1;
        updateCarousel();
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    function startAutoRotate() {
        autoRotateInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }
    
    carouselNext.addEventListener('click', function() {
        stopAutoRotate();
        nextSlide();
        startAutoRotate();
    });
    
    carouselPrev.addEventListener('click', function() {
        stopAutoRotate();
        prevSlide();
        startAutoRotate();
    });
    
    // Handle resize
    window.addEventListener('resize', function() {
        slidesPerView = getSlidesPerView();
        totalPages = Math.ceil(slides.length / slidesPerView);
        if (currentIndex >= totalPages) currentIndex = totalPages - 1;
        createDots();
        updateCarousel();
    });
    
    createDots();
    updateCarousel();
    startAutoRotate();
    
    // =====================================================
    // MODAL - VIEW ALL SETUPS
    // =====================================================
    const viewAllBtn = document.getElementById('viewAllBtn');
    const setupsModal = document.getElementById('setupsModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    
    const setups = [
        { src: 'assets/setups/audjpy-1h.jpg', name: 'AUD/JPY H1 Setup' },
        { src: 'assets/setups/fx-vol-40-m30.jpg', name: 'FX Vol 40 M30 Setup' },
        { src: 'assets/setups/gainx-999-h1.jpg', name: 'Gainx 999 H1 Setup' },
        { src: 'assets/setups/gainx-999-m15.jpg', name: 'Gainx 999 M15 Setup' },
        { src: 'assets/setups/gbpcad-h1.jpg', name: 'GBP/CAD H1 Setup' },
        { src: 'assets/setups/step-index-m30.jpg', name: 'Step Index M30 Setup' },
        { src: 'assets/setups/volatility-100-m15.jpg', name: 'Volatility 100 M15 Setup' },
        { src: 'assets/setups/xauusd-gold-m30.jpg', name: 'XAU/USD Gold M30 Setup' }
    ];
    
    function populateModal() {
        modalBody.innerHTML = setups.map(setup => `
            <div class="modal-setup">
                <img src="${setup.src}" alt="${setup.name}">
                <p class="slide-label">${setup.name}</p>
            </div>
        `).join('');
    }
    
    viewAllBtn.addEventListener('click', function() {
        populateModal();
        setupsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    modalClose.addEventListener('click', function() {
        setupsModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    setupsModal.addEventListener('click', function(e) {
        if (e.target === setupsModal) {
            setupsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // =====================================================
    // ACCORDION / FAQ
    // =====================================================
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // =====================================================
    // ANIMATED COUNTERS
    // =====================================================
    const statValues = document.querySelectorAll('.stat-value[data-target]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.dataset.target);
                animateCounter(element, target);
                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => counterObserver.observe(stat));
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                element.textContent = Math.floor(current).toLocaleString();
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
    
    // =====================================================
    // CONTACT FORM
    // =====================================================
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const whatsappMessage = encodeURIComponent(
            `Hi Austin, my name is ${name}.\n\nEmail: ${email}\n\nMessage: ${message}`
        );
        
        window.open(`https://wa.me/263781498828?text=${whatsappMessage}`, '_blank');
        
        // Show success message
        showToast('Opening WhatsApp...');
        
        // Reset form
        contactForm.reset();
    });
    
    // =====================================================
    // TOAST NOTIFICATION
    // =====================================================
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 24px;
            background: hsl(217, 91%, 60%);
            color: hsl(222, 47%, 8%);
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    // =====================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // =====================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // =====================================================
    // HEADER SCROLL EFFECT
    // =====================================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'hsla(222, 47%, 8%, 0.95)';
        } else {
            header.style.background = 'hsla(222, 47%, 8%, 0.9)';
        }
        
        lastScroll = currentScroll;
    });
    
});