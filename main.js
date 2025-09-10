// Marca activo en la navegación según la URL
document.addEventListener("DOMContentLoaded", () => {
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute("href");
    if ((here === "index.html" && href === "index.html") || href === here){
      a.classList.add("activo");
    }
  });

  // Copiar email (botón con data-email)
  document.querySelectorAll("[data-copy-email]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const email = btn.dataset.copyEmail;
      navigator.clipboard.writeText(email).then(()=>{
        btn.textContent = "Correo copiado";
        setTimeout(()=> btn.textContent = "Copiar correo", 1600);
      });
    });
  });
});
