// Hero section functionality

// View Work button functionality
const viewWorkBtn = document.getElementById('view-work-btn');
if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', function() {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
            const targetPosition = projectsSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// Download CV button functionality
const downloadCvBtn = document.getElementById('download-cv-btn');
if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', function() {
        // Add your CV download functionality here
        // For now, we'll show an alert
        alert('CV download will be implemented. Please add your CV file to the project.');
        
        // Example of how to implement actual download:
        // const link = document.createElement('a');
        // link.href = '/path-to-your-cv.pdf';
        // link.download = 'Andrei_Doca_CV.pdf';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    });
}

// Button hover effects
const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
heroButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.btn-icon');
        if (icon) {
            icon.style.transform = 'translateX(2px)';
            icon.style.transition = 'transform 0.2s ease';
        }
    });
    
    button.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.btn-icon');
        if (icon) {
            icon.style.transform = 'translateX(0)';
        }
    });
});

// Profile image hover effect
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
        
        // Animate decorative elements
        const decorations = this.querySelectorAll('.decoration');
        decorations.forEach((decoration, index) => {
            setTimeout(() => {
                decoration.style.transform = 'scale(1.2) rotate(10deg)';
                decoration.style.transition = 'transform 0.3s ease';
            }, index * 100);
        });
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        
        // Reset decorative elements
        const decorations = this.querySelectorAll('.decoration');
        decorations.forEach(decoration => {
            decoration.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}



// Intersection Observer for animations
const heroObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const heroObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate hero content
            const heroContent = entry.target.querySelector('.hero-content');
            const heroImage = entry.target.querySelector('.hero-image');
            
            if (heroContent) {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }
            
            if (heroImage) {
                setTimeout(() => {
                    heroImage.style.opacity = '1';
                    heroImage.style.transform = 'translateY(0)';
                }, 200);
            }
            
            // Start counter animation
            setTimeout(animateCounters, 500);
        }
    });
}, heroObserverOptions);

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // Set initial states for animation
        const heroContent = heroSection.querySelector('.hero-content');
        const heroImage = heroSection.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
        
        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'translateY(30px)';
            heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
        
        heroObserver.observe(heroSection);
    }
});

// Availability badge pulse effect
const statusDot = document.querySelector('.status-dot');
if (statusDot) {
    // Add extra pulse effect on hover
    const availabilityBadge = document.querySelector('.availability-badge');
    if (availabilityBadge) {
        availabilityBadge.addEventListener('mouseenter', function() {
            statusDot.style.animation = 'pulse 0.5s infinite';
        });
        
        availabilityBadge.addEventListener('mouseleave', function() {
            statusDot.style.animation = 'pulse 2s infinite';
        });
    }
}