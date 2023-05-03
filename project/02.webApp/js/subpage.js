import sdata from "./tempData/data-sub.js";

// ###### 메인영역 메뉴 뷰 템플릿 셋팅하기 #######
Vue.component("stab-comp", {
  name: "stab-comp",
  template: sdata.new_best_tab,
});

// ###### 하단영역 메뉴 뷰 템플릿 셋팅하기 #######
// Vue.component("prod-comp", {
//   name: "prod-comp",
//   template: sdata.prod_list,
// });

// sdata 변수 정의는 Vue 인스턴스 생성 코드 밑으로 이동합니다.

//###### 메인영역 뷰 인스턴스 생성하기 ##########
new Vue({
  el: ".new-prod-container",
  data: {},
  mounted: function () {
    console.log("mounted구역");
  },
});