import subdata from "./tempData/subData_nb.js";
import msubdata from "./tempData/subData_wmk.js"
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

Vue.component("subTab-comp",{
  template: msubdata.sideTab,
})

new Vue({
  el: "#cont_wrap",
  store, // 뷰엑스 스토어 등록
  data: {
    subTit: ["NEW","BEST"],
  }, 
  component: {
    // 서브페이지 상품리스트 뷰 템플릿 셋팅
    "list-comp": {
      name: list-comp,
      template: subdata.new_prodList,
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
    }
  }
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

/*  3. WOMEN - 서브페이지  */
// 카테고리메뉴 클릭시 토글
$('.ctg_depth1 > div').click(function(){
  var $target = $(this).parent('.ctg_depth1').find('.ctg_depth2');
  
  // 이미 열려있는 ctg_depth2 요소 닫음
  if ($target.is(':visible')) {
    $target.slideUp(300);
    $(this).removeClass('slide-down');

  } else {
    // 다른 ctg_depth2 요소를 모두 닫음
    $('.ctg_depth2').slideUp(300);
    $('.ctg_depth1 > div').removeClass('slide-down');
    
    // 현재 클릭한 요소를 토글
    $target.slideToggle(300);
    $(this).toggleClass('slide-down');
  }
});
