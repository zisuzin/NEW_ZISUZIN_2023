const fadeContbx = document.querySelector(".fade-container");
const arrow = document.querySelector("svg");

// fadeOut 애니 완료 여부 저장 변수
let isScrolling = false;
let AniComplete = false; 

function handleAniComplete(){
    AniComplete = true;
    if(AniComplete && isScrolling) { 
        window.location.href = "main.html";
    }
}

function handleScrollEvt(){
    if(!isScrolling) { 
        isScrolling = true;
        fadeContbx.classList.add('fade-out');
        setTimeout(() => {
            window.removeEventListener("scroll",handleScrollEvt);
            arrow.removeEventListener("animationend",handleAniComplete);
            window.location.href = "main.html";
        }, 100);
    }
}

window.addEventListener("scroll", handleScrollEvt);
arrow.addEventListener("animationend", handleAniComplete); // 화살표애니 끝났을때 실행

