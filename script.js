//-- Toggle Navbar --//
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuLinks.classList.toggle('active');
    });
});

// -- Sección hero pagina index -- //
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(50px)';
    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 500);
});

// -- Sección intro de la pagina galeria -- //
const texts = [
    "Capturamos tus mejores momentos.",
    "Fotografía profesional.",
    "Belleza en cada clic.",
    "Inmortaliza tus recuerdos."
];

let currentIndex = 0;
const dynamicTextElement = document.getElementById('dynamic-text');

function changeText() {
    dynamicTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

changeText();
setInterval(changeText, 3000);

