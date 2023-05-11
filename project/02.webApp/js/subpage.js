import matchData1 from "./tempData/prodData.js";
import subdata from "./tempData/subData.js";
import store from "./store.js";

// ##### 컴포넌트 등록 #### 
// 2. 메인영역
// 메인영역1 메뉴 뷰 템플릿 셋팅
Vue.component("stab-comp", {
    template: subdata.prodTab,
});

// 메인영역2 상품리스트 뷰 템플릿 셋팅
Vue.component("list-comp", {
  template: subdata.prodList,
});

new Vue({
  el: ".new_container",
  store, // 뷰엑스 스토어 등록
  data: {
    subTit: ["NEW","BEST"],
  }, 
  mounted:function(){}
})