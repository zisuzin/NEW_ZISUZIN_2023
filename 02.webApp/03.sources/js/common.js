// 공통 기능 JS
function catToggle(){
    // 카테고리메뉴 클릭시 토글
    $(".ctg_depth1 > div").click(function () {
      const $target = $(this).parent(".ctg_depth1").find(".ctg_depth2");
  
      // 이미 열려있는 ctg_depth2 요소 닫음
      if ($target.is(":visible")) {
        $target.slideUp(300);
        $(this).removeClass("slide-down");
      }
      else {
        // 다른 ctg_depth2 요소를 모두 닫음
        $(".ctg_depth2").slideUp(300);
        $(".ctg_depth1 > div").removeClass("slide-down");
  
        // 현재 클릭한 요소를 토글
        $target.slideToggle(300);
        $(this).toggleClass("slide-down");
      }
  
      $('.ctg_depth2 > ul > li').on('click', function(event) {
        event.stopPropagation();
      });
    });
} // catToggle 함수

export { catToggle };