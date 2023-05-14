import { womenData, menData, kidsData } from "./tempData/prodData.js";

const store = new Vuex.Store({
  state: {
    // 서브데이터 셋업
    newData: {
      // NEW 상품 데이터
      전체: {
        sNum: 60,
        cat: "ALL",
        item: { ...womenData, ...menData, ...kidsData },
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
    // 타겟 서브페이지 데이터 셋업
    tgData: {
      women: {
            shoes: {
                tit: "여성신발",
                sub: {
                    flats: "w_Flat_Data",
                    sneakers: "w_Sneak_Data",
                    sandals: "w_SandS_Data",
                    all: "전체",
                },
            },
            bags: {
                tit: "여성가방",
                sub: {
                    backpack: "w_BackP_Data",
                    miniBag: "w_MiniB_Data",
                    crossBag: "w_CrossB_Data",
                    all: "전체",
                },
            },
            accessories: {
            tit: "여성잡화",
            sub: {
                socks: "w_Socks_Data",
                hat: "w_Hats_Data",
                gloves: "w_Glov_Data",
                all: "전체",
               },
            },
        },
      men: {
            shoes: {
            tit: "남성신발",
            sub: {
                slippers: "m_Slip_Data",
                sneakers: "m_Sneak_Data",
                sandals: "m_Sands_Data",
                all: "전체",
            },
            },
            bags: {
            tit: "남성가방",
            sub: {
                backpack: "m_BackP_Data",
                mensBag: "m_Mens_Data",
                crossBag: "m_CossB_Data",
                all: "전체",
            },
            },
            accessories: {
            tit: "남성잡화",
            sub: {
                socks: "m_Socks_Data",
                hat: "m_Hats_Data",
                belt: "m_Belt_Data",
                all: "전체",
            },
          },
        },
      kids: {
            shoes: {
            tit: "아동신발",
            sub: {
                shoe: "k_Shoe_Data",
                sneakers: "k_Sneak_Data",
                sandals: "k_Sands_Data",
                all: "전체",
            },
            },
            bags: {
            tit: "아동가방",
            sub: {
                backpack: "k_BackP_Data",
                auxiliaryBag: "k_AuxilB_Data",
                styleBag: "k_StyleB_Data",
                all: "전체",
            },
            },
            accessories: {
            tit: "아동잡화",
            sub: {
                socks: "k_Socks_Data",
                hat: "k_Hats_Data",
                gloves: "k_Glov_Data",
                all: "전체",
            },
          },
       },
    },
    // 공통처리 메뉴 변수
    setsNum: "",
    setcat: "",
    setitem: "",
    showmore: false,
  },
  mutations: {
    newChgData(state, pram) {
      // state - state데이터, pram - 전달값
      // 해당 카테고리 개수 업데이트
      state.sNum = state.newData[pram].sNum;
      // 해당 카테고리 이름 업데이트
      state.cat = state.newData[pram].cat;
      // 해당 카테고리 제품리스트 업데이트
      state.item = state.newData[pram].item;
      state.showmore = state.newData[pram].showmore;
      state.setcat = pram;
    },
    showmoreItems(state) {
      state.showmore = false;
    },
  },
}); // 뷰엑스 인스턴스 //

export default store;
