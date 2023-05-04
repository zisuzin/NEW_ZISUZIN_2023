import sdata from "./tempData/data-sub.js";

// ##### 컴포넌트 등록 #### 
// 2. 메인영역
// 메인영역1 메뉴 뷰 템플릿 셋팅
Vue.component("stab-comp", {
    name: "stab-comp",
    template: sdata.new_best_tab,
});

// 메인영역2 상품리스트 뷰 템플릿 셋팅
Vue.component("list-comp", {
    name: "list-comp",
    template: sdata.prod_list,
});

// 3. 하단영역
// 하단영역 뷰 템플릿 셋팅

// ##### 뷰 인스턴스 생성 #####
// 1. 상단영역

// 2. 메인영역
// 숫자증감 변수
let num = 0;

new Vue({
    el: ".new_container",
    data() {
      return {
        isrc:`../00.data/02.imgData/new_sc_comp/item_${this.setNum()}.jpg `,
        sub_tit1: "NEW",
        sub_tit2: "BEST",
          products: [
            {
              brand: "슈펜키즈",
              name: "키즈 피셔맨 말랑 젤리샌들 HPKV1D204U",
              price: 59900,
            },
            {
              brand: "슈펜키즈",
              name: "키즈 피셔맨 말랑 피치샌들 HPKV1D204U",
              price: 59900,
            },
            {
              brand: "슈펜키즈",
              name: "키즈 피셔맨 말랑 젤리샌들 HPKV1D204U",
              price: 59900,
            },
            {
              brand: "슈펜키즈",
              name: "키즈 피셔맨 말랑 젤리샌들 HPKV1D204U",
              price: 59900,
            },
          ],
        };
    }, 
    methods: {
      setNum() {
          num+=1;
          return num;
        }
    }
});
