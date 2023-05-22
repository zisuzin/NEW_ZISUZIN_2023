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
  methods: {
    // 중분류 lnb텍스트 영문으로 변환
    ChgNoteList(v) {
      switch (v) {
        // women, men, kids 공통 중분류 데이터
        case "여성신발" :
        case "남성신발" :
        case "아동신발" :
          v = "shoes";
          break;
        case "여성가방" :
        case "남성가방" :
        case "아동가방" :
          v = "bag";
          break;
        case "여성잡화" :
        case "남성잡화" :
        case "아동잡화" :
          v = "ac";
          break;
        // // kids lnb 소분류 데이터
        // case "전체" :
        //   v = "all";
        //   break;
        // case "구두" :
        //   v = "shoe";
        //   break;
        // case "샌들" :
        //   v = "sandal";
        //   break;
        // case "패션가방" :
        //   v = "styleback";
        //   break;
        // case "실내화가방" :
        //   v = "shoebag";
        //   break;
        // case "양말" :
        //   v = "socks";
        //   break;
        // case "모자" :
        //   v = "hat";
        //   break;

        // // men lnb 소분류 데이터
        // case "스니커즈" :
        //   v = "sneakers";
        //   break;
        // case "백팩" :
        //   v = "bagpack";
        //   break;
        // case "맨즈백" :
        //   v = "mensbag";
        //   break;
        
        // // women lnb 소분류 데이터
        // case "플랫슈즈" :
        //   v = "flat";
        //   break;
        // case "미니백" :
        //   v = "minibag";
        //   break;
      }
      // console.log(v);
      store.commit("ChgMenu", v)
    },
  },
  mounted() {
    // 메인영역 공통 JS
    // catToggle();
  },
});

Vue.component("fil-comp", {
  template: catData.catFilter,
});

// 메인영역 뷰인스턴스
new Vue({
  el: ".contWrap",
  store,
  created: function () {
    // created 실행구역 : DOM 연결 전
    // 파라미터 변수
    let pm;

    // GET방식으로 넘어온 데이터 처리하여 서브페이지 연결!
    // location.href -> 상단 url 읽어옴
    // indexOf("?")!==-1 -> 물음표가 있으면
    if (location.href.indexOf("?") !== -1) {
      pm = location.href.split("?")[1].split("=")[1];
      // 물음표(?)로 잘라서 뒤엣것, 이퀄(=)로 잘라서 뒤엣것
      // 파라미터만 추출함!
      // pm에 할당이 되었다면 undefined가 아니므로 true
      if (pm) {
        store.commit("ChgMenu", pm);
      }
    }
  }, // created 구역
  mounted() {
    // mounted 실행구역 : DOM 연결 후
    // 로고 클릭시 첫페이지로 이동!
    $(".logo").click(() => (location.href = "index.html"));
  }, // mounted 구역
});
// 하단영역 뷰인스턴스
