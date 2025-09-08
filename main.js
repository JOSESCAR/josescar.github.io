// Marca el link activo en la navbar
(function(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((page==='index.html' && href==='index.html') || href===page) a.classList.add('active');
  });
})();

// Copiar email (contacto)
function copyEmail(email){
  navigator.clipboard.writeText(email).then(()=>{
    let t = document.querySelector('.toast');
    if(!t){ t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
    t.textContent = 'Correo copiado: ' + email;
    t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'), 1800);
  });
}
