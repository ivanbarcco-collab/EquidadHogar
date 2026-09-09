const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  });
});

document.querySelector('#work-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('.form-status');
  const data = new FormData(form);
  const name = data.get('name');
  const subject = `Postulación para cuidador/a domiciliario - ${name} ${data.get('lastName')}`;
  const body = [
    'Nueva postulación para trabajar en EquidadHogar',
    '',
    `Nombre: ${name}`,
    `Apellido: ${data.get('lastName')}`,
    `Fecha de nacimiento: ${data.get('birth') || 'No informado'}`,
    `Correo electrónico: ${data.get('email')}`,
    `Zona o provincia: ${data.get('zone')}`,
    `Tipo de cuidado: ${data.get('specialty') || 'No informado'}`,
    `WhatsApp: ${data.get('whatsapp')}`
  ].join('\n');

  status.textContent = 'Abriendo tu correo para enviar la postulación...';
  window.location.href = `mailto:equidadhogar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
