// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuBtn = document.createElement('div');
menuBtn.id = "menu-btn";
menuBtn.classList.add("fas", "fa-bars");
document.querySelector('.header').appendChild(menuBtn);

const navbar = document.querySelector('.header .navbar');
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

// ==============================
// SWIPERS
// ==============================
const heroSwiper = new Swiper('.hero-slider', {
    loop:true,
    autoplay:{ delay:3000 },
    pagination:{ el:'.swiper-pagination', clickable:true }
});

const reviewSwiper = new Swiper('.review-slider', {
    loop:true,
    autoplay:{ delay:3500 },
    pagination:{ el:'.swiper-pagination', clickable:true }
});

// ==============================
// COLOR PALETTE SWITCHER
// ==============================
const root = document.documentElement;

// Switch to luxury blue & yellow
function setBlueYellowPalette(){
    root.style.setProperty('--primary-color', '#1A3D7C');
    root.style.setProperty('--accent-color', '#FFD700');
    root.style.setProperty('--background-color', '#F0F8FF');
}

// Call it by default
setBlueYellowPalette();
