const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        npData: { // NEW 상품 데이터
            ALL: {
                sNum: 60,
                cat: "ALL",
            },
            NEW: {
                // 리스트개수
                sNum: 60,
                cat: "ALL",
            },
            BEST: {
                // 리스트개수
                sNum: 20,
                cat: "WOMEN",
            },
            WOMEN: {
                // 리스트개수
                sNum: 20,
                cat: "MEN",
            },
            MEN: {
                // 리스트개수
                sNum: 20, 
                cat: "KIDS",
            },
            KIDS: {
                // 리스트개수
                sNum: 20, 
                cat: "KIDS",
            },
        },
        bpData: { // BEST 상품 데이터
            ALL: {
                sNum: 60,
                cat: "ALL",
            },
            WOMEN: {
                sNum: 60,
                cat: "ALL",
            },
            MEN: {
                sNum: 60,
                cat: "ALL",
            },
            KIDS: {
                sNum: 60,
                cat: "ALL",
            },
        },
        // 공통처리 메뉴 변수
        sNum: 20,
        cat: "ALL",
    },
    mutations:{
        chgData(data,pram){ // data - state데이터, pram - 전달값 
            // 1. 해당 카테고리 개수 업데이트
            console.log(data)
        }
    },
})

export default store;