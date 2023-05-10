import comData from "./tempData/commonData.js"

// 상단영역 뷰 컴포넌트
Vue.component("top-area",{
    name: "top-area",
    template: comData.topArea
});

// 하단영역 뷰 컴포넌트
Vue.component("info-area",{
    name: "info-area",
    template: comData.infoArea,
});


const makeVue = x => new Vue({el:x});

makeVue("#header");
makeVue("#info");

