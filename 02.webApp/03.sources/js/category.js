import comData from "./tempData/comData.js";
import catData from "./tempData/catData.js";

// 상단영역 컴포넌트
Vue.component("top-comp",{
    template: comData.tarea,
})

// 상단영역 뷰인스턴스
new Vue({
    el: "#top",
});

// 메인영역 컴포넌트
Vue.component("nav-comp",{
    template: catData.navCat,
})

// 메인영역 뷰인스턴스
new Vue({
    el: ".pagewrap",
})
// 하단영역 뷰인스턴스


