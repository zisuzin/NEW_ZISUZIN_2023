// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js
import tgData from "./sub.js";

const store = new Vuex.Store({
  state: {
    tgData: tgData,
    // lnb데이터 셋업
    lnbData: {
      women: {
        item: {
          // 중분류 - 신발
          // 사이즈는 신발만 있음
          flat: {
            size: [225, 230, 240, 245, 250, 255],
            color: ["#000", "#fff", "#0054FF", "#FFB2D9", "#FFE400", "#CCA63D", "#542E00", "#123478", "#A6A6A6", "#227428", "#78247C"],
            priceList: ["2만6천원 이하", "3만원 이하", "3만5천원 이하", ""],
          },
          sandal: {
            size: [225, 230, 235, 240, 245, 250],
            color: ["#000", "#fff", "#CCA63D", "#542E00", "#78247C", "#FFE400", "#0054FF", "#227428", "#A6A6A6", "#123478", "#FFB2D9"],
            priceList: ["1만9천원 이하", "2만1천원 이하", "2만6천원 이하", "3만원 이하"],
          },
          // 중분류 - 가방
          bagpack: {
            size: ["FREE(one-size)", ""],
            color: ["#000", "#CCA63D", "#227428", "#fff", "#A6A6A6", "#FFB2D9"],
            priceList: ["1만9천원 이하", "2만1천원 이하", "2만6천원 이하", "3만원 이하"],
          },
          // 중분류 - 잡화
          socks: {
            size: ["FREE(one-size)", "M", "S"],
            color: ["#000", "#fff", "#CCA63D", "#FFB2D9", "#227428", "#FFE400", "#78247C", "linear-gradient(red, orange, yellow,green, blue, indigo, violet"],
            priceList: ["1만9천원 이하", "2만1천원 이하", "2만6천원 이하", "3만원 이하"],
          },
        },
      },
      men: {
        item: {
          // 중분류 - 신발
          // 사이즈는 신발만 있음
          sandal: {
            size: [250, 255, 260, 265, 270, 275, 280],
            color: ["#000", "#fff", "#0054FF", "#FFB2D9", "#FFE400", "#CCA63D", "#542E00", "#123478", "#A6A6A6", "#227428", "#78247C"],
            priceList: ["2만2천원 이하", "3만원 이하", "3만5천원원 이하", "5만원 이하"],
          },
        },
      },
      kids: {},
    }, // lnb 데이터객체

    // 공통처리 메뉴 변수
    title: "",
    lnb: "",
    gender: "",
    name: "",
    img: "",
    oprice: "",
    dprice: "",
    sale: "",
    review: "",
  }, // state 객체
  mutations: {
    // 카테고리 페이지 타이틀 및 lnb 변경
    ChgMenu(dt, pm) {
      // pm - Get방식으로 넘어온 파라미터값
      switch (pm) {
        case "men":
          dt.title = "MEN";
          dt.lnb = ["신상", "베스트", "남성신발", "남성가방", "남성잡화"];
          dt.lnbItem = ["전체", "스니커즈", "샌들"];
          dt.lnbItem2 = ["전체", "백팩", "맨즈백"];
          dt.lnbItem3 = ["전체", "양말", "모자"];
          break;

        case "women":
          dt.title = "WOMEN";
          dt.lnb = ["신상", "베스트", "여성신발", "여성가방", "여성잡화"];
          dt.lnbItem = ["전체", "플랫슈즈", "샌들"];
          dt.lnbItem2 = ["전체", "백팩", "미니백"];
          dt.lnbItem3 = ["전체", "양말", "모자"];
          break;

        case "kids":
          dt.title = "KIDS";
          dt.lnb = ["신상", "베스트", "아동신발", "아동가방", "아동잡화"];
          dt.lnbItem = ["전체", "구두", "샌들"];
          dt.lnbItem2 = ["전체", "패션가방", "실내화가방"];
          dt.lnbItem3 = ["전체", "양말", "모자"];
          break;
        }
    }, // ChgMenu 함수
    // 분류 카테고리별 lnb 클릭 시 해당되는 항목의 상품으로 리스트 변경
    chgNoteList(dt, pm) {
        console.log(pm)
    }
  },
});

export default store;
