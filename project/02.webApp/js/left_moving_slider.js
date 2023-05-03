function moveFn() {
  const slidewrap = $(".new-item-list");
  let sc_sts = 0;
  let lpos = 0;
  let call_sts = 1;
  let callT;
  const startTop = slidewrap.offset().top - $(window).height();

  function moveList() {
    lpos--;
    if(lpos < -262) {
      lpos = 0;
      slidewrap.append(slidewrap.find("li").first());
    }

    slidewrap.css({
      left: lpos + "px",
    });

    if(call_sts) callT = setTimeout(moveList, 40);
  }

  // 스크롤 이벤트 핸들러 추가
  $(window).scroll(function() {
    if($(window).scrollTop() > startTop) {
      // 스크롤이 해당 배너영역에 도달하면 슬라이드 시작
      if(!call_sts) {
        call_sts = 1;
        moveList();
      }
    } else {
      call_sts = 0;
    }
  });

  slidewrap.hover(
    function(){
      call_sts = 0;
    }
    ,function(){
      call_sts = 1;
      moveList();
    }
  );
} 

moveFn();