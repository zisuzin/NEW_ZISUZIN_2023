// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js
const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        lnbData: {
            "women": {
                title: "여성"
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