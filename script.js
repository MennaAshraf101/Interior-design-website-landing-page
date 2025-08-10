// Customer Testimonials Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonials-carousel');
    const leftArrow = document.querySelector('.nav-arrow.left');
    const rightArrow = document.querySelector('.nav-arrow.right');
    
    if (carousel && leftArrow && rightArrow) {
        // Calculate scroll amount (card width + gap)
        const scrollAmount = 420; // 400px card width + 20px gap
        
        // Left arrow click - scroll left
        leftArrow.addEventListener('click', function() {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Right arrow click - scroll right
        rightArrow.addEventListener('click', function() {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                leftArrow.click();
            } else if (e.key === 'ArrowRight') {
                rightArrow.click();
            }
        });
        
        // Add touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - go to next
                    rightArrow.click();
                } else {
                    // Swipe right - go to previous
                    leftArrow.click();
                }
            }
        }
        
        // Update arrow states based on scroll position
        function updateArrowStates() {
            const isAtStart = carousel.scrollLeft === 0;
            const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth;
            
            leftArrow.style.opacity = isAtStart ? '0.5' : '1';
            leftArrow.style.cursor = isAtStart ? 'not-allowed' : 'pointer';
            
            rightArrow.style.opacity = isAtEnd ? '0.5' : '1';
            rightArrow.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
        }
        
        // Listen for scroll events to update arrow states
        carousel.addEventListener('scroll', updateArrowStates);
        
        // Initial arrow state update
        updateArrowStates();
    }
});

// Smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
