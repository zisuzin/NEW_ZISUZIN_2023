function moveFn() {
  // 이벤트 대상
  const slidewrapL = $(".ui_auto_slider1 > ul");
  const slidewrapR = $(".ui_auto_slider2 > ul");

  // 위치값 변수
  let lpos = 0;
  // 재귀호출 상태값 변수(1-호출가능/0-호출불가)
  let call_sts = 0;
  // 재귀호출 타임아웃용 변수
  let callT;

  function moveList() {
    // 1. 이동위치값(top값 감소하기)
    lpos--;
    // console.log("위치값:",lpos);

    // 2. 한계값 초기화 + 첫번째 요소 맨뒤로 이동!
    if(lpos < -350) {
      // 한계값 초기화
      lpos = 0; 

      // 첫번째 li 맨뒤로 이동
      slidewrapL.append(slidewrapL.find("li").first());
    }
    
    else if (lpos > 350) {
      lpos = 0;
      slidewrapR.prepend(slidewrapR.find("li").last());
    }

    // 3. 이동하가
    slidewrapL.css({
      top: lpos + "px",
    });


    slidewrapR.css({
      bottom: lpos + "px",
    });

    // 재귀호출하기(비동기호출-setTimeout)
    // 조건: call_sts 상태값이 1일때만 호출
    if(call_sts) callT = setTimeout(moveList, 40);
  }
  moveList();

  slidewrapL.hover(
    function(){
      call_sts = 0; // 콜백중단
    }
    ,function(){
      call_sts = 1; // 콜백허용
      moveList();
    }
  ); // hover // 

  slidewrapR.hover(
    function(){
      call_sts = 0; // 콜백중단
    }
    ,function(){
      call_sts = 1; // 콜백허용
      moveList();
    }
  ); // hover // 
}

moveFn();