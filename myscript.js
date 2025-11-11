// myscript.js - Minimal Version

document.addEventListener('DOMContentLoaded', function() {
    
    // Contact Form
    const contactForm = document.querySelector('form[name="comment_form"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Message sent! Thank you for contacting me.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Skill Bars Animation
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition = 'width 1.5s ease-in-out';
        }, 100);
    });
});