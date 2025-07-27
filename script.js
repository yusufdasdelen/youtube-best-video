// Portfolio interactions
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const profileImg = document.querySelector('.profile-img');
    const tags = document.querySelectorAll('.tag');

    // Navigation interaction
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Add slide animation to main content
            const mainContent = document.querySelector('.main-content');
            mainContent.style.animation = 'none';
            mainContent.offsetHeight; // Trigger reflow
            mainContent.style.animation = 'slideIn 0.5s ease-out';
        });
    });

    // Profile image hover effect
    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.transform = 'scale(1.1)';
        profileImg.style.transition = 'transform 0.3s ease';
    });

    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.transform = 'scale(1)';
    });

    // Tag hover animations
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-2px)';
            tag.style.backgroundColor = '#4a90e2';
            tag.style.color = 'white';
            tag.style.transition = 'all 0.3s ease';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0)';
            tag.style.backgroundColor = '';
            tag.style.color = '';
        });
    });

    // Scroll animations
    function revealOnScroll() {
        const elements = document.querySelectorAll('.work-details, .featured-work');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    }

    // Add reveal class styles
    const style = document.createElement('style');
    style.textContent = `
        .work-details, .featured-work {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}); 