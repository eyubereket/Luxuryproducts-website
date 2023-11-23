// Smooth Scroll Effect for Navigation Links
document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (const link of smoothScrollLinks) {
        link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -80; // Adjust the offset based on your header height
        
        window.scrollTo({
            top: targetElement.offsetTop + yOffset,
            behavior: 'smooth'
        });
    }
});

// Form Submission Handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Replace the alert with your actual form submission logic
        alert('Form submitted! (Replace this alert with your code)');
        
        // Clear the form fields if needed
        contactForm.reset();
    });
});
