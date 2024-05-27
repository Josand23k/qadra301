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

//-- Sección mision, vision y valores en la pagina Quienes Somos --//
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(button.getAttribute('data-tab')).classList.add('active');
        });
    });
});

//-- Sección perfiles --//
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.perfil-img');
    profileImage.addEventListener('mouseover', () => {
        profileImage.style.opacity = '0.7';
    });
    profileImage.addEventListener('mouseout', () => {
        profileImage.style.opacity = '1';
    });
});