import {womenData, menData , kidsData} from "./tempData/prodData.js"

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        newData: { // NEW 상품 데이터
            전체 : {
                sNum: 60,
                cat: "ALL",
                item: {...womenData, ...menData, ...kidsData},
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
        tgData: {
            women: {
                shoes: {
                  tit: "여성신발",
                  sub: {
                    flats: "플랫슈즈",
                    sneakers: "스니커즈",
                    sandals: "샌들",
                    all: "전체",
                  },
                },
                bags: {
                  tit: "여성가방",
                  sub: {
                    backpack: "백팩",
                    miniBag: "미니백",
                    crossBag: "크로스백",
                    all: "전체",
                  },
                },
                accessories: {
                  tit: "여성잡화",
                  sub: {
                    socks: "양말",
                    hat: "모자",
                    gloves: "장갑",
                    all: "전체",
                  },
                },
            },
          },
        // 공통처리 메뉴 변수
        setsNum: "",
        setcat: "",
        setitem:"",
        showmore: false,
    },
    mutations:{
        newChgData(state,pram){ // state - state데이터, pram - 전달값 
            // 해당 카테고리 개수 업데이트
            state.sNum = state.newData[pram].sNum;
            // 해당 카테고리 이름 업데이트
            state.cat = state.newData[pram].cat;
            // 해당 카테고리 제품리스트 업데이트
            state.item = state.newData[pram].item;
            state.showmore = state.newData[pram].showmore;
            state.setcat = pram;
        },
        showmoreItems(state){
            state.showmore = false;
        }
    }
}) // 뷰엑스 인스턴스 // 

export default store;