const sdata = {
    new_best_tab: `
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
    `,
    prod_list: `
        <li>
            <div class="new-prod-bx">
                <a href="#">
                    <div class="prod-img">
                        <img v-bind:src="isrc" alt="상품이미지">
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
    `,
};

export default sdata;