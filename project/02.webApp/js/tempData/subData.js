const subdata = {
    prodTab: `
        <div class="new-prod-tab">
            <ul>
                <li>
                    <a href="#" v-on:click="$store.commit('chgData','전체')">ALL</a>
                </li>
                <li>
                    <a href="#" v-on:click="$store.commit('chgData','여성')">WOMAN</a>
                </li>
                <li>
                    <a href="#" v-on:click="$store.commit('chgData','남성')">MAN</a>
                </li>
                <li>
                    <a href="#" v-on:click="$store.commit('chgData','아동')">KIDS</a>
                </li>
            </ul>
        </div>
    `,

    prodList: `
    <ul>
        <li v-for="(value,name) in $store.state.newData" :key="name">
            <div v-for="(a,b) in value.item" :key="b" v-if="a.img=='item_1'||a.img!='item_2'" v-if="value.cat!='ALL'">
                <div class="new-prod-bx">
                    <a href="#">
                        <div class="prod-img">
                            <img v-bind:src="'./00.data/02.imgData/new/' + value.cat + '/' + a.img + '.jpg'" alt="상품이미지">
                        </div>
                        <div class="prod-txt">
                            <strong class="brand">슈펜</strong>
                            <p>{{a.name}}</p>
                        </div>
                    </a>
                </div>
                <div class="item-detail">
                    <span class="original-price">
                        <em>{{a.oprice}}</em>
                        <span v-if="a.oprice">원</span>
                    </span>
                    <br>
                    <span class="discount-price">
                        <em>{{a.dprice}}</em>
                        <span v-if="a.dprice">원</span>
                    </span>
                    <span class="percent-price" v-if="a.sale">
                        <em>{{a.sale}}</em>
                    </span>
                </div>
            </div>
        </li>
    </ul>
    `
}

export default subdata;