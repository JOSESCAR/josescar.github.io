// Marca el enlace activo según la URL
(function () {
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === here) a.classList.add('activo');
    // Caso página raíz
    if ((here === '' || here === 'index.html') && href === 'index.html') a.classList.add('activo');
  });
})();

// Copiar email con un pequeño toast
function copiarCorreo(email) {
  navigator.clipboard.writeText(email).then(() => {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = 'Correo copiado: ' + email;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1800);
  });
}
window.copiarCorreo = copiarCorreo;
