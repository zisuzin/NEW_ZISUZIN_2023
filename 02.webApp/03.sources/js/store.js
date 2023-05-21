// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js
const store = new Vuex.Store({
    state: {
        // lnb데이터 셋업
        lnbData: {
            "women": {
                title: "여성",
                item: {
                    // 중분류 - 신발
                    // 사이즈는 신발만 있음
                    flat: {
                        size: [225,230,240,245,250,255],
                        color: ["#000","#fff","#0054FF","#FFB2D9","#FFE400","#CCA63D","#542E00","#123478","#A6A6A6","#227428","#78247C"],
                        priceList: ["2만6천원 이하","3만원 이하","3만5천원 이하",""],
                    },
                    sandal: {
                        size: [225,230,235,240,245,250],
                        color: ["#000","#fff","#CCA63D","#542E00","#78247C","#FFE400","#0054FF","#227428","#A6A6A6","#123478","#FFB2D9"],
                        priceList: ["1만9천원 이하","2만1천원 이하","2만6천원 이하","3만원 이하"],
                    },
                    // 중분류 - 가방
                    backpack: {
                        size: FREE(one-size),
                        color: ["#000","#CCA63D","#227428","#fff","#A6A6A6","#FFB2D9"],
                        priceList: ["1만9천원 이하","2만1천원 이하","2만6천원 이하","3만원 이하"],
                    },
                    // 중분류 - 잡화 
                    socks: {
                        size: [FREE(one-size),M,S], 
                        color: ["#000","#fff","#CCA63D","#FFB2D9","#227428","#FFE400","#78247C","linear-gradient(red, orange, yellow,green, blue, indigo, violet"],
                        priceList: ["1만9천원 이하","2만1천원 이하","2만6천원 이하","3만원 이하"],
                    }
                },
                
            },
            "men": {
                title: "남성"
            },
            "kids": {
                title: "아동"
            },
            "new": {
                title: "신상"
            },
            "best": {
                title: "베스트"
            },

            // 공통처리 메뉴 변수
            title: "",

        } // lnb 데이터객체
    }, // state 객체
    mutations: {
        // 카테고리 페이지 lnb 변경
        ChgMenu(dt,pm) {
            dt.title = dt.lnbData[pm].title
        }
    }
})