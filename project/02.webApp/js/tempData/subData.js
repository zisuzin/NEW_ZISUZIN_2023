const subdata = {
    prodTab: `
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

    prodList: `
        <li>
            <div class="new-prod-bx">
                <a href="#">
                    <div class="prod-img">
                        <img v-bind:src="this.pimg" alt="상품이미지">
                    </div>
                    <div class="prod-txt">
                        <strong class="brand">슈펜</strong>
                        <p>{{this.pname}}</p>
                    </div>
                </a>
            </div>
            <div class="item-detail">
                <span class="original-price">
                    <em>{{this.poprice}}</em>
                    <span v-if="this.poprice">원</span>
                </span>
                <br>
                <span class="discount-price">
                    <em>{{this.pdprice}}</em>
                    <span v-if="this.pdprice">원</span>
                </span>
                <span class="percent-price" v-if="this.psale">
                    <em>{{this.psale}}</em>
                </span>
            </div>
        </li>
    `
}

export default subdata;