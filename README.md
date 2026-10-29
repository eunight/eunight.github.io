# 🌿 Eugenia Ramirez — Bitácora de Ingeniería

[![Astro](https://img.shields.io/badge/Astro-v5-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Node.js](https://img.shields.io/badge/Node.js-v22.23.4-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Deploy Status](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/eunight/eunight.github.io/actions)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Este repositorio contiene el código fuente de mi portafolio personal y bitácora técnica, disponible en [eunight.github.io](https://eunight.github.io).

El proyecto adopta una filosofía de diseño **"Cozy Tech"**: un punto de encuentro entre la precisión técnica de la administración de sistemas, la rigurosidad de la ciencia de datos y la calidez del desarrollo interactivo en 2D.

---

## 🛠️ Stack Tecnológico & Arquitectura

- **Motor Estático:** [Astro v5](https://astro.build/) — Renderizado estático ultrarrápido (SSG) con 0kB de JavaScript por defecto.
- **Diseño & Estilos:** CSS3 nativo con *Custom Properties*, soporte dinámico para Modo Oscuro y grillas responsivas adaptadas a móviles.
- **Internacionalización (i18n):** Arquitectura de rutas bilingüe estricta para Español (`/`) e Inglés (`/en`).
- **CI/CD & Hosting:** Despliegue automatizado en GitHub Pages mediante GitHub Actions sobre **Node.js v22.23.4**.

---

## 📌 Proyectos Destacados en la Bitácora

| Categoría | Proyecto | Tecnologías |
| :--- | :--- | :--- |
| **01 // Infraestructura** | **Migración Core DSpace 9.x** | `Linux` `Solr` `DSpace` `Bash` |
| **02 // Infraestructura** | **Administración Proxmox & ZFS** | `Proxmox` `ZFS` `Nginx` `PM2` |
| **03 // Dev Creativo** | **Huellas a casa (Videojuego 2D)** | `Lua` `LÖVE2D` `Tiled` `bump.lua` |
| **04 // Ciencia de Datos** | **Pipeline CERN ATLAS** | `Python` `Marimo` `GitHub Actions` |
| **05 // Ciencia de Datos** | **Análisis Estocástico de Churn** | `Pandas` `Estocástica` `Seaborn` |

---

## 📁 Estructura del Proyecto

```text
/public
  ├── Cv_Eugenia_Ramirez.pdf   <-- Curriculum en formato PDF
  └── /assets
      └── /images/             <-- Capturas, esquemas y recursos visuales
/src
  ├── /layouts
  │   ├── Layout.astro         <-- Esqueleto base y lógica de temas (ES)
  │   └── LayoutEN.astro       <-- Esqueleto base bilingüe (EN)
  ├── /pages
  │   ├── index.astro          <-- Landing page principal (Español)
  │   ├── /en
  │   │   ├── index.astro      <-- Landing page principal (Inglés)
  │   │   └── /proyectos       <-- Subpáginas traducidas
  │   └── /proyectos
  │       ├── dspace.astro
  │       ├── proxmox.astro
  │       ├── huellasacasa.astro
  │       ├── atlas.astro
  │       └── churn.astro
  └── /styles
      └── global.css           <-- Variables de color "Cozy Tech" y media queries
```

---

## 🚀 Desarrollo e Instalación Local

Requisitos previos: tener instalado **Node.js (>= 22.23.4)** y **npm**.

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/eunight/eunight.github.io.git
   cd eunight.github.io
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   *Accede a la previsualización local en `http://localhost:4321`.*

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

<p center align="center">
  <sub>Diseñado y desarrollado por <strong>Eugenia Ramirez</strong>.</sub>
</p>
