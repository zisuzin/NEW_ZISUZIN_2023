// PC - 휠이벤트 + 메인배너이동

import {qs, qsa} from "./eventFn.js";

/****************************************** 
    함수명: handleWheel
    기능: 휠 이동시 슬라이드 위치 변경
******************************************/
let prot = 0;

function handleWheel(e){

    // 광휠금지
    if(prot) return;
    prot = 1;
    setTimeout(()=>{
        prot = 0
    },100);

    // 슬라이드 겉박스
    const moveSl = qs(".album_wrap");
    
    // 대상 슬라이드 li
    const tgsl = qsa(".album_set");
    // console.log(tgsl[3].offsetHeight)

    // 휠 방향 체크
    const delta = -e.wheelDelta;

    // delta값이 양수인 경우 (아래로 휠-> 위로 이동)
    tgsl.forEach((ele, idx) => {
        if(delta > 0) {
            ele.style.top = `-${ele.offsetHeight}px`;
            moveSl.appendChild(moveSl.firstChild);
        }
        // delta값이 음수인 경우 (위로 휠-> 아래로 이동) 
        else if (delta < 0) {
            ele.style.top = `+${ele.offsetHeight}px`;
            moveSl.insertBefore(tgsl[6], moveSl.firstChild)
        }

        // data-seq 라는 사용자정의 속성 넣기
        ele.setAttribute("data-seq", idx);
    }); // forEach //

}

/****************************************** 
    함수명: handleHover
    기능: 마우스 오버시 CD 회전하면서 옆으로 나옴
******************************************/
function handleHover(){
    // 대상에 호버했을때 함수호출!
   const hovertg = qsa(".album_set");
    hovertg.forEach((ele)=>{
        // 호버했을때 cd 회전하면서 튀어나옴
        const tg = ele.lastElementChild;
        ele.onmouseover = () => {
            tg.style.transition = 'transform 5s';
            tg.style.transform = 'translateX(83%) rotate(720deg)';
        }
        
        ele.onmouseleave = () => {
            tg.style.transition = 'transform 5s';
            tg.style.transform = 'translateX(73%) rotate(0deg)';
        }
    })
}

/****************************************** 
    함수명: handleToggle
    기능: 원형 네비 메뉴 클릭시 GNB 등장
******************************************/
function handleToggle(){
    const nav = document.querySelector(".circular_nav");
    const toggleBtn = nav.querySelector(".toggle_btn");

    toggleBtn.addEventListener("click",() => {
        nav.classList.toggle("active");
        toggleBtn.classList.toggle("active");
    });
}

function player(){
    const paused_btn = $(".play_song_btn");
    
    paused_btn.click(function() {
        paused_btn.toggleClass("active");
        /* active 클래스 가지고있으면 이미지 변경! */
        if(paused_btn.hasClass("active")){
            paused_btn.find("img").attr("src", "../00.data/02.imgData/player/bx-play-circle.svg")
        }
        else {
            paused_btn.find("img").attr("src", "../00.data/02.imgData/player/bx-pause.svg")
        }
    });
}

// 함수호출!
handleHover();
handleToggle();
player();

window.addEventListener("wheel", handleWheel);



