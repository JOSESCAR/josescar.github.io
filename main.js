(function(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((page==='index.html' && href==='index.html') || href===page) {
      a.classList.add('active');
    }
  });
})();
