// Scroll-to-top button functionality
window.addEventListener('scroll', () => {
    const scrollTopButton = document.querySelector('.top');
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'flex'; // Changed to 'flex' to center icon
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.querySelector('.top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ScrollReveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100
});

// Reveal elements from the top
ScrollReveal().reveal('header, .home-text, .about, .experience-content, .skills-content, .portfolio-content, .contact-text, .certifications h2', {
    origin: 'top'
});

// Certifications slider functionality
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

nextBtn.addEventListener('click', () => {
    // Calculate the scroll amount based on the first image's actual width + its margin
    // This makes the slider movement more dynamic and less dependent on fixed pixel values
    const firstImage = slider.querySelector('img');
    if (firstImage) {
        const imageWidth = firstImage.offsetWidth;
        // Get computed styles for margin to ensure accurate calculation
        const imageMarginRight = parseFloat(window.getComputedStyle(firstImage).marginRight);
        const imageMarginLeft = parseFloat(window.getComputedStyle(firstImage).marginLeft);
        const scrollAmount = imageWidth + imageMarginLeft + imageMarginRight; // Total space taken by one image + its margins
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
});

prevBtn.addEventListener('click', () => {
    const firstImage = slider.querySelector('img');
    if (firstImage) {
        const imageWidth = firstImage.offsetWidth;
        const imageMarginRight = parseFloat(window.getComputedStyle(firstImage).marginRight);
        const imageMarginLeft = parseFloat(window.getComputedStyle(firstImage).marginLeft);
        const scrollAmount = imageWidth + imageMarginLeft + imageMarginRight;
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
});