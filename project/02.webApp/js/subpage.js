import sdata from "./tempData/sub-comp.js";
import matchData from "./tempData/subData.js";

// ##### 컴포넌트 등록 #### 
// 2. 메인영역
// 메인영역1 메뉴 뷰 템플릿 셋팅
Vue.component("stab-comp", {
    name: "stab-comp",
    template: `
      <div class="new-prod-tab">
      <ul>
          <li>
              <a href="#">ALL</a>
          </li>
          <li>
              <a href="#">WOMAN</a>
          </li>
          <li>
              <a href="#">MAN</a>
          </li>
          <li>
              <a href="#">KIDS</a>
          </li>
      </ul>
</div>
    `,
});

// 메인영역2 상품리스트 뷰 템플릿 셋팅
new Vue({
    el: ".new_container",
    data: {
      matchData: matchData,
    }, 
    components: {
      "list-comp":{
          template: `
            <li>
              <div class="new-prod-bx">
                  <a href="#">
                      <div class="prod-img">
                          <img v-bind:src="this.pimg" alt="상품이미지">
                      </div>
                      <div class="prod-txt">
                          <strong class="brand">슈펜키즈</strong>
                          <p>{{this.pname}}</p>
                      </div>
                  </a>
              </div>
              <div class="item-detail">
                  <span class="original-price">
                      <em>{{this.poprice}}</em>
                      <span v-if="this.poprice">원</span>
                  </span>
                  <br>
                  <span class="discount-price">
                      <em>{{this.pdprice}}</em>
                      <span v-if="this.pdprice">원</span>
                  </span>
                  <span class="percent-price">
                      <em>{{this.psale}}</em>
                  </span>
              </div>
            </li>
          `,
          props:['inum'],
          data() {
            return {
              pname: matchData[this.inum].name,
              pimg: `./00.data/02.imgData/new_sc_comp/item_${this.inum+1}.jpg`,
              poprice: this.insComma(matchData[this.inum].oprice),
              pdprice: this.insComma(matchData[this.inum].dprice),
              psale: matchData[this.inum].sale,
            }
          },
          methods:{
            //정규식함수(숫자 세자리마다 콤마해주는 기능)
            insComma(x) {
              return x.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          }
        }, // list-comp 컴포넌트 셋팅
      }, // components 구역 
    }); // Vue 객체 