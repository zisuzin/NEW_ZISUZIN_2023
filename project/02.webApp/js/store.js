import {womenData, menData , kidsData} from "./tempData/prodData.js"

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        newData: { // NEW 상품 데이터
            전체 : {
                sNum: 60,
                cat: "ALL",
                item: womenData,
            },
            여성: {
                sNum: 20,
                cat: "WOMEN",
                item: womenData,
            },
            남성: {
                sNum: 20, 
                cat: "MEN",
                item: menData,
            },
            아동: {
                sNum: 20, 
                cat: "KIDS",
                item: kidsData,
            },
        },
        // bestData: { // BEST 상품 데이터
        //     전체 : {
        //         sNum: 60,
        //         cat: "ALL",
        //         // item: matchData2,
        //     },
        //     여성: {
        //         sNum: 20,
        //         cat: "WOMEN",
        //         // item: matchData2,
        //     },
        //     남성: {
        //         sNum: 20, 
        //         cat: "MEN",
        //         // item: matchData2,
        //     },
        //     아동: {
        //         sNum: 20, 
        //         cat: "KIDS",
        //         // item: matchData2,
        //     },
        // },
        // 공통처리 메뉴 변수
        setsNum: "",
        setcat: "",
        setitem:"",
    },
    mutations:{
        newChgData(state,pram){ // state - state데이터, pram - 전달값 
            // 해당 카테고리 개수 업데이트
            state.sNum = state.newData[pram].sNum;
            // 해당 카테고리 이름 업데이트
            state.cat = state.newData[pram].cat;
            // 해당 카테고리 제품리스트 업데이트
            state.item = state.newData[pram].item;
            state.setcat = pram;
        }
    }
})

export default store;