# Despliegue de veia.com.mx (Astro → Hostinger)

## Cómo funciona

- **`astro-rebuild`** = rama de trabajo (el código fuente Astro). Aquí se edita.
- **`main`** = sitio ya compilado (HTML/CSS/JS listos). Hostinger la sirve en veia.com.mx.
- **GitHub Actions** (`.github/workflows/deploy.yml`): en cada `push` a `astro-rebuild`
  compila el sitio y publica el resultado (`dist/`) en `main`. Hostinger detecta el
  cambio en `main` y actualiza el sitio. No usa secretos ni SSH.

Flujo de una actualización:

```
editar en astro-rebuild  ->  git push  ->  Action compila  ->  publica en main  ->  Hostinger sirve
```

## Trabajo local

```bash
npm install      # una sola vez
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera dist/ (lo que se publica); opcional en local
```

## Publicar un cambio

```bash
git checkout astro-rebuild
# ...editar archivos en src/ ...
git add -A && git commit -m "mi cambio"
git push
```

El resto es automático. Puedes ver el progreso en GitHub → pestaña **Actions**.

## Notas
- El correo de Hostinger (contacto@, juliocubas@) vive aparte del hosting web: no se toca.
- `enviar.php` (formulario de contacto) se publica dentro del sitio y corre como PHP en Hostinger.
- Si algún día quieres mover el hosting o usar despliegue por SSH, se puede cambiar el workflow.
