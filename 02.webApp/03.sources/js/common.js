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

function radioFn(){
  // 가격 라디오버튼 중복 선택 막기
let lastChecked = null; 

$('.rdo > input').on('change', function() {
  if (lastChecked && lastChecked !== this) {
    $(lastChecked).prop('checked', false); // 마지막으로 체크된 요소 체크 해제
  }
  lastChecked = this; // 마지막으로 체크된 요소를 현재 체크된 요소로 업데이트
});

// 직접입력버튼 체크시 입력창 활성화!
// 초기에 버튼 미체크된 경우 입력창 비활성화
$('.custom-filter-price > input').prop('disabled', true); 
// 직접입력 버튼 클릭시에만 입력창 활성화
$('.rdo > input').on('change', function() {
  if ($('.direct-user-input input').is(':checked')) {
    $('.custom-filter-price > input').addClass('is_active').prop('disabled', false);
  }
  else {
    $('.custom-filter-price > input').removeClass('is_active').prop('disabled', true);
  }
});
}


export { catToggle, radioFn };