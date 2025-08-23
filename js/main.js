const offScreenMenu = document.querySelector('.off-screen-menu');

const openOffScreenMenu = document.querySelector('.ham-menu');

openOffScreenMenu.addEventListener('click', () => {
    openOffScreenMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});