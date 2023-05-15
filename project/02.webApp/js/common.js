import comData from "./tempData/commonData.js"

// 상단영역 뷰 컴포넌트
Vue.component("top-area",{
    name: "top-area",
    template: comData.topArea,
});

// 하단영역 뷰 컴포넌트
Vue.component("info-area",{
    name: "info-area",
    template: comData.infoArea,
});

Vue.component("prod-comp",{
    template: comData.rcent_view_pbx,
});

const makeVue = x => new Vue({el:x});
makeVue("#info");
makeVue(".recent-view-prod-bx");

new Vue({
    el: "#header",
})


// 공사중 표시
$('.header_top_personal_menu > ul > li:nth-child(2), .header_top_personal_menu > ul > li:nth-child(3)').on('click', function() {
    alert("공사중입니다");
  });
  