import matchData1 from "./tempData/prodData.js"

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        newData: { // NEW 상품 데이터
            전체 : {
                sNum: 60,
                cat: "ALL",
                item: matchData1,
            },
            여성: {
                sNum: 20,
                cat: "WOMEN",
                item: matchData1,
            },
            남성: {
                sNum: 20, 
                cat: "MEN",
                item: matchData1,
            },
            아동: {
                sNum: 20, 
                cat: "KIDS",
                item: matchData1,
            },
        },
        bestData: { // BEST 상품 데이터
            전체 : {
                sNum: 60,
                cat: "ALL",
                // item: matchData2,
            },
            여성: {
                sNum: 20,
                cat: "WOMEN",
                // item: matchData2,
            },
            남성: {
                sNum: 20, 
                cat: "MEN",
                // item: matchData2,
            },
            아동: {
                sNum: 20, 
                cat: "KIDS",
                // item: matchData2,
            },
        },
        // 공통처리 메뉴 변수
        sNum: 20,
        cat: "ALL",
    },
    // mutations:{
    //     chgData(data,pram){ // data - state데이터, pram - 전달값 
    //         // 1. 해당 카테고리 개수 업데이트
    //         data.sNum = data.NEW[pram].sNum;
    //         // 2. 해당 카테고리 메뉴 업데이트
    //         data.cat = data.NEW[pram].cat;
    //     }
    // },
})

export default store;