import comData from "./tempData/commonData.js"

// 상단영역 뷰 컴포넌트
Vue.component("top-area",{
    name: "top-area",
    template: comData.topArea,
    data(){
        return {
            menus: [
                {id:1, page: 'sub_new.html'},
                {id:2, page: 'sub_best.html'}
            ]
        }
    },
    methods:{
        gotoPage(page){
            window.location.href = `${page}`;
        }
    }
});

// 하단영역 뷰 컴포넌트
Vue.component("info-area",{
    name: "info-area",
    template: comData.infoArea,
});


const makeVue = x => new Vue({el:x});

makeVue("#header");
makeVue("#info");

