# Cómo aplicar el estilo Avista a otro sitio

Este documento explica cómo usar el tema visual Avista en cualquier proyecto HTML.

## Estructura de archivos

```
proyecto/
├── index.html
├── css/
│   ├── avista-core.css        ← Estilos principales del tema (309 KB)
│   ├── avista-companion.css   ← Componentes complementarios
│   ├── avista-extra.css       ← Estilos extra y utilidades
│   ├── bootstrap.min.css      ← Bootstrap 5 grid system
│   ├── swiper.min.css         ← Sliders/carruseles
│   ├── fontawesome-min.css    ← Iconos
│   ├── animate-min.css        ← Animaciones CSS
│   └── style.css              ← Tema WordPress (WordPress theme info)
├── js/
│   ├── jquery.min.js          ← jQuery (requerido)
│   ├── bootstrap-min.js       ← Bootstrap JS
│   ├── swiper.min.js          ← Swiper slider
│   ├── gsap.min.js            ← Animaciones avanzadas
│   ├── scrollTrigger.min.js   ← Animaciones al hacer scroll
│   ├── lenis.min.js           ← Smooth scrolling
│   ├── avista-core.js         ← Inicialización del tema (widgets, sliders, etc.)
│   ├── avista-custom.js       ← Scripts personalizados
│   └── wow-min.js             ← Animaciones al entrar en viewport
└── images/                    ← Imágenes decorativas del tema
```

## Cómo aplicar el estilo a tu HTML

### 1. Copia las carpetas `css/`, `js/` e `images/` a tu proyecto

### 2. En el `<head>` de tu HTML, agrega:

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">

<!-- Avista CSS -->
<link rel="stylesheet" href="css/animate-min.css">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/swiper.min.css">
<link rel="stylesheet" href="css/fontawesome-min.css">
<link rel="stylesheet" href="css/avista-core.css">
<link rel="stylesheet" href="css/avista-companion.css">
<link rel="stylesheet" href="css/avista-extra.css">

<!-- Personaliza los colores principales aquí -->
<style>
  :root {
    --as-clr-pr-1: #2D6A4F;   /* Color primario */
    --as-clr-pr-3: #1B4332;   /* Color primario oscuro */
  }
</style>
```

### 3. Al final del `<body>`, antes de `</body>`, agrega:

```html
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap-min.js"></script>
<script src="js/swiper.min.js"></script>
<script src="js/lenis.min.js"></script>
<script src="js/wow-min.js"></script>
<script src="js/gsap.min.js"></script>
<script src="js/scrollTrigger.min.js"></script>
<script src="js/avista-core.js"></script>
<script src="js/avista-custom.js"></script>

<script>
  // Inicializar animaciones
  new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 100, mobile: false }).init();
</script>
```

### 4. Usa las clases de Avista

| Clase | Propósito |
|---|---|
| `.as-h-1` | Títulos y headings |
| `.as-p-1` | Párrafos y texto |
| `.as-pr-btn-3` | Botones con animación hover |
| `.as-subtitle-3` | Subtítulos de sección |
| `.as-container-1` | Contenedor principal |
| `.tx-section` | Sección con padding |
| `.tx-title` | Título de sección |
| `.tx-subTitle` | Subtítulo de sección |
| `.tx-description` | Texto descriptivo |
| `.wa-fix` | Clearfix / overflow hidden |
| `.wa-img-cover` | Imagen con object-fit: cover |
| `.wa-p-relative` | Position relative |
| `.wow fadeInUp2` | Animación al entrar |

### 5. Colores

Cambia los colores editando las variables CSS:

```css
:root {
  --as-clr-pr-1: #TU_COLOR_PRIMARIO;
  --as-clr-pr-3: #TU_COLOR_OSCURO;
}
```

## Componentes disponibles

### Botones animados
```html
<a href="#" class="as-pr-btn-3">
  <span class="text" data-back="TEXTO" data-front="TEXTO"></span>
  <span class="icon">
    <i class="fa-solid fa-arrow-right"></i>
    <i class="fa-solid fa-arrow-right"></i>
  </span>
</a>
```

### Acordeón de servicios (Bootstrap 5)
```html
<div class="as-services-3-accordion-item wa_accordion_item active wow fadeInUp2">
  <button class="item-title as-h-1" data-bs-toggle="collapse" data-bs-target="#svc-0">
    <span class="number">{<span class="just-number">01</span>}</span>
    <span class="text">Título del servicio</span>
    <span class="icon"><span>+</span></span>
  </button>
  <div id="svc-0" class="accordion-collapse collapse show">
    <div class="item-wrap">
      <div class="item-wrap-left">
        <p class="as-p-1 item-disc">Descripción...</p>
        <div class="item-tags">
          <a href="#" class="as-p-1 link-elm">Tag 1</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Cards (About)
```html
<div class="as-about-3-card wow fadeInRight2">
  <div class="title-x-icon">
    <h3 class="as-h-1 title">Título</h3>
    <div class="icon">🔍</div>
  </div>
  <p class="as-p-1 disc">Descripción...</p>
</div>
```

## Sistema de temas (claro/oscuro o dual)

El estilo incluye soporte para cambiar colores en tiempo real mediante CSS custom properties. Ejemplo:

```js
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--as-clr-pr-1', '#7C3AED');
  } else {
    document.documentElement.style.setProperty('--as-clr-pr-1', '#2D6A4F');
  }
}
```

---

**Estilo original:** Avista WordPress Theme by Themexriver  
**Adaptado para:** uso en sitios HTML estáticos  
