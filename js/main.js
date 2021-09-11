const hamb_btn = document.getElementById("hamburger-btn");
const nav_box = document.getElementById("nav-box");
hamb_btn.addEventListener("click", function () {
    nav_box.classList.toggle('active');
});

const progress = document.querySelector('.header');
const body = document.getElementsByTagName('body');
window.addEventListener('scroll', function () {
    progress.style.setProperty('--line-width', ((window.pageYOffset) * 100 / (document.body.offsetHeight-window.innerHeight)) + "%");
});