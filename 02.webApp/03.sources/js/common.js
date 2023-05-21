import comData from "./tempData/comData.js";
import catData from "./tempData/catData.js";
import store from "./store.js";

// 상단영역 컴포넌트
Vue.component("top-comp", {
  template: comData.tarea,
});

// 상단영역 뷰인스턴스
new Vue({
  el: "#top",
  store,
  mounted() {
  },
});

// 메인영역 컴포넌트
Vue.component("nav-comp", {
  template: catData.navCat,
});

Vue.component("fil-comp", {
  template: catData.catFilter,
});

// 메인영역 뷰인스턴스
new Vue({
  el: ".contWrap",
  store,
  created: function(){ // created 실행구역 : DOM 연결 전
    // 파라미터 변수
    let pm;

    // GET방식으로 넘어온 데이터 처리하여 서브페이지 연결!
    // location.href -> 상단 url 읽어옴
    // indexOf("?")!==-1 -> 물음표가 있으면
    if(location.href.indexOf("?")!==-1){
      pm = location.href.split("?")[1].split("=")[1];
      // 물음표(?)로 잘라서 뒤엣것, 이퀄(=)로 잘라서 뒤엣것
      // 파라미터만 추출함!
      // pm에 할당이 되었다면 undefined가 아니므로 true
      if(pm) {
        store.commit("ChgMenu", pm);
      }
    }
  }, // created 구역 
  mounted() { // mounted 실행구역 : DOM 연결 후
    // 로고 클릭시 첫페이지로 이동!
    $(".logo").click(() => (location.href = "index.html"));
  }, // mounted 구역
});
// 하단영역 뷰인스턴스
