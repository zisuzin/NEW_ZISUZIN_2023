<template>
    <section class="new_container">
        <div class="new_inner">
            <h2>NEW</h2>
            <div class="new-prod-container">
                <!-- new 아이템 탭메뉴 -->
                <div class="new-prod-tab">
                    <ul>
                        <li>
                            <a href="#">ALL</a>
                        </li>
                        <li>
                            <a href="#">WOMAN</a>
                        </li>
                        <li>
                            <a href="#">MAN</a>
                        </li>
                        <li>
                            <a href="#">KIDS</a>
                        </li>
                    </ul>
                </div>
                <div class="new-prod-cont">
                    <ul>
                        <li>
                            <div class="new-prod-img">
                                <a href="#">
                                    <img src="./00.data/02.imgData/new_sc_comp/item_1.jpg" alt="상품이미지">
                                    <strong class="brand">슈펜키즈</strong>
                                    <p>키즈 피셔맨 말랑 젤리샌들 HPKV1D204U</p>
                                </a>
                            </div>
                            <div class="item-detail">
                                <span class="prod-discount-price">
                                    <em>59,900</em>
                                    <span>원</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div class="new-prod-img">
                                <a href="#">
                                    <img src="./00.data/02.imgData/new_sc_comp/item_1.jpg" alt="상품이미지">
                                    <strong class="brand">슈펜키즈</strong>
                                    <p>키즈 피셔맨 말랑 젤리샌들 HPKV1D204U</p>
                                </a>
                            </div>
                            <div class="item-detail">
                                <span class="prod-discount-price">
                                    <em>59,900</em>
                                    <span>원</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div class="new-prod-img">
                                <a href="#">
                                    <img src="./00.data/02.imgData/new_sc_comp/item_1.jpg" alt="상품이미지">
                                    <strong class="brand">슈펜키즈</strong>
                                    <p>키즈 피셔맨 말랑 젤리샌들 HPKV1D204U</p>
                                </a>
                            </div>
                            <div class="item-detail">
                                <span class="prod-discount-price">
                                    <em>59,900</em>
                                    <span>원</span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div class="new-prod-img">
                                <a href="#">
                                    <img src="./00.data/02.imgData/new_sc_comp/item_1.jpg" alt="상품이미지">
                                    <strong class="brand">슈펜키즈</strong>
                                    <p>키즈 피셔맨 말랑 젤리샌들 HPKV1D204U</p>
                                </a>
                            </div>
                            <div class="item-detail">
                                <span class="prod-discount-price">
                                    <em>59,900</em>
                                    <span>원</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isrc:`./00.data/02.imgData/new_sc_comp/item_${this.setNum()}.jpg `
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
            methods: {
            setNum() {
                num+=1;
                return num;
                }
            }
        }
    }
}
</script>