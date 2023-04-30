const fadeContbx = document.querySelector(".fade-container");

// fadeOut 애니 완료 여부 저장 변수
let isScrolling = false;
let fadeComplete = true; 

window.addEventListener("scroll", ()=> {
    fadeContbx.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 500);
});

function addScrollEvt(){
    fadeComplete = true; // fadeOut 애니 완료되었음 표시
    window.addEventListener("scroll", moveToNext); // 스크롤 감지되었을때 다음 페이지로 이동
}

function fadeOut(){
    fadeComplete = false; // fadeOut 애니 시작되었음 표시
    fadeContbx.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 500);
    
}