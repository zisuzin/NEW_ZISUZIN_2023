import subdata from "./tempData/subData.js";
import comData from "./tempData/commonData.js"
import store from "./store.js";

// ##### 컴포넌트 등록 #### 
// 2. 메인영역
// 서브페이지 메뉴 뷰 템플릿 셋팅
Vue.component("stab-comp", {
    template: subdata.prodTab,
    methods:{
      test(category){
        store.commit('newChgData',category)
        // this.chgData(category);
        // this.$store.commit("showMoreItems"); // showMoreItems 뮤테이션 호출
        if (category === '전체') {
          this.$store.commit('showMoreItems');
        }
      },
    },
    mounted(){
      // 첫번째 li만 강제클릭 발생
      this.$nextTick(() => {
        const firstLi = this.$el.querySelector('ul > li:first-child');
        firstLi.click();
      });
      // console.log(store.state.setcat)
    },
});

Vue.component("prod-comp",{
  template: comData.rcent_view_pbx,
});

// 서브페이지 상품리스트 뷰 템플릿 셋팅
Vue.component("list-comp", {
  template: subdata.prodList,
  methods: {
    // 할인률 계산 - ((정가 - 할인가) / 정가) * 100 
    calculateDiscount(oprice,dprice){
      if(!oprice || !dprice) {
        return "";
      }
      const discount = ((oprice - dprice) / oprice) * 100;
      return Math.floor(discount) + '%'
    },
    // 정규식함수(숫자 세자리마다 콤마해주는 기능)
    numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    chgData(param) {
      store.state.setsNum = store.state.newData[param].sNum;
      store.state.setcat = store.state.newData[param].cat;
      store.state.setitem = store.state.newData[param].item;
    }
  },
  mounted(){
    // console.log(store.state.newData['전체'].item)
},
});

new Vue({
  el: ".new_container",
  store, // 뷰엑스 스토어 등록
  data: {
    subTit: ["NEW","BEST"],
  }, 
})

new Vue({
  el: ".recent-view-prod-bx",
})

// 메뉴 뷰 템플릿 클릭시 스타일 적용
const subTab = document.querySelectorAll(".new-prod-tab > ul > li");

subTab.forEach(ele =>
  ele.addEventListener("click", () => {
    for(let x of subTab) {
      x.classList.remove('clicked');
    }
    ele.classList.add('clicked');
}));