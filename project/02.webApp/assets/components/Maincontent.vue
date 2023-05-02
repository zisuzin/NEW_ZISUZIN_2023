<template>
    <li>
        <div class="new-prod-bx">
            <a href="#">
                <div class="prod-img">
                    <img v-bind:src="isrc" alt="상품이미지" />
                </div>
                <div class="prod-txt">
                    <strong class="brand">슈펜키즈</strong>
                    <p>키즈 피셔맨 말랑 젤리샌들 HPKV1D204U</p>
                </div>
            </a>
        </div>
        <div class="item-detail">
            <span class="prod-discount-price">
                <em>59,900</em>
                <span>원</span>
            </span>
        </div>
    </li>
</template>

<script>
// 뷰JS 인스턴스 생성용 함수
const makeVue = (x) => new Vue({ el: x });

// 숫자증감 변수
let num = 0;

// 갤러리 리스트에 넣을 전역컴포넌트 생성
export default {
    name: 'Maincontent',
    components: 'maincontent',
    data() {
        return {
            isrc: `./00.data/02.imgData/new_sc_comp/item_${this.setNum()}.jpg `,
            products: [
                {
                    brand: "슈펜키즈",
                    name: "키즈 피셔맨 말랑 젤리샌들 HPKV1D204U",
                    price: 59900,
                },
                {
                    brand: "슈펜키즈",
                    name: "키즈 피셔맨 말랑 젤리샌들 HPKV1D204U",
                    price: 59900,
                },
                {
                    brand: "슈펜키즈",
                    name: "키즈 피셔맨 말랑 젤리샌들 HPKV1D204U",
                    price: 59900,
                },
                {
                    brand: "슈펜키즈",
                    name: "키즈 피셔맨 말랑 젤리샌들 HPKV1D204U",
                    price: 59900,
                },
            ],
        },
    },
    methods: {
        setNum() {
            num += 1;
            return num;
        },
    },
};
</script>
