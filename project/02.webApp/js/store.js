import { nbData, tgData } from "./tempData/prodData.js";


let pm = location.href.split("/");
pm = pm[pm.length-1].split("=")[1];
// pm에 값이 할당이 되어있다면 undefined가 아니므로 true
console.log(pm)

const store = new Vuex.Store({
  state: {
    // tg서브메뉴 제품정보 객체
    tgData:tgData,
     // 서브데이터 셋업 (new/best)
     newData: {
      전체: {
        sNum: 60,
        cat: "ALL",
        item: nbData.new.allData,
      },
      여성: {
        sNum: 20,
        cat: "WOMEN",
        item: nbData.new.womenData,
      },
      남성: {
        sNum: 20,
        cat: "MEN",
        item: nbData.new.menData,
      },
      아동: {
        sNum: 20,
        cat: "KIDS",
        item: nbData.new.kidsData,
      },
    },
    
    // 서브데이터 셋업 (new/best)
    bestData: {
      전체: {
        sNum: 60,
        cat: "ALL",
        item: [...nbData.best.womenData,...nbData.best.menData,...nbData.best.kidsData],
      },
      여성: {
        sNum: 20,
        cat: "WOMEN",
        item: nbData.best.womenData,
      },
      남성: {
        sNum: 20,
        cat: "MEN",
        item: nbData.best.menData,
      },
      아동: {
        sNum: 20,
        cat: "KIDS",
        item: nbData.best.kidsData,
      },
    },

    // 공통처리 메뉴 변수
    setsNum: "",
    setcat: "",
    item: "",
    
    name: "",
    cat1: "",
    cat2: "",
    cat3: "",
    cat4:"",

    wdata: "",
    mdata: "",
    kdata: "",

    menu:{},
    menu2:[],
    menusum:[],
    sortmenu:[],
    // 더보기버튼 상태변수
    mbsts:true,
    // 더보기배수 변수
    mnum: 0,

    tgtit: pm.toUpperCase(),
    
  },
  mutations: {
    // tg서브메뉴 상태변경 변수 셋업
    ChgData(state, pram) {
      state.cat1 = pram.cat1;
      state.cat2 = pram.cat2;
      state.cat3 = pram.cat3;
      state.cat4 = pram.cat4;

      state.menu = state.tgData[pram.cat1][pram.cat2]; /* 중분류 접근 */
      state.menu2 = state.tgData[pram.cat1][pram.cat2][pram.cat3]; /* 소분류 접근 */
      state.prodCount = state.menu2 ? state.menu2.length : 0; /* 소분류데이터 길이값 출력 */
    },
    newChgData(state,pram){ // state - state데이터, pram - 전달값 
      // 해당 카테고리 이름 업데이트
      state.cat = state.newData[pram].cat;
      // 해당 카테고리 제품리스트 업데이트
      state.item = state.newData[pram].item;
      state.setcat = pram;

      state.tgData = state.tgData.pram;

      // MORE 버튼 보이기/숨기기
      if(pram=="전체") state.mbsts = true;
      else state.mbsts = false;
  },
  // 페이지이동 호출함수
  nbChg(state, pram){
    if(pram==="WOMEN" || pram==="MEN" || pram==="KIDS")
      location.href = "sub_tg.html?cat="+pram;
    else if(pram==="NEW")
      location.href = "sub_new.html?cat="+pram;
    else {
      location.href = "sub_best.html?cat="+pram;
    }

   

  },
  // MORE 버튼 클릭시 이미지 증가 함수
  updateList(dt,pm){
    dt.mnum += pm;
    // console.log(dt.mnum+20);
    if(dt.mnum > 45)
      dt.mbsts = false;
  }, // updateList //

  // 상품평순 정렬 함수
  sortFn(st,pr) {
    st.arr = st.tgData[pr.cat1][pr.cat2][pr.cat3];
    let temp = st.arr;
    temp.sort(function(a,b){
      return b.review - a.review
    })
    store.commit('ChgData', pr)
  }, 

  // 높은가격순 정렬 함수
  sortFn1(st,pr) {
    st.arr = st.tgData[pr.cat1][pr.cat2][pr.cat3];
    let temp = st.arr;
    temp.sort(function(a,b){
      return b.dprice - a.dprice
    })
    store.commit('ChgData', pr)
  },  

  // 낮은가격순 정렬 함수
  sortFn2(st,pr) {
    st.arr = st.tgData[pr.cat1][pr.cat2][pr.cat3];
    let temp = st.arr;
    temp.sort(function(a,b){
      return a.dprice - b.dprice
    })
    store.commit('ChgData', pr)
  },  

  // 할인률높은순 정렬 함수
  sortFn3(st,pr) {
    st.arr = st.tgData[pr.cat1][pr.cat2][pr.cat3];
    let temp = st.arr;
    temp.sort(function(a,b){
      return b.sale - a.sale
    })
    store.commit('ChgData', pr)
  }  
  }, // mutation // 
}); // 뷰엑스 인스턴스 //


export default store;