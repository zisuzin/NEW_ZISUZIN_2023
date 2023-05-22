// 카테고리 템플릿 JS
const catData = {
  navCat: `
        <aside class="cat_left_side_tab">
            <h2 class="tit_h2">{{$store.state.title}}</h2>
            <div class="ctg_link">
                <ul>
                    <li>
                        <a href="#">{{$store.state.lnb[0]}}
                            <em v-if="$store.state.lnb">NEW</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">{{$store.state.lnb[1]}}
                            <em v-if="$store.state.lnb">BEST</em>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="ctg_nav">
                <ul>
                    <li class="ctg_depth1">
                        <div>
                            <a href="">
                            <span>{{$store.state.lnb[2]}}</span>
                            </a>
                        </div>
                        <div class="ctg_depth2">
                            <ul>
                                <li v-for="(v,n) in $store.state.lnbItem">
                                    <a href="#" v-on:click.prevent="ChgNoteList(v)">{{v}}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="ctg_depth1">
                        <div>
                            <a href="#">
                                <span>{{$store.state.lnb[3]}}</span>
                            </a>
                        </div>
                        <div class="ctg_depth2">
                            <ul>
                                <li v-for="(v,n) in $store.state.lnbItem2">
                                    <a href="#" v-on:click.prevent="ChgNoteList(v)">{{v}}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="ctg_depth1">
                        <div>
                            <a href="#">
                                <span>{{$store.state.lnb[4]}}</span>
                            </a>
                        </div>
                        <div class="ctg_depth2">
                            <ul>
                                <li v-for="(v,n) in $store.state.lnbItem3">
                                    <a href="#" v-on:click.prevent="ChgNoteList(v)">{{v}}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    `,
  catFilter: `
        <div class="item-cont-list">
            <div class="item-cont-list__inner">
                <!-- 상품 필터메뉴 -->
                <div class="item-cat-filter-row">
                    <ul class="item-cat-filter__list">
                        <li>
                            <strong class="filter-tit">가격</strong>
                            <div class="filter-item">
                                <ul>
                                    <li>
                                        <label for="cgt-rdo-list-1" class="rdo">
                                            <input type="radio" id="cgt-rdo-list-1" name="cgt-rdo-list-1" class="priceVal">
                                            <span>1만원 이하</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="cgt-rdo-list-2" class="rdo">
                                            <input type="radio" id="cgt-rdo-list-2" name="cgt-rdo-list-2" class="priceVal">
                                            <span>2만5천원 이하</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="cgt-rdo-list-3" class="rdo">
                                            <input type="radio" id="cgt-rdo-list-3" name="cgt-rdo-list-3" class="priceVal">
                                            <span>3만원 이하</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="cgt-rdo-list-4" class="rdo">
                                            <input type="radio" id="cgt-rdo-list-4" name="cgt-rdo-list-4" class="priceVal">
                                            <span>5만원 이하</span>
                                        </label>
                                    </li>
                                    <li class="direct-user-input">
                                        <label for="cgt-rdo-list-5" class="rdo">
                                            <input type="radio" id="cgt-rdo-list-5" name="cgt-rdo-list-5">
                                            <span>직접입력</span>
                                        </label>
                                        <div class="filter-price">
                                            <span class="custom-filter-price">
                                                <input type="text" placeholder="9900원">
                                            </span>
                                            <span>~</span>
                                            <span class="custom-filter-price">
                                                <input type="text" placeholder="59900원">
                                            </span>
                                            <a href="#" role="button" class="price-filter-check-btn">확인</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <strong class="filter-tit">색상</strong>
                            <div class="filter-item">
                                <ul>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                    <li class="color-record">
                                        <button type="button"></button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <strong class="filter-tit">사이즈</strong>
                            <div class="filter-item">
                                <ul>
                                    <li class="size-record">
                                        <button type="button">225</button>
                                    </li>
                                    <li class="size-record">
                                        <button type="button">230</button>
                                    </li>
                                    <li class="size-record">
                                        <button type="button">235</button>
                                    </li>
                                    <li class="size-record">
                                        <button type="button">240</button>
                                    </li>
                                    <li class="size-record">
                                        <button type="button">245</button>
                                    </li>
                                    <li class="size-record">
                                        <button type="button">250</button>
                                    </li>
                                    <li class="size-record">
                                        <button type="button">255</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="item-cat-option">
                    <div class="option-right">
                        <p class="prdCount">
                            <strong></strong>
                            items
                        </p>
                        <div class="item_sort">
                            <strong>
                                <i></i>
                                상품정렬
                            </strong>
                            <ul class="product-sort-list">
                                <li>
                                    <a href="#">낮은가격순</a>
                                </li>
                                <li>
                                    <a href="#">높은가격순</a>
                                </li>
                                <li>
                                    <a href="#">상품평순</a>
                                </li>
                                <li>
                                    <a href="#">할인률높은순</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     `,
     prodList: `
        <!-- 메인 상품리스트 -->
        <div class="ui-item-view">
            <ul class="ui-col4">
                <template>
                    <li>
                        <div class="ui-prod-bx">
                            <a href="#">
                                <div class="prod-detail-img">
                                    <img src="" alt="상품이미지">
                                </div>
                                <div class="prod-txt">
                                    <strong class="brand">슈펜</strong>
                                    <p></p>
                                </div>
                            </a>
                        </div>
                        <div class="item-detail">
                            <span class="original-price">
                                <em></em>
                                <span>원</span>
                            </span>
                            <br>
                            <span class="discount-price">
                                <em></em>
                                <span>원</span>
                            </span>
                            <span class="percent-price">
                                <em></em>
                            </span>
                            <div class="box_grade">
                                <div class="star">
                                <span></span>
                                <strong>리뷰
                                    <span></span>
                                    <span></span>
                                </strong>
                                </div>
                            </div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
     `
};

export default catData;
