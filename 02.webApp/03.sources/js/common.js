// 공통 기능 JS
// 메인영역 관련 공통 함수

function commonFn(){
    // GNB메뉴 클릭시 사이드탭메뉴 등장
    $(".gnb > ul > li").mouseover(function(){
        $(".cat_left_side_tab").css({
            left: "30px",
            opacity: "1",
        }, 500);
        console.log("클릭")
    });
    
    $(".cat_left_side_tab").mouseleave(function(){
        $(this).css({
            left: "-208px",
            opacity: "0",
        }, 500);
    });
}

commonFn();