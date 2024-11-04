const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialContainer.addEventListener('scroll', () => {
  const scrollPosition = testimonialContainer.scrollTop + testimonialContainer.offsetHeight;
  const containerHeight = testimonialContainer.offsetHeight;
  const cardHeight = testimonialCards[0].offsetHeight;

  if (scrollPosition >= containerHeight) {
    // append new testimonial cards
    for (let i = 0; i < 5; i++) { // adjust the number of cards to append
      const newCard = testimonialCards[0].cloneNode(true);
      testimonialContainer.appendChild(newCard);
    }
  }
});