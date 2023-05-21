import comData from "./tempData/comData.js";
import catData from "./tempData/catData.js";

// 상단영역 컴포넌트
Vue.component("top-comp", {
  template: comData.tarea,
});

// 상단영역 뷰인스턴스
new Vue({
  el: "#top",
  mounted() {
    // this.commonFn(); // commonFn 함수호출!
  },
  methods: {
    // commonFn() {
    //   // 2 하위메뉴 + 메뉴배경 style변경함수 만들기
    //   // ele - 변경요소, hv - 높이값, opa - 투명도값
    //   const stFn = (ele, hv, opa) => {
    //     ele.style.height = hv + "px";
    //     ele.style.opacity = opa;
    //   }; ///// stFn ///////

    //   const gnbList = document.querySelectorAll(".gnb > ul > li");

    //   // 3. 상위메뉴 li에 이벤트 설정하기 //////////
    //   for (let x of gnbList) {
    //     // (1) 마우스 오버시 /////////
    //     x.onmouseenter = () => {
    //         // (1) 하위메뉴 박스 .smenu 선택하기
    //         let tg = x.querySelector(".gnb_draw_select");

    //         // (2) 하위메뉴 박스 내부박스 높이값 구하기
    //         let hv = tg.clientHeight;
    //         // console.log("내부높이:",hv);

    //         // (3) 스타일 변경요소 함수호출
    //         // stFn(요소,높이값,투명도)
    //         stFn(tg,hv,1);
    //     }; /////// mouseenter ///////////

    //     // (2) 마우스 아웃시 /////////
    //     x.onmouseleave = () => {
    //         // (1) 하위메뉴 박스 .smenu 선택하기
    //         let tg = x.querySelector(".gnb_draw_select");

    //         // (2) 스타일 변경요소 함수호출
    //         // stFn(요소,높이값,투명도)
    //         stFn(tg,"0",0);
    //     }; /////// mouseleave ///////////
    //   }
    // }, // commonFn 함수
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
  el: ".pagewrap",
  // store,
  // created 실행구역 : DOM 연결 전
  created: function () {
    // let pm;
    // if(location.href.indexOf("?"))
  },
  mounted() {
    // 로고 클릭시 첫페이지로 이동!
    $(".logo").click(() => (location.href = "index.html"));
  }, // mounted 구역
});
// 하단영역 뷰인스턴스
