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
      // [ 업데이트!! ]
      // dpt박스
      store.state.setsubtit1 = store.state.gnb[parm].subtit[0];
      store.state.setsubtit2 = store.state.gnb[parm].subtit[1];
      store.state.setsubtit3 = store.state.gnb[parm].subtit[2];
      store.state.setsubtit4 = store.state.gnb[parm].subtit[3];
      store.state.setsubtit5 = store.state.gnb[parm].subtit[4];
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
      <div class="all">
        <a href="#" v-text="$store.state.setsubtit1"></a>
        <a href="#" v-text="$store.state.setsubtit2"></a>
      </div>
      <dl class="sub">
        <dt class="all"><a href="#" v-text="$store.state.setsubtit3"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt1" :key="n"><a href="#">{{v}}</a></dd>
      </dl>
      <dl class="sub">
        <dt><a href="#" v-text="$store.state.setsubtit4"></a></dt>
        <dd v-for="(v,n) in $store.state.setdpt2" :key="n"><a href="#">{{v}}</a></dd>
      </dl>
      <dl class="sub">
        <dt><a href="#" v-text="$store.state.setsubtit5"></a></dt>
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
  mounted() {
    // 클릭시 li에 클래스 on
    $(".catbx li > a").click(function (e) {
      $(this).parent().addClass("on").siblings().removeClass("on");
      $(".top").addClass("on");
      $(".subbx").fadeIn(400);

      // // .top에 클래스 on 추가시 그린 로고로 변경!
      // if($(".top").hasClass("on")){
      //   $(".logo img").attr("src","./images/m_logo_g.png")
      // }
    }); ///////// click ////////////

    // 마우스아웃시 전체 클래스 빼기
    $("nav").mouseleave(function () {
      $(".top").removeClass("on");
      $(".catbx li").removeClass("on");
      $(".subbx").fadeOut(100);

      // .top에 클래스 on 빠졌을시 화이트 로고로 변경!
      if ($(".top").removeClass("on")) {
        $(".logo img").attr("src", "./images/logo_shoopen.png");
      }
    }); ///////// mouseleave //////////

    // 스크롤 이벤트
    // $(window).on("scroll",function(){
    //   // 스크롤시작!
    //   let scStart = $(window).scrollTop();
    //   console.log(scStart)
    // });
  }, ////////// mounted ///////////
});
