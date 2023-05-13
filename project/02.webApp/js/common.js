import comData from "./tempData/commonData.js"

// 상단영역 뷰 컴포넌트
Vue.component("top-area",{
    template: comData.topArea,
    // data(){
    //     return {
    //         menus: [
    //             {id:1, page: 'sub_new.html'},
    //             {id:2, page: 'sub_best.html'}
    //         ]
    //     }
    // },
    // methods:{
    //     gotoPage(page){
    //         window.location.href = `${page}`;
    //     }
    // }
});

// 하단영역 뷰 컴포넌트
Vue.component("info-area",{
    template: comData.infoArea,
});


// 라우터 템플릿 만들기
const New = {
    template: `
    <div id="cont_wrap">
    <!-- A. 상단영역 -->
    <header id="header">
      <top-area></top-area>
    </header>
    <!-- B. 메인영역 -->
    <main id="cont">
      <aside class="recent-view-prod-bx">
        <div class="recent-view-item-prod-wrap">
          <h2>최근본상품</h2>
          <div class="recent-view-prod-list">
            <ul>
              <li>
                <img src="./00.data/02.imgData/2212672944_0000001.jpg" alt="최근본상품 이미지" />
                <button type="button" class="delete-item"></button>
              </li>
              <li>
                <img src="./00.data/02.imgData/2212672944_0000001.jpg" alt="최근본상품 이미지" />
                <button type="button" class="delete-item"></button>
              </li>
              <li>
                <img src="./00.data/02.imgData/2212672944_0000001.jpg" alt="최근본상품 이미지" />
                <button type="button" class="delete-item"></button>
              </li>
              <li>
                <img src="./00.data/02.imgData/2212672944_0000001.jpg" alt="최근본상품 이미지" />
                <button type="button" class="delete-item"></button>
              </li>
            </ul>
          </div>
          <div class="recent-view-prod-pager">
            <button type="button" class="prod-pager prev"></button>
            <span class="pager-number">
              <span class="current-page-num">1</span>
              /
              <span class="total-page-num"></span>
            </span>
            <button type="button" class="prod-pager next"></button>
          </div>
        </div>
      </aside>
      <section class="new_container">
        <div class="new_inner">
          <h2 v-html="subTit[0]"></h2>
          <div class="new-prod-container">
            <!-- new 아이템 탭메뉴 -->
            <stab-comp></stab-comp>
            <!-- new 아이템 리스트 -->
            <div class="new-prod-cont">
              <list-comp></list-comp>
            </div>
            <!-- 더보기 버튼 -->
            <button v-if="$store.state.newData['전체'].showmore" type="button" class="showmore_btn">더보기</button>
          </div>
        </div>
      </section>
      <aside class="scrollTop-btn-wrap">
        <div class="scrollTop">
          <i></i>
        </div>
      </aside>
    </main>
    <!-- C. 하단영역 -->
    <footer id="info">
      <info-area></info-area>
      <p class="f-copyright">COPYRIGHT © WONDERPLACE ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
    `
}

const router = new VueRouter({
    // 라우팅 설정
    routes: [
        // 라우트 경로와 컴포넌트 매핑
        // 첫번째 루트
        {
            path: "/new",
            component: New,
        }
    ]
});

const makeVue = x => new Vue({el:x});
makeVue("#info");

new Vue({
    el: "#cont_wrap",
    router, // 라우터 등록
})

