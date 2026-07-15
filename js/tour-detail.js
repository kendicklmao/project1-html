var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.getElementById("close-btn");
var sidebar = document.getElementById("sidebar-menu");
var overlay = document.getElementById("menu-overlay");
var loginBtn = document.getElementById("login-btn");

function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
}

function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
}

function login(){
    window.location.href = "auth.html";
}


menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

if (loginBtn){
    loginBtn.addEventListener('click', login);
}