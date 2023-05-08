const sdata = {
    new_best_tab: `
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
    `,
    prod_list: `
        <li class="new-prod-wrap">
            <div class="new-prod-bx">
                <a href="#">
                    <div class="prod-img" v-html='isrc'></div>
                    <div class="prod-txt">
                        <strong class="brand">슈펜키즈</strong>
                        <p>{{pname}}</p>
                    </div>
                </a>
            </div>
            <div class="item-detail">
                <span class="prod-discount-price">
                    <em>{{pprice}}</em>
                    <span>원</span>
                    {{prate}}
                </span>
            </div>
        </li>
    `,
};

export default sdata;