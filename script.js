document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  // You can connect this to a backend or email API (like EmailJS)
  document.getElementById('form-message').textContent =
    'Thank you for contacting us, ' + name + '! We’ll get back to you soon.';

  this.reset();
});
