export interface ProjectPoint {
  label: string;
  text: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectLocalizedData {
  title: string;
  tagNumber: string;
  areaTag: string;
  metaLine: string;
  descriptionHtml: string;
  points: ProjectPoint[];
  skills: string[];
  image: string;
  links?: ProjectLink[];
}

export interface ProjectsData {
  [slug: string]: {
    es: ProjectLocalizedData;
    en: ProjectLocalizedData;
  };
}

export const projectsData: ProjectsData = {
  dspace: {
    es: {
      title: "Migración Core DSpace 9.x",
      tagNumber: "01",
      areaTag: "INFRAESTRUCTURA 🗄️",
      metaLine: "ÁREA: INFRAESTRUCTURA // ROL: Asistente de Soporte TI (DTES) // STACK: Solr, DSpace, Linux, Bash, PostgreSQL",
      descriptionHtml: 'Migración, actualización e integración del <a href="http://saber.ula.ve/" target="_blank" class="text-link">Repositorio Institucional SaberULA</a> de la Universidad de Los Andes, desde arquitecturas heredadas (DSpace 6.x) hacia estándares modernos (<a href="https://dspace.lyrasis.org/" target="_blank" class="text-link">DSpace 9.x</a> / REST API) bajo estrictas pautas de confidencialidad.',
      points: [
        { label: "Migración de Datos", text: "Actualización de esquemas y traslado seguro de metadatos, objetos digitales (Assetstore) y configuraciones sin pérdida de información." },
        { label: "Apache Solr", text: "Reindexación de núcleos de estadísticas de uso y consultas históricas para garantizar la continuidad del historial del repositorio." },
        { label: "Automatización", text: "Diseño y ejecución de scripts en Bash para optimizar la ingesta de datos, auditorías de consistencia en PostgreSQL y tareas del sistema." }
      ],
      skills: ["DSpace 9.x", "PostgreSQL", "Apache Solr", "Bash Scripting", "REST API"],
      image: "/images/dspace_ilustracion.jpg",
      links: [
        { label: "Visitar SaberULA", url: "http://saber.ula.ve/" },
        { label: "Oficial DSpace", url: "https://dspace.lyrasis.org/" }
      ]
    },
    en: {
      title: "DSpace 9.x Core Migration",
      tagNumber: "01",
      areaTag: "INFRASTRUCTURE 🗄️",
      metaLine: "AREA: INFRASTRUCTURE // ROLE: IT Support Assistant (DTES) // STACK: Solr, DSpace, Linux, Bash, PostgreSQL",
      descriptionHtml: 'Migration, update, and integration of the <a href="http://saber.ula.ve/" target="_blank" class="text-link">SaberULA Institutional Repository</a> for Universidad de Los Andes, transitioning from legacy architectures (DSpace 6.x) to modern standards (<a href="https://dspace.lyrasis.org/" target="_blank" class="text-link">DSpace 9.x</a> / REST API) under strict confidentiality guidelines.',
      points: [
        { label: "Data Migration", text: "Schema updates and secure transfer of metadata, digital objects (Assetstore), and configurations with zero data loss." },
        { label: "Apache Solr", text: "Reindexing of usage statistics cores and historical queries to ensure the continuity of the repository's history." },
        { label: "Automation", text: "Design and execution of Bash scripts to optimize data ingestion, PostgreSQL consistency audits, and system tasks." }
      ],
      skills: ["DSpace 9.x", "PostgreSQL", "Apache Solr", "Bash Scripting", "REST API"],
      image: "/images/dspace_ilustracion.jpg",
      links: [
        { label: "Visit SaberULA", url: "http://saber.ula.ve/" },
        { label: "DSpace Official", url: "https://dspace.lyrasis.org/" }
      ]
    }
  },
  proxmox: {
    es: {
      title: "Administración de Servidores & Infraestructura",
      tagNumber: "02",
      areaTag: "INFRAESTRUCTURA 🗄️",
      metaLine: "ÁREA: INFRAESTRUCTURA // ROL: Asistente de Soporte TI (DTES) // STACK: Proxmox, ZFS, Nginx, PM2, Linux",
      descriptionHtml: "Mantenimiento y administración continua de la infraestructura de red y servidores para la Dirección de Telecomunicaciones y Servicios (DTES) de la Universidad de Los Andes, garantizando alta disponibilidad en los servicios institucionales.",
      points: [
        { label: "Virtualización", text: "Despliegue y monitoreo de contenedores (LXC) y máquinas virtuales sobre clústeres de Proxmox VE para optimizar recursos." },
        { label: "Almacenamiento", text: "Configuración y gestión de pools de almacenamiento ZFS, asegurando la alta integridad de los datos, redundancia y la automatización de respaldos." },
        { label: "Redes y Web", text: "Administración de proxys inversos con Nginx para enrutamiento seguro SSL/TLS, y control de procesos Node.js con PM2." }
      ],
      skills: ["Proxmox VE", "ZFS Pool", "Nginx", "Linux CLI", "PM2"],
      image: "/images/proxmox_ilustracion.jpg"
    },
    en: {
      title: "Server Administration & Infrastructure",
      tagNumber: "02",
      areaTag: "INFRASTRUCTURE 🗄️",
      metaLine: "AREA: INFRASTRUCTURE // ROLE: IT Support Assistant (DTES) // STACK: Proxmox, ZFS, Nginx, PM2, Linux",
      descriptionHtml: "Continuous maintenance and administration of network infrastructure and servers for the Telecommunications and Services Department (DTES) at Universidad de Los Andes, ensuring high availability of institutional services.",
      points: [
        { label: "Virtualization", text: "Deployment and monitoring of containers (LXC) and virtual machines on Proxmox VE clusters to optimize resources." },
        { label: "Storage", text: "Configuration and management of ZFS storage pools, ensuring high data integrity, redundancy, and automated backups." },
        { label: "Networking & Web", text: "Administration of Nginx reverse proxies for secure SSL/TLS routing, and control of Node.js processes using PM2." }
      ],
      skills: ["Proxmox VE", "ZFS Pool", "Nginx", "Linux CLI", "PM2"],
      image: "/images/proxmox_ilustracion.jpg"
    }
  },
  huellasacasa: {
    es: {
      title: "Huellas a Casa",
      tagNumber: "03",
      areaTag: "DESARROLLO CREATIVO ⚔️",
      metaLine: "ÁREA: DESARROLLO CREATIVO // TIPO: Videojuego 2D // STACK: Lua, LÖVE2D, bump.lua, Tiled",
      descriptionHtml: "Diseño y desarrollo de un videojuego de plataformas 2D de scroll lateral cooperativo construido desde cero en Lua utilizando el motor LÖVE2D.",
      points: [
        { label: "Mecánica de Cooperación", text: "Sistema dinámico para alternar el control en tiempo real entre el perro Sol y la gata Luna, requiriendo el uso de habilidades únicas para resolver puzzles." },
        { label: "Físicas y Colisiones", text: "Implementación de físicas personalizadas, plataformas móviles y detección de colisiones usando la librería bump.lua." },
        { label: "Diseño de Niveles", text: "Creación de escenarios y niveles modulares con el editor Tiled gestionando carga de mapas por capas y animaciones de sprites (STI)." }
      ],
      skills: ["Lua", "LÖVE2D", "bump.lua", "Tiled", "GameDev"],
      image: "/images/huellas_ilustracion.jpg"
    },
    en: {
      title: "Paws to Home",
      tagNumber: "03",
      areaTag: "CREATIVE DEV ⚔️",
      metaLine: "AREA: CREATIVE DEV // TYPE: 2D Video Game // STACK: Lua, LÖVE2D, bump.lua, Tiled",
      descriptionHtml: "Design and development of a cooperative 2D side-scrolling platformer video game built from scratch in Lua using the LÖVE2D engine.",
      points: [
        { label: "Cooperative Mechanics", text: "Dynamic real-time character switching system between Sol the dog and Luna the cat, requiring unique abilities to solve puzzles." },
        { label: "Physics & Collisions", text: "Implementation of custom physics, moving platforms, and collision response using the bump.lua library." },
        { label: "Level Design", text: "Creation of modular environments with Tiled map editor managing layer rendering and sprite animations (STI)." }
      ],
      skills: ["Lua", "LÖVE2D", "bump.lua", "Tiled", "GameDev"],
      image: "/images/huellas_ilustracion.jpg"
    }
  },
  atlas: {
    es: {
      title: "Pipeline ATLAS - El Físico Remoto",
      tagNumber: "04",
      areaTag: "CIENCIA DE DATOS 🔬",
      metaLine: "ÁREA: CIENCIA DE DATOS // EVENTO: CERN ATLAS Hackathon (CoAfina) // STACK: Python, Marimo, Docker",
      descriptionHtml: "Flujo automatizado de análisis de datos de física de partículas del CERN ATLAS desarrollado durante el 'Reto 6: El Físico Remoto' de CoAfina.",
      points: [
        { label: "CI/CD Pipeline", text: "Desarrollo de un pipeline de análisis de física continuo utilizando GitHub Actions y contenedores Docker para garantizar la reproducibilidad." },
        { label: "Análisis y Extracción", text: "Procesamiento de datos del CERN ATLAS mediante secuencias de comandos en Python y la librería uproot." },
        { label: "Cuadernos Interactivos", text: "Documentación y visualización científica interactiva implementando Quarto y marimo." }
      ],
      skills: ["Python", "uproot", "Quarto", "Marimo", "GitHub Actions", "Docker"],
      image: "/images/atlas_ilustracion.jpg"
    },
    en: {
      title: "ATLAS Pipeline - El Físico Remoto",
      tagNumber: "04",
      areaTag: "DATA SCIENCE 🔬",
      metaLine: "AREA: DATA SCIENCE // EVENT: CERN ATLAS Hackathon (CoAfina) // STACK: Python, Marimo, Docker",
      descriptionHtml: "Automated particle physics data analysis pipeline for CERN ATLAS open data developed during CoAfina's 'Challenge 6: The Remote Physicist'.",
      points: [
        { label: "CI/CD Pipeline", text: "Development of a continuous physics analysis pipeline using GitHub Actions and Docker containers to ensure reproducibility." },
        { label: "Analysis and Extraction", text: "Processing of CERN ATLAS data using Python scripts and the uproot library." },
        { label: "Interactive Notebooks", text: "Interactive scientific visualization and documentation implementing Quarto and marimo." }
      ],
      skills: ["Python", "uproot", "Quarto", "Marimo", "GitHub Actions", "Docker"],
      image: "/images/atlas_ilustracion.jpg"
    }
  },
  churn: {
    es: {
      title: "Análisis Estocástico de Churn",
      tagNumber: "05",
      areaTag: "CIENCIA DE DATOS 📊",
      metaLine: "ÁREA: CIENCIA DE DATOS // DATASET: IBM Telco Customer Churn // STACK: Estocástica, Pandas",
      descriptionHtml: "Procesamiento, limpieza y minería del dataset Telco Customer Churn de IBM para identificar patrones y probabilidades de abandono de clientes.",
      points: [
        { label: "Limpieza de Datos", text: "Preprocesamiento, imputación y estructuración de los datos en Pandas para el análisis estadístico." },
        { label: "Minería de Datos", text: "Identificación de características clave y variables de mayor impacto que influyen en la retención del cliente." },
        { label: "Modelado Estocástico", text: "Aplicación de probabilidades y variables aleatorias para predecir distintos escenarios de abandono (churn)." }
      ],
      skills: ["Estocástica", "Pandas", "Minería de Datos", "Python"],
      image: "/images/churn_ilustracion.jpg"
    },
    en: {
      title: "Stochastic Churn Analysis",
      tagNumber: "05",
      areaTag: "DATA SCIENCE 📊",
      metaLine: "AREA: DATA SCIENCE // DATASET: IBM Telco Customer Churn // STACK: Stochastics, Pandas",
      descriptionHtml: "Data processing, cleaning, and mining of the IBM Telco Customer Churn dataset to identify patterns and customer attrition probabilities.",
      points: [
        { label: "Data Cleaning", text: "Preprocessing, imputation, and structuring of data in Pandas for statistical analysis." },
        { label: "Data Mining", text: "Identification of key features and highest-impact variables influencing customer retention." },
        { label: "Stochastic Modeling", text: "Application of probabilities and random variables to predict different customer churn scenarios." }
      ],
      skills: ["Stochastics", "Pandas", "Data Mining", "Python"],
      image: "/images/churn_ilustracion.jpg"
    }
  }
};