const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Close all other answers
    faqButtons.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.hidden = true;
    });

    // Toggle current one
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.hidden = false;
    }
  });
});

