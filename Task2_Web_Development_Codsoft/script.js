// Smooth Scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Shrink navbar on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// Back to top button
const topButton = document.createElement('button');
topButton.innerText = '↑';
topButton.id = 'topBtn';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.padding = '10px 15px';
topButton.style.border = 'none';
topButton.style.borderRadius = '8px';
topButton.style.backgroundColor = '#2e7d32';
topButton.style.color = '#fff';
topButton.style.fontSize = '20px';
topButton.style.cursor = 'pointer';
topButton.style.display = 'none';
topButton.style.zIndex = '1000';
document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
  topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form alert
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting EcoBloom! 🌱');
    form.reset();
  });
}
