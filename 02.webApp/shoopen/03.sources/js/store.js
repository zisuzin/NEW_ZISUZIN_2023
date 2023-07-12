// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js

const store = new Vuex.Store({
  // (1) 데이터 셋팅구역:
  state: {
    // gnb 데이터셋업
    gnb: {
      women: {
        maintit: "WOMEN",
        subtit: ["신상", "베스트", "여성신발", "여성가방", "여성잡화"],
        dpt1: ["플랫슈즈", "샌들"],
        dpt2: ["백팩", "미니백"],
        dpt3: ["양말", "모자"],
      },
      men: {
        maintit: "MEN",
        subtit: ["신상", "베스트", "남성신발", "남성가방", "남성잡화"],
        dpt1: ["스니커즈", "슬리퍼"],
        dpt2: ["맨즈백", "크로스백"],
        dpt3: ["벨트", "모자"],
      },
      kids: {
        maintit: "KIDS",
        subtit: ["신상", "베스트", "아동신발", "아동가방", "아동잡화"],
        dpt1: ["구두", "샌들"],
        dpt2: ["슬리퍼가방", "패션가방"],
        dpt3: ["양말", "모자"],
      },
    }, ////// gnb //////

    //////////////////////////////

    // dpt박스 변수
    setsubtit: "",
    setdpt1: "",
    setdpt2: "",
    setdpt3: "",

  }, ////// state 구역 /////

  // (2) 데이터 변경 메서드구역:
  mutastions: {}, ////// mutastions 구역 /////
}); ///////////// 뷰엑스 인스턴스 /////////////

export default store;
