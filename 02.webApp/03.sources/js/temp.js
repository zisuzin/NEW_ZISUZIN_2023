import comData from "./tempData/comData.js";
import catData from "./tempData/catData.js";
import { catToggle } from "./common.js";
import store from "./store.js";

// 상단영역 컴포넌트
Vue.component("top-comp", {
  template: comData.tarea,
});

// 상단영역 뷰인스턴스
new Vue({
  el: "#top",
  store,
  mounted() {},
});

// 메인영역 컴포넌트
Vue.component("nav-comp", {
  template: catData.navCat,
  mounted() {
    // 메인영역 공통 JS
    // catToggle();
  },
});

Vue.component("fil-comp", {
  template: catData.catFilter,
});

Vue.component("prod-list",{
  template: catData.NewBest_prodList,
})

// 메인영역 뷰인스턴스
new Vue({
  el: ".contWrap",
  store,
  created: function () {
    // created 실행구역 : DOM 연결 전
    // GET 방식으로 넘어온 데이터 처리
    let pm,pm1,pm2,pm3;

    if(location.href.indexOf("?") !== -1) {
      pm = location.href.split("?")[1].split("&");
      pm1 = pm[0].split("=")[1]; // cat1
      console.log(pm1)
      pm2 = pm[1].split("=")[1] // cat2
      pm3 = pm[2].split("=")[1] // cat3
      // console.log(pm1,pm2,pm3)
    }
    if(pm)
    store.commit("ChgMenu",{cat1:pm1,cat2:pm2,cat3:pm3}); 
  }, // created 구역
  mounted() {
    // mounted 실행구역 : DOM 연결 후
    // 로고 클릭시 첫페이지로 이동!
    $(".logo").click(() => (location.href = "index.html"));
  }, // mounted 구역
});
// 하단영역 뷰인스턴스
