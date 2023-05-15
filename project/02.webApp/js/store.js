import { womenData, menData, kidsData, tgData } from "./tempData/prodData.js";

const store = new Vuex.Store({
  state: {
    // tg서브메뉴 제품정보 객체
    tgData:tgData,

    // 서브데이터 셋업
    newData: {
      // NEW 상품 데이터
      전체: {
        sNum: 60,
        cat: "ALL",
        item: womenData,
        showmore: true,
      },
      여성: {
        sNum: 20,
        cat: "WOMEN",
        item: womenData,
        showmore: false,
      },
      남성: {
        sNum: 20,
        cat: "MEN",
        item: menData,
        showmore: false,
      },
      아동: {
        sNum: 20,
        cat: "KIDS",
        item: kidsData,
        showmore: false,
      },
    },
    // 공통처리 메뉴 변수
    setsNum: "",
    setcat: "",
    item: "",
    showmore: false,
    
    name: "",
    cat1: "",
    cat2: "",
    cat3: "",

    menu:{},
    menu2:[],
  },
  mutations: {
    // tg서브메뉴 상태변경 변수 셋업
    ChgData(state, pram) {
      state.cat1 = pram.cat1;
      state.cat2 = pram.cat2;
      state.cat3 = pram.cat3;
      state.menu = state.tgData[pram.cat1][pram.cat2]; /* 중분류 접근 */
      state.menu2 = state.tgData[pram.cat1][pram.cat2][pram.cat3]; /* 소분류 접근 */
      console.log(store.state.cat3)
    },
  },
}); // 뷰엑스 인스턴스 //

export default store;
