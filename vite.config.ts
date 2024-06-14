import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lol-generator/', // Reemplaza 'lol-generator' con el nombre de tu repositorio
  build: {
    outDir: 'docs', // Carpeta de salida configurada como 'docs'
  },
});
