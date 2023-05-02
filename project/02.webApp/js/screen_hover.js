const screen = document.querySelector(".swiper");
const circle = screen.querySelector(".circle");

screen.addEventListener("mouseover",() => {
    circle.style.display = 'block';
});

screen.addEventListener("mousemove",(e) => {
    const x = e.clientX;
    const y = e.clientY;
    // console.log("x축:",x);
    // console.log("y축:",y);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
});

screen.addEventListener("mouseleave",() => {
    circle.style.display = "none";
});
