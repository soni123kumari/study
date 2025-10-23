   const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav-menu');

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const marquee = document.querySelector('.marquee-content');

marquee.addEventListener('mouseover', () => {
    marquee.style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseout', () => {
    marquee.style.animationPlayState = 'running';
});

 // Toggle FAB Toolbar
 const fabButton = document.querySelector('.fab-button');
 const fabContainer = document.querySelector('.fab-container');

 fabButton.addEventListener('click', () => {
     fabContainer.classList.toggle('active');
 });
