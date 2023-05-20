import comData from "./tempData/comData.js";
import catData from "./tempData/catData.js";

// 상단영역 컴포넌트
Vue.component("top-comp",{
    template: comData.tarea,
})

// 상단영역 뷰인스턴스
new Vue({
    el: "#top",
    mounted(){
        this.commonFn(); // commonFn 함수호출!
    },
    methods: {
        commonFn(){
            /* GNB메뉴 클릭시 사이드탭메뉴 등장 */
            $(".gnb > ul > li").mouseover(function() {
                $(".cat_left_side_tab").animate({
                    left: "30px",
                    opacity: "1",
                }, 500);
            });
            
            /* 사이드탭메뉴 리브시 사라짐 */
            // $(".cat_left_side_tab").mouseleave(function() {
            //     console.log("클릭");
            //     $(this).animate({
            //         left: "-208px",
            //         opacity: "0",
            //     }, 500);
            // });
        } // commonFn 함수
    }
});

// 메인영역 컴포넌트
Vue.component("nav-comp",{
    template: catData.navCat,
})


// 메인영역 뷰인스턴스
new Vue({
    el: ".pagewrap",
    // store,
    // created 실행구역 : DOM 연결 전
    created: function() { 
        // let pm;
        // if(location.href.indexOf("?"))
    }
})
// 하단영역 뷰인스턴스


