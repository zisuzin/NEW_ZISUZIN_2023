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
  props:['inum'],
  data() {
    // 할인률 계산 - ((정가 - 할인가) / 정가) * 100
    const oprice = parseInt(matchData1[this.inum].oprice);
    const dprice = parseInt(matchData1[this.inum].dprice);
    let sale = '';
    if(!isNaN(oprice) && !isNaN(dprice) && oprice) {
      let saleRate = Math.floor(((oprice - dprice) / oprice) * 100); 
        sale = `${saleRate}%`;
    }
    return {
      // 제품 정보 업데이트
      pname: matchData1[this.inum].name,
      // pimg: `./00.data/02.imgData/new/KIDS/item_${this.inum+1}.jpg`,
      pimg: "'./00.data/02.imgData/'+$store.state.npData[idx]+'/KIDS/item_'+ v +'.jpg'",
      
      poprice: this.insComma(matchData1[this.inum].oprice),
      pdprice: this.insComma(matchData1[this.inum].dprice),
      psale: sale,
    }
  },
    methods:{
      // 정규식함수(숫자 세자리마다 콤마해주는 기능)
      insComma(x) {
        return x.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
});
// new Vue({
//     el: ".new_container",
//     store, // 뷰엑스 스토어 등록
//     data: {
//       matchData1: matchData1,
//       subTit: ["NEW","BEST"],
//     }, 
//     components: {
//       "list-comp":{
//           template: `
//             <li>
//               <div class="new-prod-bx">
//                   <a href="#">
//                       <div class="prod-img">
//                           <img v-bind:src="this.pimg" alt="상품이미지">
//                       </div>
//                       <div class="prod-txt">
//                           <strong class="brand">슈펜</strong>
//                           <p>{{this.pname}}</p>
//                       </div>
//                   </a>
//               </div>
//               <div class="item-detail">
//                   <span class="original-price">
//                       <em>{{this.poprice}}</em>
//                       <span v-if="this.poprice">원</span>
//                   </span>
//                   <br>
//                   <span class="discount-price">
//                       <em>{{this.pdprice}}</em>
//                       <span v-if="this.pdprice">원</span>
//                   </span>
//                   <span class="percent-price" v-if="this.psale">
//                       <em>{{this.psale}}</em>
//                   </span>
//               </div>
//             </li>
//           `,
//           props:['inum'],
//           data() {
//             const oprice = parseInt(matchData1[this.inum].oprice);
//             const dprice = parseInt(matchData1[this.inum].dprice);
//             let sale = '';
//             if(!isNaN(oprice) && !isNaN(dprice) && oprice) {
//               let saleRate = Math.floor(((oprice - dprice) / oprice) * 100); 
//                 sale = `${saleRate}%`;
//             }
//             return {
//               pname: matchData1[this.inum].name,
//               // pimg: `./00.data/02.imgData/new_sc_comp/item_${this.inum+1}.jpg`,
//               pimg: "./00.data/02.imgData/new/KIDS/item_1.jpg",
//               poprice: this.insComma(matchData1[this.inum].oprice),
//               pdprice: this.insComma(matchData1[this.inum].dprice),
//               psale: sale,
//             }
//           },
//           methods:{
//             //정규식함수(숫자 세자리마다 콤마해주는 기능)
//             insComma(x) {
//               return x.toString()
//               .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//             }
//           }
//         }, // list-comp 컴포넌트 셋팅
//       }, // components 구역 
//     }); // Vue 객체 

new Vue({
  el: ".new_container",
  data: {
    matchData1: matchData1,
    subTit: ["NEW","BEST"],
  }, 
})