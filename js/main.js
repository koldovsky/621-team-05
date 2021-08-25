// Burger

const openMobileMenuButton = document.querySelector('.open-mobile-menu-js');
const closeMobileMenuButton = document.querySelector('.close-mobile-menu-js');
const mobileMenu = document.querySelector('.header-right');

openMobileMenuButton.addEventListener('click', showMobileMenu);
closeMobileMenuButton.addEventListener('click', hideMobileMenu);

function showMobileMenu(){
    openMobileMenuButton.style.display = 'none';
    closeMobileMenuButton.style.display = 'block';
    mobileMenu.style.display = 'block';
}

function hideMobileMenu(){
    openMobileMenuButton.style.display = 'block';
    closeMobileMenuButton.style.display = 'none';
    mobileMenu.style.display = 'none';
}


// Modal window
const modalWindow = document.querySelector('.modal-age-wrapper');
const closeModalWindowButton = document.querySelector('.close-modal-js');
const body = document.querySelector('body');

closeModalWindowButton.addEventListener('click', closeModalWindow);

function closeModalWindow(){
    modalWindow.style.display = "none";
    body.classList.remove("scroll-disabled");
    
}    
