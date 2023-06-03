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

handleHover()

window.addEventListener("wheel", handleWheel);



