        // Initialize AOS animation
        AOS.init({
            duration: 1000,
            once: true
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hero section animation
        gsap.from(".hero-title", {
            duration: 1.5,
            y: -50,
            opacity: 0,
            ease: "power3.out"
        });
        
        gsap.from(".hero-subtitle", {
            duration: 1.5,
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: "power3.out"
        });
        
        gsap.from(".btn-beauty", {
            duration: 1.5,
            y: 50,
            opacity: 0,
            delay: 1,
            ease: "power3.out"
        });
        
        // Floating animation for elements
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach(el => {
            gsap.to(el, {
                y: 15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
        
        // Pulse animation for buttons
        const pulseButtons = document.querySelectorAll('.pulse');
        pulseButtons.forEach(btn => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });
        
        // Service card hover effect
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
        
        
        // Gallery Carousel Functionality
        const galleryTrack = document.getElementById('galleryTrack');
        const gallerySlides = document.querySelectorAll('.gallery-slide');
        const galleryDots = document.getElementById('galleryDots');
        const prevBtn = document.querySelector('.gallery-prev');
        const nextBtn = document.querySelector('.gallery-next');
        
        let currentIndex = 0;
        const slideWidth = gallerySlides[0].offsetWidth + 30; // Including margin
        
        // Create dots
        gallerySlides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('gallery-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            galleryDots.appendChild(dot);
        });
        
        // Update dots
        function updateDots() {
            const dots = document.querySelectorAll('.gallery-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            gsap.to(galleryTrack, {
                x: -currentIndex * slideWidth,
                duration: 0.5,
                ease: "power2.out"
            });
            updateDots();
        }
        
        // Next slide
        function nextSlide() {
            if (currentIndex < gallerySlides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            goToSlide(currentIndex);
        }
        
        // Previous slide
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = gallerySlides.length - 1;
            }
            goToSlide(currentIndex);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Auto-rotate slides
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause on hover
        const galleryCarousel = document.querySelector('.gallery-carousel');
        galleryCarousel.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        galleryCarousel.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });