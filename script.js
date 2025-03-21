const translations = {
    es: {
        welcome: "Bienvenido a mi Linktree",
        title: "Analista Programador / Desarrollador Fullstack",
        instagram: "Sígueme en Instagram",
        linkedin: "Conecta en LinkedIn",
        github: "Revisa mis proyectos en GitHub",
        portfolio: "Explora mi Portafolio"
    },
    en: {
        welcome: "Welcome to my Linktree",
        title: "Software Analyst / Fullstack Developer",
        instagram: "Follow me on Instagram",
        linkedin: "Connect on LinkedIn",
        github: "Check my projects on GitHub",
        portfolio: "Explore my Portfolio"
    }
};

let currentLang = 'es';

document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage();
});

function updateLanguage() {
    document.querySelector('p').textContent = translations[currentLang].welcome;
    document.querySelector('h2').textContent = translations[currentLang].title;
    document.querySelectorAll('.social-link span').forEach(span => {
        if (span.parentElement.querySelector('.fa-instagram')) {
            span.textContent = translations[currentLang].instagram;
        } else if (span.parentElement.querySelector('.fa-linkedin')) {
            span.textContent = translations[currentLang].linkedin;
        } else if (span.parentElement.querySelector('.fa-github')) {
            span.textContent = translations[currentLang].github;
        } else if (span.parentElement.querySelector('.fa-briefcase')) {
            span.textContent = translations[currentLang].portfolio;
        }
    });
}