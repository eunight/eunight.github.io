# 🌿 Eugenia Ramirez - Bitácora de Ingeniería

Este repositorio contiene el código fuente de mi portafolio personal y bitácora de proyectos, construido con **[Astro](https://astro.build/)** y desplegado en **GitHub Pages** mediante GitHub Actions (`https://eunight.github.io`).

El sitio adopta la filosofía visual **"Cozy Tech"**: un equilibrio entre la precisión de la administración de sistemas, la ciencia de datos y la calidez del desarrollo interactivo en 2D.

## 🛠️ Stack Tecnológico

* **Framework:** Astro (SSG - Static Site Generation)
* **Estilos:** CSS3 nativo con CSS Custom Properties (Soporte de Modo Oscuro)
* **Internacionalización (i18n):** Enrutamiento estático en Español (`/`) e Inglés (`/en`)
* **Despliegue:** GitHub Actions CI/CD en Node.js `22.23.4`

## 📁 Estructura del Proyecto

```text
/public
  ├── Cv_Eugenia_Ramirez.pdf
  └── /assets
      └── /images/         <-- Capturas, diagramas e ilustraciones
/src
  ├── /layouts
  │   ├── Layout.astro     <-- Layout principal (ES)
  │   └── LayoutEN.astro   <-- Layout principal (EN)
  ├── /pages
  │   ├── index.astro      <-- Landing page (ES)
  │   ├── /en
  │   │   ├── index.astro  <-- Landing page (EN)
  │   │   └── /proyectos   <-- Documentación
  │   └── /proyectos
  │       ├── dspace.astro
  │       ├── proxmox.astro
  │       ├── calle-luna.astro
  │       ├── atlas.astro
  │       └── churn.astro
  └── /styles
      └── global.css
```
## 🚀 Desarrollo Local

    1. Clona el repositorio:
    ```bash

    git clone [https://github.com/eunight/eunight.github.io.git](https://github.com/eunight/eunight.github.io.git)
    ```
    2. Instala las dependencias:
   ```bash

    npm install
    ```
    3. Inicia el servidor de desarrollo:
    ```bash

    npm run dev
    ```
    4. Construye el sitio para producción:
    ```bash

    npm run build
    ```

---
*Diseñado y desarrollado por Eugenia Ramírez.