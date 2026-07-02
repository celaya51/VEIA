/* VEIA — interacciones mínimas: tema + menú móvil */
(function () {
  var KEY = "veia-theme";
  var root = document.documentElement;

  // Aplicar tema guardado
  var saved = localStorage.getItem(KEY) || "natural";
  root.setAttribute("data-theme", saved);

  function iconFor(theme) { return theme === "natural" ? "🌿" : "✦"; }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.textContent = iconFor(root.getAttribute("data-theme"));
      toggle.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "natural" ? "resonancia" : "natural";
        root.setAttribute("data-theme", next);
        localStorage.setItem(KEY, next);
        toggle.textContent = iconFor(next);
      });
    }

    var menuBtn = document.getElementById("menuBtn");
    var links = document.getElementById("navLinks");
    if (menuBtn && links) {
      menuBtn.addEventListener("click", function () { links.classList.toggle("open"); });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { links.classList.remove("open"); });
      });
    }
  });
})();
