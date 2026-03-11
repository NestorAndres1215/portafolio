export const projects = [
  {
    title: {
      es: "Sistema Académica Fútbol",
      en: "Football Academy System",
    },
    description: {
      es: "Control de riego con sensores y panel solar",
      en: "Irrigation control with sensors and solar panel",
    },
    tech: "Spring-Boot / Angular / MySql",
    github: "https://github.com/NestorAndres1215/sistema-academica-futbol",
  },
  {
    title: {
      es: "Dashboard Analytics",
      en: "Analytics Dashboard",
    },
    description: {
      es: "Dashboard de análisis de Clima, Noticias, Cripto, etc",
      en: "Analytics dashboard for Weather, News, Crypto, etc",
    },
    tech: "Node-js / React / Express",
    github: "https://github.com/NestorAndres1215/dashboard-analytics",
  },
  {
    title: {
      es: "Sistema Inventario",
      en: "Inventory System",
    },
    description: {
      es: "Gestión eficiente de productos, proveedores, compras, ventas y usuarios",
      en: "Efficient management of products, suppliers, purchases, sales and users",
    },
    tech: "Spring-Boot / Angular",
    github: "https://github.com/NestorAndres1215/sistema-inventario",
  },
  {
    title: {
      es: "Catálogo de Películas",
      en: "Movie Catalog",
    },
    description: {
      es: "Explorar y descubrir películas, series y actores usando la API de TMDb",
      en: "Explore and discover movies, series and actors using the TMDb API",
    },
    tech: "React / Vite",
    github: "https://github.com/NestorAndres1215/app-movie-catalog",
  },
  {
    title: {
      es: "Sistema Seguridad con OAUTH2",
      en: "Security System with OAUTH2",
    },
    description: {
      es: "Sistema que maneja usuarios con roles (ADMIN, USER) y control de acceso a recursos protegidos",
      en: "System that handles users with roles (ADMIN, USER) and access control to protected resources",
    },
    tech: "Angular / Spring Boot",
    github: "https://github.com/NestorAndres1215/sistema-seguridad-usuario",
  },
  {
    title: {
      es: "Trailers Películas",
      en: "Movie Trailers",
    },
    description: {
      es: "Gestión de trailers de películas, incluyendo inserción, actualización y eliminación",
      en: "Movie trailer management including insertion, update and deletion",
    },
    tech: "Thymeleaf / Spring Boot",
    github: "https://github.com/NestorAndres1215/app-trailers-movie",
  },
];

export type Project = typeof projects[number];
export type Lang = 'es' | 'en';