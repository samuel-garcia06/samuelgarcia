# Portafolio · Samuel García Ayala

Portafolio personal de **Samuel García Ayala**, desarrollador web fullstack.

**Web:** https://samuel-garcia06.github.io · **Empresa:** [webparatodo.com](https://webparatodo.com)

| Escritorio (claro) | Escritorio (oscuro) |
| --- | --- |
| ![Portafolio en escritorio, modo claro](docs/capturas/escritorio-claro.png) | ![Portafolio en escritorio, modo oscuro](docs/capturas/escritorio-oscuro.png) |

| Móvil (claro) | Móvil (oscuro) |
| --- | --- |
| <img src="docs/capturas/movil-claro.png" alt="Portafolio en móvil, modo claro" width="300"> | <img src="docs/capturas/movil-oscuro.png" alt="Portafolio en móvil, modo oscuro" width="300"> |

## Stack

- Angular 21: componentes standalone, signals, control flow (`@for` / `@if`) y sin zone.js
- Prerenderizado en la compilación (`outputMode: static`): el HTML llega con todo el contenido, sin servidor
- Tailwind CSS v4
- Iconos con [lucide-angular](https://lucide.dev)
- Fuentes Sora y DM Sans (Google Fonts)
- Despliegue en GitHub Pages con GitHub Actions

## Estructura

```
src/app/
├── core/                  # Servicio de tema claro/oscuro y utilidad de portapapeles
├── data/portfolio.data.ts # Todo el contenido (experiencia, proyectos, clientes...) tipado
└── sections/              # Un componente por sección
    ├── header/  hero/  about/  experience/  projects/
    └── clients/ skills/ education/ contact/ footer/
public/                    # cv.pdf, samuel.jpg, capturas de proyectos (img/), favicon e imagen Open Graph
```

Para cambiar textos, proyectos o clientes solo hay que editar `src/app/data/portfolio.data.ts`.

## Desarrollo

```bash
npm install
npm start          # http://localhost:4200
npm run build      # compila en dist/portafolio/browser
```

## Despliegue

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que compila la aplicación con el `base-href` adecuado y la publica en GitHub Pages.
