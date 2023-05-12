const subdata = {
    // 상품 카테고리 선택 Tab메뉴
    prodTab: `
        <div class="new-prod-tab">
            <ul>
                <li v-on:click="test('전체')">
                    <a href="#">ALL</a>
                </li>
                <li v-on:click="test('여성')">
                    <a href="#">WOMAN</a>
                </li>
                <li v-on:click="test('남성')">
                    <a href="#"">MAN</a>
                </li>
                <li v-on:click="test('아동')">
                    <a href="#">KIDS</a>
                </li>
            </ul>
        </div>
    `,

    // 상품 정보 리스트
    prodList: `
        <ul>
            <li v-for="(value,name) in $store.state.newData.전체.item" :key="name">
                <div>
                    <div class="new-prod-bx">
                        <a href="#">
                            <div class="prod-img">
                                <img v-bind:src="'./00.data/02.imgData/new/'+ $store.state.cat + '/' + value.img + '.jpg'" alt="상품이미지">
                            </div>
                            <div class="prod-txt">
                                <strong class="brand">슈펜</strong>
                                <p>{{value.name}}</p>
                            </div>
                        </a>
                    </div>
                    <div class="item-detail">
                        <span class="original-price">
                            <em>{{value.oprice}}</em>
                            <span v-if="value.oprice">원</span>
                        </span>
                        <br>
                        <span class="discount-price">
                            <em>{{value.dprice}}</em>
                            <span v-if="value.dprice">원</span>
                        </span>
                        <span class="percent-price" v-if="value.sale">
                            <em>{{value.sale}}</em>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    `
}

export default subdata;
