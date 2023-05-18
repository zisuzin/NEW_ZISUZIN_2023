import comData from "./tempData/commonData.js"
import store from "./store.js";
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
    store,
    // mounted() {
    //     const detail = $(".header_top_gnb > ul > li > a").click({
    //         console.log(detail)
    //     })
    // }
})
