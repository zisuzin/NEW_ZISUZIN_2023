import comData from "./tempData/comData.js";
import catData from "./tempData/catData.js";
import { catToggle, radioFn, sortFn } from "./common.js";
import store from "./store.js";

// 상단영역 컴포넌트
Vue.component("top-comp", {
  template: comData.tarea,
  mounted() {
    gnbClick();
  },
});

// 상단영역 뷰인스턴스
new Vue({
  el: "#top",
  store,
});

// 메인영역 컴포넌트
Vue.component("nav-comp", {
  template: catData.navCat,
});

Vue.component("fil-comp", {
  template: catData.catFilter,
  mounted() {
    radioFn();
    sortFn();
  }
});

Vue.component("prod-comp", {
  template: catData.prodList,
})

Vue.component("prod-list",{
  template: catData.NewBest_prodList,
  methods: {
    chgFn(cat){
      store.commit('ChgMenu',cat)
    }
  }
})

// 메인영역 뷰인스턴스
new Vue({
  el: ".contWrap",
  store,
  mounted() {
  }, // mounted 구역
});

// 하단영역 뷰인스턴스

// 뷰 전역등록 함수
Vue.prototype.numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

Vue.prototype.calculateDiscount = function calculateDiscount(oprice, dprice) {
  if (!oprice || !dprice) {
    return "";
  }
  const discount = ((oprice - dprice) / oprice) * 100;
  return Math.floor(discount) + '%';
};

const gnbLi = document.querySelectorAll(".gnb > ul > li > a");
const navLi = document.querySelectorAll(".cat_left_side_tab > ul > li");
// console.log(gnbLi)
  gnbLi.forEach((item, index) => {
    item.addEventListener("click", ()=>{
      navLi.forEach((x)=> x.style.display = "block")
    });
  });