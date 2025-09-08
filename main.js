// Marca el link activo en la barra si falta la clase en alguna página
(function () {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here && !a.classList.contains('active')) a.classList.add('active');
  });
})();

// Copiar email con toast
function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast'; t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = 'Correo copiado: ' + email;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1800);
  });
}
window.copyEmail = copyEmail;
