const openMobileMenu = document.querySelector('.open-mobile-menu-js');
const closeMobileMenu = document.querySelector('.close-mobile-menu-js');



openMobileMenu.addEventListener('click', showMobileMenu);
closeMobileMenu.addEventListener('click', closeMobileMenu);

function showMobileMenu(){
    openMobileMenu.style.display = 'none';
    closeMobileMenu.style.display = 'block';
}