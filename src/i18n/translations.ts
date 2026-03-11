export const translations = {
    es: {
        nav: {
            inicio: "Inicio", sobre: "Sobre mí", skills: "Tecnologías",
            proyectos: "Proyectos", contacto: "Contacto",
        },
        hero: {
            tittle: "Hola, soy",
            badge: "Disponible para trabajar",
            roles: ["Desarrollador Java", "Desarrollador Web", "Backend Developer", "Frontend Developer"],
            descripcion: "Construyo aplicaciones robustas con Java en el backend y experiencias modernas en el frontend.",
            verProyectos: "Ver proyectos", contacto: "Contacto",
        },
        sobre: {
            label: "Sobre mí", titulo: "¿Quién soy?",
            texto1: "Soy desarrollador enfocado en Java, APIs REST y desarrollo web moderno. Me gusta construir soluciones eficientes y proyectos de automatización que resuelvan problemas reales.",
            texto2: "Disfruto aprender nuevas tecnologías, colaborar en equipo y escribir código limpio que sea fácil de mantener y escalar.",
            stats: { experiencia: "Años de experiencia", proyectos: "Proyectos completados", tecnologias: "Tecnologías dominadas" },
            descargarCV: "Descargar CV",
            cards: {
                backend: { titulo: "Backend Java", texto: "APIs REST, Spring Boot, arquitecturas limpias y escalables." },
                web: { titulo: "Desarrollo Web", texto: "Interfaces modernas con Vue, JS y buenas prácticas de UX." },
                auto: { titulo: "Automatización", texto: "Scripts, herramientas y flujos que ahorran tiempo y errores." },
            }
        },
        skills: {
            label: "Stack tecnológico", titulo: "Tecnologías",
            sub: "Herramientas y lenguajes con los que construyo soluciones",
            categorias: { backend: "Backend", frontend: "Frontend", db: "Base de datos", tools: "Herramientas", ides: "IDEs & Editores" }
        },
        proyectos: {
            label: "Portafolio", titulo: "Proyectos",
            sub: "Algunos de los proyectos que he construido", verCodigo: "Ver código",
        },
        contacto: {
            label: "Contacto", titulo: "¿Hablamos?",
            texto: "Si quieres trabajar conmigo o tienes alguna pregunta, no dudes en escribirme.",
            respuesta: "Respondo en menos de 24 horas",
            links: { email: "Email", github: "GitHub", linkedin: "LinkedIn" }
        },
        footer: {
            subtitulo: "Desarrollador Java y Web",
            hecho: "Hecho con amor y mucho café",
            derechos: "© 2026 Nestor. Todos los derechos reservados.",
        }
    },
    en: {
        nav: {
            inicio: "Home", sobre: "About", skills: "Skills",
            proyectos: "Projects", contacto: "Contact",
        },
        hero: {
            tittle: "Hi, I'm",
            badge: "Available for work",
            roles: ["Java Developer", "Web Developer", "Backend Developer", "Frontend Developer"],
            descripcion: "I build robust applications with Java on the backend and modern experiences on the frontend.",
            verProyectos: "View projects", contacto: "Contact",
        },
        sobre: {
            label: "About me", titulo: "Who am I?",
            texto1: "I'm a developer focused on Java, REST APIs and modern web development. I like building efficient solutions and automation projects that solve real problems.",
            texto2: "I enjoy learning new technologies, collaborating in teams and writing clean code that is easy to maintain and scale.",
            stats: { experiencia: "Years of experience", proyectos: "Completed projects", tecnologias: "Technologies mastered" },
            descargarCV: "Download CV",
            cards: {
                backend: { titulo: "Java Backend", texto: "REST APIs, Spring Boot, clean and scalable architectures." },
                web: { titulo: "Web Development", texto: "Modern interfaces with Vue, JS and good UX practices." },
                auto: { titulo: "Automation", texto: "Scripts, tools and workflows that save time and reduce errors." },
            }
        },
        skills: {
            label: "Tech stack", titulo: "Technologies",
            sub: "Tools and languages I use to build solutions",
            categorias: { backend: "Backend", frontend: "Frontend", db: "Databases", tools: "Tools", ides: "IDEs & Editors" }
        },
        proyectos: {
            label: "Portfolio", titulo: "Projects",
            sub: "Some of the projects I have built", verCodigo: "View code",
        },
        contacto: {
            label: "Contact", titulo: "Let's talk?",
            texto: "If you want to work with me or have any questions, feel free to reach out.",
            respuesta: "I reply within 24 hours",
            links: { email: "Email", github: "GitHub", linkedin: "LinkedIn" }
        },
        footer: {
            subtitulo: "Java & Web Developer",
            hecho: "Made with love and lots of coffee",
            derechos: "© 2026 Nestor. All rights reserved.",
        }
    }
} as const;

export type Lang = keyof typeof translations;