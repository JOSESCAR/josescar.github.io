// Marca activo en la navegación y cuenta proyectos para el Hero
document.addEventListener("DOMContentLoaded", async () => {
  // Nav activo
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('nav a').forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if ((here === "" && href === "index.html") || href === here) a.classList.add("activo");
    if (here === "index.html" && href === "index.html") a.classList.add("activo");
  });

  // Contador de proyectos para el Hero (solo en index)
  const countEl = document.getElementById("projectCount");
  if (countEl) {
    try {
      const res = await fetch("proyectos.html", { cache: "no-store" }); // mismo origen → OK en GitHub Pages
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");

      // Cuenta tarjetas dentro de #project-list
      const cards = doc.querySelectorAll("#project-list .card");
      const n = cards.length;

      countEl.textContent = `+${n}`;
    } catch (e) {
      // Fallback si falla el fetch
      countEl.textContent = "+0";
      console.warn("No se pudo contar proyectos:", e);
    }
  }

  // Copiar email (botones con data-copy-email) — por si lo usas en Contacto
  document.querySelectorAll("[data-copy-email]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const email = btn.dataset.copyEmail || "carlosmexa302@gmail.com";
      navigator.clipboard.writeText(email).then(()=>{
        const old = btn.textContent;
        btn.textContent = "Correo copiado";
        setTimeout(()=> btn.textContent = old, 1600);
      });
    });
  });
});
