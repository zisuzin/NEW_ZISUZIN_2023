// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js
const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        lnbData: {
            "women": {
                title: "여성",
                item: {
                    // 중분류 - 신발
                    flat: {
                        size: [225,230,240,245,250,255],
                        color: ["#000","#fff","#0054FF","#FFB2D9","#FFE400","#CCA63D","#542E00","#123478","#A6A6A6","#227428","#78247C"],
                        priceList: ["2만6천원 이하","3만원 이하","3만5천원 이하"],
                    },
                    sandal: {
                        size: [225,230,235,240,245,250],
                        color: ["#000","#fff","#CCA63D","#542E00","#78247C","#CCA63D","#542E00","#123478","#A6A6A6","#227428","#78247C"],
                        priceList: ["2만6천원 이하","3만원 이하","3만5천원 이하"],
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
            }
        }
    }
})