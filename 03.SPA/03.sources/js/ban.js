// PC - 휠이벤트 + 메인배너이동

/****************************************** 
    함수명: handleWheel
    기능: 휠 이동시 슬라이드 위치 변경
******************************************/
function handleWheel(e){

    // 슬라이드 겉박스
    const moveSl = $(".bancont")
    console.log(moveSl)
    // 대상 슬라이드 li
    const tgsl = $(".album_set")

    // 휠 방향 체크
    const delta = -e.wheelDelta;
    // console.log("휠방향:",delta);

    // 윈도우 높이값
    const winH = window.innerHeight;
    console.log("윈도우높이:",winH) 

    // 전체문서 높이값
    const docH = document.body.offsetHeight;
    console.log("문서높이:",docH) 
    // 휠 한계값

    const currentTop = parseInt(moveSl.css("top"));
    // delta값이 양수인 경우 (아래로 휠-> 위로 이동)
    if(delta > 0) {
        // console.log(currentTop)
        moveSl.css("top", currentTop - delta + "px");
        const lastLi = moveSl.find("ul > li").last();
    }
    // delta값이 음수인 경우 (위로 휠-> 아래로 이동) 
    else if (delta < 0) {
        moveSl.css("top", currentTop - delta + "px");
    }

}

window.addEventListener("wheel", handleWheel);