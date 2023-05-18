// 버튼클릭시 상단이동
const mTopBtn = document.querySelector(".scrollTop");

    mTopBtn.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });

// 상단이동시 숨기기/보이기
window.addEventListener("scroll", ()=>{
    let scVal = Math.ceil(window.scrollY);
    if(scVal === 0) {
        mTopBtn.style.opacity = 0;
    } else {
        mTopBtn.style.opacity = 1;
    }
});
