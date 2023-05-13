import subdata from "./tempData/subData.js";
import store from "./store.js";

// ##### 컴포넌트 등록 #### 
// 2. 메인영역
// 서브페이지 메뉴 뷰 템플릿 셋팅
Vue.component("stab-comp", {
    template: subdata.prodTab,
    methods:{
      test(x){
        store.commit('newChgData',x)
      }
    },
    mounted(){
      // 첫번째 li만 강제클릭 발생
      this.$nextTick(() => {
        const firstLi = this.$el.querySelector('ul > li:first-child');
        firstLi.click();
      });
    }
});

// 서브페이지 상품리스트 뷰 템플릿 셋팅
Vue.component("list-comp", {
  template: subdata.newprodList,
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
  },
  chgData(pram) {
    store.state.setsNum = state.newData[pram].sNum;
    store.state.setcat = state.newData[pram].cat;
    store.state.setitem = state.newData[pram].item;
  }
});

new Vue({
  el: ".new_container",
  store, // 뷰엑스 스토어 등록
  data: {
    subTit: ["NEW","BEST"],
  }, 
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