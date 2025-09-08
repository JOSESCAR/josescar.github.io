// Resalta el ítem activo del menú
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((path === 'index.html' && href === 'index.html') || href === path) {
      a.classList.add('active');
    }
  });
})();
