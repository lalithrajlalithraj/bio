// 1. Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth' // Smooth scroll behavior
      });
  });
});

// 2. Form Validation and Submit Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
      document.getElementById('form-feedback').textContent = 'Please fill out all fields.';
      return;
  }

  document.getElementById('form-feedback').textContent = 'Message Sent! Thank you for reaching out.';
  this.reset();
});

// 3. Scroll Animations
const sections = document.querySelectorAll('.hero, .about, .projects, .contact');

function animateSectionsOnScroll() {
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
      } else {
          section.classList.remove('visible');
      }
  });
}

window.addEventListener('scroll', animateSectionsOnScroll);
animateSectionsOnScroll();
