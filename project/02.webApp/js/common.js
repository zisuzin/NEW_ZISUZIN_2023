import comData from "./tempData/commonData.js";

// 상단영역 뷰 컴포넌트
Vue.component("top-area",{
    template: comData.topArea,
    // data(){
    //     return {
    //         menus: [
    //             {id:1, page: 'sub_new.html'},
    //             {id:2, page: 'sub_best.html'}
    //         ]
    //     }
    // },
    // methods:{
    //     gotoPage(page){
    //         window.location.href = `${page}`;
    //     }
    // }
});

// 하단영역 뷰 컴포넌트
Vue.component("info-area",{
    template: comData.infoArea,
});


// 라우터 템플릿 만들기
const New = () => import("./subpage.Vue")

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history", // history 모드 설정
    base: "/", // 기본 경로 설정 (루트 경로)
    // 라우팅 설정
    routes: [
        // 라우트 경로와 컴포넌트 매핑
        // 첫번째 루트
        {
            path: "/sub_new.html",
            // component: "/sub_new.html",
        }
    ]
});

// URL 분할 코드 추가
const currentUrl = window.location.href;
const path = currentUrl.split("#")[1];

const makeVue = x => new Vue({el:x});
makeVue("#info");

new Vue({
    el: "#cont_wrap",
    router, // 라우터 등록
    created() { // 오타 수정: ccreated() -> created()
        // 생성 시점에 URL 분할 코드 실행
        this.$router.push(path);
    }
})

