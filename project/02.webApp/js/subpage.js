// import sdata from "./tempData/sub-comp.js";
import matchData from "./tempData/subData.js";

// ##### 컴포넌트 등록 #### 
// 2. 메인영역
// 메인영역1 메뉴 뷰 템플릿 셋팅
// Vue.component("stab-comp", {
//     name: "stab-comp",
//     template: sdata.new_best_tab,
// });

// 메인영역2 상품리스트 뷰 템플릿 셋팅
Vue.component("list-comp", {
  template: `
      <li>
        <div class="new-prod-bx">
            <a href="#">
                <div class="prod-img">
                    <img v-bind:src="pimg" alt="상품이미지">
                </div>
                <div class="prod-txt">
                    <strong class="brand">슈펜키즈</strong>
                    <p>{{pname}}</p>
                </div>
            </a>
        </div>
        <div class="item-detail">
            <span class="original-price">
                <em>{{poprice}}</em>
                <span>원</span>
            </span>
            <br>
            <span class="discount-price">
                <em>{{pdprice}}</em>
                <span>원</span>
            </span>
            <span class="percent-price">
                <em>{{psale}}</em>
                <span>%</span>
            </span>
        </div>
      </li>
    `,
    props: ["matchItem"],
    data: function() {
      return {
        pname: this.matchItem.name,
        pimg: `./00.data/02.imgData/new_sc_comp/${this.matchItem.img}.jpg" alt="상품이미지"`,
        poprice: this.matchItem.oprice,
        pdprice: this.matchItem.dprice,
        psale: this.matchItem.sale,
      }
    },
});

new Vue({
    el: ".new_container",
    data: {
      matchData: matchData,
    }, 
    mounted: function() {}
});

