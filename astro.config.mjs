import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://veia.com.mx',
  server: {
    port: 4321,
    host: true,
  },
  build: {
    // Rutas limpias sin barra final (index.html por carpeta)
    format: 'file',
  },
});
