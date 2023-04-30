const images = document.querySelectorAll(".hidden");
const imagePosition = [];

images.forEach((item) => {
    const position = item.getBoundingClientRect().top;
    imagePosition.push(position);
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    imagePosition.forEach((ele,idx)=> {
        if(scrollY > ele) {
            // images[idx].classList.add('visible');
        }
    });
});