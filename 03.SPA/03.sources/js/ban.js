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

    // 휠 방향 체크
    const delta = -e.wheelDelta;

    // 윈도우 높이값
    const winH = window.innerHeight;
    console.log("윈도우높이:",winH) 

    // 전체문서 높이값
    const docH = document.body.offsetHeight;
    console.log("문서높이:",docH) 
    // 휠 한계값

    const currentTop = parseInt(getComputedStyle(moveSl).top);
    // delta값이 양수인 경우 (아래로 휠-> 위로 이동)
    if(delta > 0) {
        moveSl.style.top = currentTop - delta + "px";
        moveSl.appendChild(moveSl.firstChild);
    }
    // delta값이 음수인 경우 (위로 휠-> 아래로 이동) 
    else if (delta < 0) {
        moveSl.insertBefore(tgsl[6], moveSl.firstChild)
        moveSl.style.top = currentTop - delta + "px";
    }

    tgsl.forEach((ele, idx) => {
        // data-seq 라는 사용자정의 속성 넣기
        ele.setAttribute("data-seq", idx);
    }); // forEach //

}

window.addEventListener("wheel", handleWheel);