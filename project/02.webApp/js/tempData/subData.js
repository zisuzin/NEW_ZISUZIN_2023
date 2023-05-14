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

    // 상품 정보 리스트(NEW)
    new_prodList: `
        <ul>
            <li v-for="(value,name) in $store.state.newData[$store.state.setcat].item" :key="name">
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
                            <em>{{numberWithCommas(value.oprice)}}</em>
                            <span v-if="value.oprice">원</span>
                        </span>
                        <br>
                        <span class="discount-price">
                            <em>{{numberWithCommas(value.dprice)}}</em>
                            <span v-if="value.dprice">원</span>
                        </span>
                        <span class="percent-price" v-if="value.oprice && value.dprice">
                            <em>{{calculateDiscount(value.oprice, value.dprice)}}</em>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    `,
    // 사이드 메뉴탭 (여성,남성,아동)
    sideMenuTab: `
        <aside class="cat_left_side_tab">
            <h2 class="tit_h2">WOMEN</h2>
            <div class="ctg_link">
            <ul>
                <li>
                <a href="#">신상
                    <em>NEW</em>
                </a>
                </li>
                <li>
                <a href="#">베스트
                    <em>BEST</em>
                </a>
                </li>
            </ul>
            </div>
            <div class="ctg_nav">
            <ul>
                <li class="ctg_depth1">
                <div>
                    <a href="#">
                    <span>여성신발</span>
                    </a>
                </div>
                <div class="ctg_depth2">
                    <ul>
                    <li>
                        <a href="#">전체</a>
                    </li>
                    <li>
                        <a href="#">플랫/단화</a>
                    </li>
                    <li>
                        <a href="#">샌들</a>
                    </li>
                    <li>
                        <a href="#">스니커즈/운동화</a>
                    </li>
                    </ul>
                </div>
                </li>
                <li class="ctg_depth1">
                <div>
                    <a href="#">
                    <span>여성가방</span>
                    </a>
                </div>
                <div class="ctg_depth2">
                    <ul>
                    <li>
                        <a href="#">전체</a>
                    </li>
                    <li>
                        <a href="#">백팩</a>
                    </li>
                    <li>
                        <a href="#">미니백</a>
                    </li>
                    <li>
                        <a href="#">크로스백</a>
                    </li>
                    </ul>
                </div>
                </li>
                <li class="ctg_depth1">
                <div>
                    <a href="#">
                    <span>여성잡화</span>
                    </a>
                </div>
                <div class="ctg_depth2">
                    <ul>
                    <li>
                        <a href="#">전체</a>
                    </li>
                    <li>
                        <a href="#">양말</a>
                    </li>
                    <li>
                        <a href="#">모자</a>
                    </li>
                    <li>
                        <a href="#">머플러/장갑</a>
                    </li>
                    </ul>
                </div>
                </li>
            </ul>
            </div>
        </aside>
    `,
    // 타겟 상품리스트 (여성,남성,아동)
    tgProdList: `
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
                            <input type="radio" id="cgt-rdo-list-1" name="cgt-rdo-list-1">
                            <span>1만원 이하</span>
                            </label>
                        </li>
                        <li>
                            <label for="cgt-rdo-list-2" class="rdo">
                            <input type="radio" id="cgt-rdo-list-2" name="cgt-rdo-list-2">
                            <span>2만5천원 이하</span>
                            </label>
                        </li>
                        <li>
                            <label for="cgt-rdo-list-3" class="rdo">
                            <input type="radio" id="cgt-rdo-list-3" name="cgt-rdo-list-3">
                            <span>3만원 이하</span>
                            </label>
                        </li>
                        <li>
                            <label for="cgt-rdo-list-4" class="rdo">
                            <input type="radio" id="cgt-rdo-list-4" name="cgt-rdo-list-4">
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
                    <strong>240</strong>
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
                        <a href="#">인기상품순</a>
                    </li>
                    <li>
                        <a href="#">신상품순</a>
                    </li>
                    <li>
                        <a href="#">할인률높은순</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <!-- 메인 상품리스트 -->
            <div class="ui-item-view">
                <ul class="ui-col4">
                <li>
                    <div class="ui-prod-bx">
                        <a href="#">
                            <div class="prod-img">
                                <img src="./00.data/02.imgData/2207040118_0000013.jpg" alt="상품이미지">
                            </div>
                            <div class="prod-txt">
                                <strong class="brand">슈펜</strong>
                                <p>디즈니 앨리스 하트 크로스백</p>
                            </div>
                            <!-- <div class="item_ranking">
                                <span>1</span>
                            </div> -->
                        </a>
                    </div>
                    <div class="item-detail">
                        <span class="original-price">
                            <em>35,900</em>
                            <span>원</span>
                        </span>
                        <br>
                        <span class="discount-price">
                            <em>32,310</em>
                            <span>원</span>
                        </span>
                        <span class="percent-price">
                            <em>10%</em>
                        </span>
                        <div class="box_grade">
                            <div class="star">
                            <span></span>
                            <strong>리뷰
                                <span>(5)</span>
                            </strong>
                            </div>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    `
}

export default subdata;