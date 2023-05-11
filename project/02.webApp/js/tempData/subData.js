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
        <li v-for="(value,name) in $store.state.newData.전체.item">
            <div class="new-prod-bx">
                <a href="#">
                    <div class="prod-img">
                        <img v-bind:src="'./00.data/02.imgData/'+value.cat+value.item['img']+.jpg'" alt="상품이미지">
                    </div>
                    <div class="prod-txt">
                        <strong class="brand">슈펜</strong>
                        <p>{{value['name']}}</p>
                    </div>
                </a>
            </div>
            <div class="item-detail">
                <span class="original-price">
                    <em>{{value['oprice']}}</em>
                    <span v-if="value['oprice']">원</span>
                </span>
                <br>
                <span class="discount-price">
                    <em>{{value['dprice']}}</em>
                    <span v-if="value['dprice']">원</span>
                </span>
                <span class="percent-price" v-if="value['sale']">
                    <em>{{value['sale']}}</em>
                </span>
            </div>
        </li>
    `
}

export default subdata;