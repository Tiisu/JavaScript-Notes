// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navLinks');
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Prevent scrolling when mobile menu is open
            if (navLinks.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.links a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.links a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const dots = document.querySelectorAll('.dot');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentSlide = 0;
    let startX, moveX;
    let isDown = false;

    function showSlide(index) {
        // Hide all slides
        testimonialCards.forEach(card => {
            card.style.display = 'none';
        });

        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show the selected slide and activate the corresponding dot
        if (testimonialCards[index]) {
            testimonialCards[index].style.display = 'block';
            testimonialCards[index].classList.add('animate');
            dots[index].classList.add('active');
        }
    }

    // Initialize the slider
    showSlide(currentSlide);

    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto slide change
    let slideInterval = setInterval(function() {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }, 5000);

    // Add touch swipe functionality for mobile
    if (testimonialSlider) {
        // Touch start
        testimonialSlider.addEventListener('touchstart', function(e) {
            isDown = true;
            startX = e.touches[0].clientX;
            // Pause auto slide on touch
            clearInterval(slideInterval);
        });

        // Touch end
        testimonialSlider.addEventListener('touchend', function() {
            isDown = false;

            // If swipe distance is significant, change slide
            if (Math.abs(moveX - startX) > 50) {
                if (moveX < startX) {
                    // Swipe left - next slide
                    currentSlide = (currentSlide + 1) % testimonialCards.length;
                } else {
                    // Swipe right - previous slide
                    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
                }
                showSlide(currentSlide);
            }

            // Resume auto slide
            slideInterval = setInterval(function() {
                currentSlide = (currentSlide + 1) % testimonialCards.length;
                showSlide(currentSlide);
            }, 5000);
        });

        // Touch move
        testimonialSlider.addEventListener('touchmove', function(e) {
            if (!isDown) return;
            moveX = e.touches[0].clientX;
        });
    }

    // Form Submission
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());

            // Here you would typically send the data to a server
            console.log('Form submitted with values:', formValues);

            // Show success message
            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            this.reset();
        });
    }

    // Add animation on scroll
    const animatedElements = document.querySelectorAll('.section-header, .about-img, .about-text, .service-card, .portfolio-item, .testimonial-card, .contact-card');

    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});