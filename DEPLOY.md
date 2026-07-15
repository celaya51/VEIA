# Despliegue de veia.com.mx (Astro → Hostinger)

El sitio se compila con Astro y se publica en Hostinger automáticamente mediante
GitHub Actions (`.github/workflows/deploy.yml`). Cada `git push` a `main` compila y
sube el sitio a `public_html`.

## Trabajo local

```bash
npm install      # una sola vez
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera dist/ (lo que se publica)
```

## Puesta en marcha del despliegue automático (pasos de Julio, una sola vez)

Estos pasos requieren credenciales, por eso los haces tú:

### 1. Activar SSH en Hostinger
hPanel → veia.com.mx → Avanzado → **Acceso SSH** → botón **Activar**.
Anota: IP/host, puerto (ej. 65002) y usuario (ej. u786509254).

### 2. Crear una llave SSH y registrarla en Hostinger
En tu compu (Git Bash):
```bash
ssh-keygen -t ed25519 -C "github-deploy-veia" -f ~/.ssh/veia_deploy
```
- Copia el contenido de `~/.ssh/veia_deploy.pub` (la pública) y agrégala en
  hPanel → Acceso SSH → **Administrar claves SSH** → añadir clave.

### 3. Guardar los secretos en GitHub
GitHub → repo VEIA → Settings → Secrets and variables → **Actions** → New secret.
Crea estos 5 secretos:

| Secret | Valor |
|---|---|
| `HOSTINGER_SSH_KEY` | contenido de la llave **privada** `~/.ssh/veia_deploy` (todo el texto) |
| `HOSTINGER_HOST` | la IP/host de SSH (ej. `217.196.55.211`) |
| `HOSTINGER_PORT` | el puerto SSH (ej. `65002`) |
| `HOSTINGER_USER` | el usuario (ej. `u786509254`) |
| `HOSTINGER_TARGET` | ruta de publicación, ej. `/home/u786509254/domains/veia.com.mx/public_html` |

> La ruta exacta de `HOSTINGER_TARGET` se confirma en hPanel → Administrador de archivos
> (es la carpeta `public_html` del dominio).

### 4. Desconectar el auto-deploy actual de Hostinger
Hoy Hostinger publica solo jalando la rama `main` del repo (sirve el sitio viejo).
Para que no peleen los dos sistemas:
hPanel → veia.com.mx → Avanzado → **GIT** → eliminar el despliegue automático existente.
A partir de ahí, quien publica es GitHub Actions.

### 5. Fusionar y publicar
Cuando lo anterior esté listo, fusionamos la rama `astro-rebuild` a `main`.
El primer push disparará el workflow, que compila y sube el sitio nuevo.

## Notas
- El correo de Hostinger (contacto@, juliocubas@) **no se toca**: vive aparte del hosting web.
- `enviar.php` (formulario de contacto) se publica dentro de `dist/` y sigue corriendo como
  PHP en Hostinger.
- El workflow no usa `--delete`, así que no borra archivos ajenos en `public_html`.
