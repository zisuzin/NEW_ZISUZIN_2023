// import sdata from "./tempData/sub-comp.js";
import matchData from "./tempData/subData.js";

// ##### 컴포넌트 등록 #### 
// 2. 메인영역
// 메인영역1 메뉴 뷰 템플릿 셋팅
// Vue.component("stab-comp", {
//     name: "stab-comp",
//     template: sdata.new_best_tab,
// });
let num= -1;

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
                  </span>
                  <br>
                  <span class="discount-price">
                      <em>{{this.pdprice}}</em>
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
              poprice: matchData[this.inum].oprice,
              pdprice: matchData[this.inum].dprice,
              psale: matchData[this.inum].sale,
            }
          },
        },
      },
    });
    
    
// Vue.component("list-comp", {
//   template: `
//       <li>
//         <div class="new-prod-bx">
//             <a href="#">
//                 <div class="prod-img">
//                     <img v-bind:src="matchData.img" alt="상품이미지">
//                 </div>
//                 <div class="prod-txt">
//                     <strong class="brand">슈펜키즈</strong>
//                     <p>{{pname}}</p>
//                 </div>
//             </a>
//         </div>
//         <div class="item-detail">
//             <span class="original-price">
//                 <em>{{poprice}}</em>
//                 <span>원</span>
//             </span>
//             <br>
//             <span class="discount-price">
//                 <em>{{pdprice}}</em>
//                 <span>원</span>
//             </span>
//             <span class="percent-price">
//                 <em>{{psale}}</em>
//                 <span>%</span>
//             </span>
//         </div>
//     </li>
//     `,
//     // props: ["matchItem"],
//     data: function() {
//       return {
//         pname: matchData.name,
//         pimg: `./00.data/02.imgData/new_sc_comp/${matchData.img}.jpg" alt="상품이미지"`,
//         poprice: matchData.oprice,
//         pdprice: matchData.dprice,
//         psale: matchData.sale,
//       }
//     },
    
// });

// new Vue({
//     el: ".new_container",
//     data: {
//       matchData: matchData,
//     }, 
//     data:{},
//     mounted: function() {}
// });

