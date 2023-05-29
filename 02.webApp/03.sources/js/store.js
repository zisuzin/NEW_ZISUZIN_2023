// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js
import {nbData, tgData} from "./sub.js";

const store = new Vuex.Store({
  state: {
    tgData: tgData,
    nbData: nbData,
    // lnb데이터 셋업
    lnbData: {
      women: {
        shoes: {
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
        },
        bag: {
          // 중분류 - 가방
          bagpack: {
            size: ["FREE(one-size)", ""],
            color: ["#000", "#CCA63D", "#227428", "#fff", "#A6A6A6", "#FFB2D9"],
            priceList: ["1만9천원 이하", "2만1천원 이하", "2만6천원 이하", "3만원 이하"],
          },
        },
        ac: {
          // 중분류 - 잡화
          socks: {
            size: ["FREE(one-size)", "M", "S"],
            color: ["#000", "#fff", "#CCA63D", "#FFB2D9", "#227428", "#FFE400", "#78247C", "linear-gradient(red, orange, yellow,green, blue, indigo, violet"],
            priceList: ["1만9천원 이하", "2만1천원 이하", "2만6천원 이하", "3만원 이하"],
          },
        },
      },
      men: {
        shoes: {
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
    menu: {},
    menu2: [],
    setcat: {},
    setcat2: [],
    cat1:"",
    cat2:"",
    cat3:"",

  }, // state 객체
  mutations: {
    // 카테고리 페이지 타이틀 및 lnb 변경
    ChgMenu(dt, pm) {
      // pm - Get방식으로 넘어온 파라미터값
        dt.cat1 = pm.cat1;
        dt.cat2 = pm.cat2;
        dt.cat3 = pm.cat3;

        dt.menu = dt.tgData[pm.cat1] /* 대분류 접근 */
        dt.menu2 = dt.tgData[pm.cat1][pm.cat2] /* 중분류 접근 */
        dt.menu3 = dt.tgData[pm.cat1][pm.cat2][pm.cat3] /* 소분류 접근 */
        dt.prodCount = dt.menu3 ? dt.menu3.length : 0; /* 소분류데이터 길이값 출력 */
        // all 클릭시 전체 아이템 반환
        if(dt.cat3 === 'all') {
          // 중분류 객체 데이터 합치기
          let tempData = Object.keys(tgData[dt.cat1][dt.cat2]).map(item => tgData[dt.cat1][dt.cat2][item]);
          // 합친 객체데이터의 배열 데이터 합치기
          let combinedData = [].concat(...tempData);
          // all 클릭시 배열의 길이값 출력
          dt.prodCount = combinedData.length;
        }
    }, // ChgMenu 함수
  },
});

export default store;