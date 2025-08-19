window.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-contact-form');
  const modal = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
