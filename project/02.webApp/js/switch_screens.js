const fadeContbx = document.querySelector(".fade-container");

window.addEventListener("scroll", ()=> {
    fadeContbx.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 500);
});