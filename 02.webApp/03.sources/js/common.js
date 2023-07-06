// 스토어 불러오기
import store from "./store.js";
// 페이지 데이터
// 더미 데이터들
// 디테일 더미 데이터

/***************************************************** 
    뷰 컴포넌트로 데이터 셋업하기
*****************************************************/
// [1] 뷰컴포넌트 - 카테고리
Vue.component("category-comp", {
  template: `
    <ul class="catbx">
      <li v-for="(v,i) in $store.state.gnb" :key="i">
        <a href="#" v-on:click="chgData(i)">{{v['maintit']}}</a>
      </li>
      <sub-comp></sub-comp>
    </ul>
  `,
  methods: {
    // v-on 클릭시 gnb sub-comp 데이터 변경 발생
    chgData(parm) {
      // gnb에서 파라미터 받아오기
      store.state.lnbsrc = parm;

      // [ 업데이트!! ]
      // thumb박스
      store.state.setimgsrc = store.state.gnb[parm].imgsrc;
      store.state.setimgtit = store.state.gnb[parm].imgtit;
      store.state.setdesc = store.state.gnb[parm].desc;

      // dpt박스
      store.state.setsubtit1 = store.state.gnb[parm].subtit[0];
      store.state.setsubtit2 = store.state.gnb[parm].subtit[1];
      store.state.setsubtit3 = store.state.gnb[parm].subtit[2];
      store.state.setdpt1 = store.state.gnb[parm].dpt1;
      store.state.setdpt2 = store.state.gnb[parm].dpt2;
      store.state.setdpt3 = store.state.gnb[parm].dpt3;
    },
  },
}); //////////////////// Vue 컴포넌트 ///////////////////////

// [1-2] 뷰컴포넌트 - 카테고리 서브영역
Vue.component("sub-comp", {
  template: `
    <div class="subbx">
      <div class="thumb">
        <img v-bind:src="$store.state.setimgsrc" alt="썸네일">
        <h5 v-text="$store.state.setimgtit"></h5>
        <span v-text="$store.state.setdesc"></span>
      </div>
      <dl class="sub">
        <dt class="all"><a href="#" v-text="$store.state.setsubtit1"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt1" :key="n"><a href="#">{{v}}</a></dd>
      </dl>
      <dl class="sub">
        <dt><a href="#" v-text="$store.state.setsubtit2"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt2" :key="n"><a href="#">{{v}}</a></dd>
      </dl>
      <dl class="sub">
        <dt><a href="#" v-text="$store.state.setsubtit3"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt3" :key="n"><a href="#">{{v}}</a></dd>
      </dl>
    </div>
  `,
});

/********************************************* 
    뷰인스턴스 생성영역
*********************************************/

// [1] 뷰인스턴스 - 헤더
new Vue({
  el: "#top",
  store,
});
