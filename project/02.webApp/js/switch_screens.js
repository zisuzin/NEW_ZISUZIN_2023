const fadeContbx = document.querySelector(".fade-container");
const arrow = document.querySelector("svg");

// fadeOut 애니 완료 여부 저장 변수
let isScrolling = false;
let AniComplete = false;

// 화살표애니 완료후 실행 함수 
function handleAniComplete(){
  AniComplete = true;
  if(isScrolling && AniComplete) { 
    window.location.href = "main.html";
  }
}

// 스크롤이벤트감지 함수
function handleScrollEvt(){
  if(!isScrolling) { 
    isScrolling = true; 
    fadeContbx.classList.add('fade-out');
    setTimeout(() => {
        // 사용후에는 대상 스크롤이 아니므로 제거
        window.removeEventListener("scroll", handleScrollEvt);
        // 페이지이동 후 불필요하므로 제거
        arrow.removeEventListener("animationend", handleAniComplete); 
        window.location.href = "main.html";
    }, 100);
  }
}

window.addEventListener("scroll", handleScrollEvt);
arrow.addEventListener("animationend", handleAniComplete);
