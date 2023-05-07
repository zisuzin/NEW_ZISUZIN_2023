const sc1 = document.querySelector(".section2_inner");
const sc1H = sc1.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
    let scVal = window.scrollY
    console.log(scVal)
    if(scVal >= sc1H) {

    }
});