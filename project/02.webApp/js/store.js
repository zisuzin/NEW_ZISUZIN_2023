const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        npData: { // NEW 상품 데이터
            전체: {
                // 리스트개수
                sNum: 60,
                cat: "ALL",
            },
            여성: {
                // 리스트개수
                sNum: 20,
                cat: "WOMEN",
            },
            남성: {
                // 리스트개수
                sNum: 20,
                cat: "MEN",
            },
            아동: {
                // 리스트개수
                sNum: 20, 
                cat: "KIDS",
            },
        },
        // bpData: { // BEST 상품 데이터
        //     ALL: {

        //     },
        //     WOMEN: {

        //     },
        //     MEN: {

        //     },
        //     KIDS: {

        //     },
        // },
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
    // 공통처리 메뉴 변수
    sNum: 20,
})

export default store;