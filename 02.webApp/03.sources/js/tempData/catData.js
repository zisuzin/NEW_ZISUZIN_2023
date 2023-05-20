// 카테고리 템플릿 JS
const catData = {
  navCat: `
        <aside class="cat_left_side_tab">
            <h2 class="tit_h2">WOMEN</h2>
            <div class="ctg_link">
            <ul>
                <li>
                <a href="">신상
                    <em>NEW</em>
                </a>
                </li>
                <li>
                <a href="">베스트
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
                        <a href="#">플랫슈즈</a>
                    </li>
                    <li>
                        <a href="#">샌들</a>
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
                    </ul>
                </div>
                </li>
            </ul>
            </div>
        </aside>
    `,
  catFilter: `
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
     `,
};

export default catData;
