// const msubdata = {
//     // 상품 카테고리 선택 Tab메뉴
//     sideTab: `
//         <aside class="cat_left_side_tab">
//             <h2 class="tit_h2">WOMEN</h2>
//             <div class="ctg_link">
//             <ul>
//                 <li>
//                 <a href="#">신상
//                     <em>NEW</em>
//                 </a>
//                 </li>
//                 <li>
//                 <a href="#">베스트
//                     <em>BEST</em>
//                 </a>
//                 </li>
//             </ul>
//             </div>
//             <div class="ctg_nav">
//             <ul>
//                 <li class="ctg_depth1">
//                 <div>
//                     <a href="#">
//                     <span>여성신발</span>
//                     </a>
//                 </div>
//                 <div class="ctg_depth2">
//                     <ul>
//                     <li>
//                         <a href="#">전체</a>
//                     </li>
//                     <li>
//                         <a href="#">플랫/단화</a>
//                     </li>
//                     <li>
//                         <a href="#">샌들</a>
//                     </li>
//                     <li>
//                         <a href="#">스니커즈/운동화</a>
//                     </li>
//                     </ul>
//                 </div>
//                 </li>
//                 <li class="ctg_depth1">
//                 <div>
//                     <a href="#">
//                     <span>여성가방</span>
//                     </a>
//                 </div>
//                 <div class="ctg_depth2">
//                     <ul>
//                     <li>
//                         <a href="#">전체</a>
//                     </li>
//                     <li>
//                         <a href="#">백팩</a>
//                     </li>
//                     <li>
//                         <a href="#">미니백</a>
//                     </li>
//                     <li>
//                         <a href="#">크로스백</a>
//                     </li>
//                     </ul>
//                 </div>
//                 </li>
//                 <li class="ctg_depth1">
//                 <div>
//                     <a href="#">
//                     <span>여성잡화</span>
//                     </a>
//                 </div>
//                 <div class="ctg_depth2">
//                     <ul>
//                     <li>
//                         <a href="#">전체</a>
//                     </li>
//                     <li>
//                         <a href="#">양말</a>
//                     </li>
//                     <li>
//                         <a href="#">모자</a>
//                     </li>
//                     <li>
//                         <a href="#">머플러/장갑</a>
//                     </li>
//                     </ul>
//                 </div>
//                 </li>
//             </ul>
//             </div>
//         </aside>
//     `,

//     // 상품 정보 리스트(NEW)
//     tg_prodList: `
//         <ul>
//             <li v-for="(value,name) in $store.state.newData[$store.state.setcat].item" :key="name">
//                 <div>
//                     <div class="new-prod-bx">
//                         <a href="#">
//                             <div class="prod-img">
//                                 <img v-bind:src="'./00.data/02.imgData/new/'+ $store.state.cat + '/' + value.img + '.jpg'" alt="상품이미지">
//                             </div>
//                             <div class="prod-txt">
//                                 <strong class="brand">슈펜</strong>
//                                 <p>{{value.name}}</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="item-detail">
//                         <span class="original-price">
//                             <em>{{numberWithCommas(value.oprice)}}</em>
//                             <span v-if="value.oprice">원</span>
//                         </span>
//                         <br>
//                         <span class="discount-price">
//                             <em>{{numberWithCommas(value.dprice)}}</em>
//                             <span v-if="value.dprice">원</span>
//                         </span>
//                         <span class="percent-price" v-if="value.oprice && value.dprice">
//                             <em>{{calculateDiscount(value.oprice, value.dprice)}}</em>
//                         </span>
//                     </div>
//                 </div>
//             </li>
//         </ul>
//     `,
// }

// export default msubdata;