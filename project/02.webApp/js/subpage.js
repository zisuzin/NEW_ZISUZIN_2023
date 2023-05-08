import sdata from "./tempData/sub-comp.js";
import matchDetail from "./tempData/subData.js";

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
    props: ["matchDetail"],
    data: function () {
      return {
        isrc:`<img src="./00.data/02.imgData/new_sc_comp/item_${this.setNum()}.jpg"> `,
        pname: this.matchDetail.name,
        pprice: this.matchDetail.price,
        prate: this.matchDetail.saleRate,
      }
    },
    methods : {
      setNum() {
        num+=1;
        return num;
      }
    }
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
    data: {
        matchDetail: matchDetail
    }, 
      methods: {
        setNum() {
          num+=1;
          return num;
        }
      }
});

