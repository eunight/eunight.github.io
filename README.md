🌿 Eugenia Ramirez - Bitácora de Ingeniería

Este repositorio contiene el código fuente de mi portafolio personal y bitácora de proyectos, alojado mediante [GitHub Pages](https://eunight.github.io).

El diseño de este sitio sigue una filosofía visual denominada **"Cozy Tech"**. Es un esfuerzo por equilibrar la arquitectura de información rigurosa necesaria para documentar despliegues de servidores, algoritmos de optimización matemática y modelos estocásticos, con una estética cálida y artesanal inspirada en el desarrollo de videojuegos 2D.

## 🛠️ Stack Tecnológico (MVP)

Actualmente, el proyecto está construido como un sitio estático puro para priorizar el rendimiento y la facilidad de despliegue inicial:

*   **Estructura:** HTML5 Semántico.
*   **Estilos:** CSS3 nativo (uso intensivo de CSS Custom Properties para la gestión de temas).
*   **Interactividad:** Vanilla JavaScript (sin dependencias externas).

## 🗂️ Arquitectura de Proyectos

El portafolio clasifica el trabajo en tres grandes áreas de especialización:

1.  **Infraestructura & Sistemas:** Administración de entornos Proxmox, migraciones de bases de datos y gestión de almacenamiento (ZFS, Solr).
2.  **Desarrollo Creativo:** Ingeniería de videojuegos (LÖVE2D, Lua) y manejo de físicas de colisión.
3.  **Ciencia de Datos & Optimización:** Modelado matemático estocástico, optimización y procesamiento de datasets.

## 🚀 Despliegue Local

Para correr este proyecto en un entorno local, no se requieren dependencias de Node.js. Simplemente:

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/TU_USUARIO/eunight.github.io.git](https://github.com/TU_USUARIO/eunight.github.io.git)
    ```
2.  Inicia un servidor local:
    ```bash
    python3 -m http.server 8000
    ```
3.  Abre `http://localhost:8000` en tu navegador.

---
*Diseñado y codificado desde cero. Los pequeños detalles, como el selector de tema y el gato en la navegación, son características intencionales de la interfaz.*