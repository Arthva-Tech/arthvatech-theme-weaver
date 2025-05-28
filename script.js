// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize theme
    initializeTheme();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize form handling
    initializeForms();
});

// Theme Management
function initializeTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;
    
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    
    // Theme switch event listener
    if (themeSwitch) {
        themeSwitch.addEventListener('click', function() {
            const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

function applyTheme(theme) {
    const body = document.body;
    const themeSwitch = document.getElementById('themeSwitch');
    const header = document.querySelector('.header');
    
    if (theme === 'dark') {
        body.classList.add('dark');
        if (themeSwitch) {
            themeSwitch.classList.add('active');
        }
        // Update header background for dark theme
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                header.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        }
    } else {
        body.classList.remove('dark');
        if (themeSwitch) {
            themeSwitch.classList.remove('active');
        }
        // Update header background for light theme
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.8)';
            }
        }
    }
}

// Mobile Menu Management
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuIcon = mobileMenuBtn?.querySelector('i');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileNav.classList.contains('active');
            
            if (isOpen) {
                mobileNav.classList.remove('active');
                mobileMenuIcon.setAttribute('data-lucide', 'menu');
            } else {
                mobileNav.classList.add('active');
                mobileMenuIcon.setAttribute('data-lucide', 'x');
            }
            
            // Recreate icons after changing
            lucide.createIcons();
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }
}

// Animation on Scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll(
        '.section-header, .service-card, .portfolio-card, .team-card, .feature-item, .contact-feature, .about-content, .hero-bottom'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add staggered animation delays
    document.querySelectorAll('.services-grid .service-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.portfolio-grid .portfolio-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.team-grid .team-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Form Handling
function initializeForms() {
    // Contact form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleNewsletterForm(this);
        });
    }
}

function handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Recreate icons
        lucide.createIcons();
    }, 2000);
    
    console.log('Contact form data:', data);
}

function handleNewsletterForm(form) {
    const email = form.querySelector('input[type="email"]').value;
    
    if (!email) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button');
    const originalIcon = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader-2"></i>';
    submitBtn.disabled = true;
    
    // Simulate subscription
    setTimeout(() => {
        // Reset form
        form.querySelector('input[type="email"]').value = '';
        
        // Show success message
        showNotification('Successfully subscribed to our newsletter!', 'success');
        
        // Reset button
        submitBtn.innerHTML = originalIcon;
        submitBtn.disabled = false;
        
        // Recreate icons
        lucide.createIcons();
    }, 1500);
    
    console.log('Newsletter subscription:', email);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i data-lucide="${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i data-lucide="x"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    lucide.createIcons();
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto hide
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success':
            return 'check-circle';
        case 'error':
            return 'alert-circle';
        default:
            return 'info';
    }
}

// Smooth Scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Button hover effects
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        e.target.style.transform = 'translateY(-1px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        e.target.style.transform = 'translateY(0)';
    }
});

// Floating objects animation
function createFloatingAnimation() {
    const floatingObjects = document.querySelectorAll('.floating-object');
    
    floatingObjects.forEach((obj, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        obj.style.animationDelay = `${randomDelay}s`;
        obj.style.animationDuration = `${randomDuration}s`;
    });
}

// Header scroll effect with theme awareness
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const isDarkTheme = document.body.classList.contains('dark');
    
    if (window.scrollY > 100) {
        header.style.background = isDarkTheme 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = isDarkTheme 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)';
    }
});

// Initialize floating animations
createFloatingAnimation();

// Active navigation link highlighting
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on page load
updateActiveNavLink();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler with theme awareness
const debouncedScrollHandler = debounce(function() {
    const header = document.querySelector('.header');
    const isDarkTheme = document.body.classList.contains('dark');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        header.style.background = isDarkTheme 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    } else {
        header.classList.remove('scrolled');
        header.style.background = isDarkTheme 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
