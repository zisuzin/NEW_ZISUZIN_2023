const screen = document.querySelector(".swiper");
const circle = screen.querySelector(".circle");

screen.addEventListener("mouseover",() => {
    circle.style.display = 'block';
});

screen.addEventListener("mousemove",(e) => {
    const x = e.clientX - circle.clientWidth  / 2;
    const y = e.clientY - circle.clientHeight / 2;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
});

screen.addEventListener("mouseleave",() => {
    circle.style.display = "none";
});
