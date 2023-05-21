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
        } // commonFn 함수
    }
});

// 메인영역 컴포넌트
Vue.component("nav-comp",{
    template: catData.navCat,
})

Vue.component("fil-comp",{
    template: catData.catFilter,
})


// 메인영역 뷰인스턴스
new Vue({
    el: ".pagewrap",
    // store,
    // created 실행구역 : DOM 연결 전
    created: function() { 
        // let pm;
        // if(location.href.indexOf("?"))
    },
    mounted(){
        // 로고 클릭시 첫페이지로 이동!
        $(".logo").click(()=>
        (location.href = "index.html"));
    } // mounted 구역 
})
// 하단영역 뷰인스턴스


