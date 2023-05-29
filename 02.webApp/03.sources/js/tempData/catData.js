// 카테고리 템플릿 JS
const catData = {
  navCat: `
          <aside class="cat_left_side_tab">
              <ul>
                  <li>
                      <h2 class="tit_h2">MEN</h2>
                      <div class="ctg_link">
                          <ul>
                              <li>
                                  <a href="product.html?=new">
                                      <em>NEW</em>
                                  </a>
                              </li>
                              <li>
                                  <a href="product.html?=best">
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
                                          <span>남성신발</span>
                                      </a>
                                  </div>
                                  <div class="ctg_depth2">
                                      <ul>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'shoes',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'shoes',cat3:'sneakers'})">스니커즈</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'shoes',cat3:'slippers'})">슬리퍼</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li class="ctg_depth1">
                                  <div>
                                      <a href="#">
                                          <span>남성가방</span>
                                      </a>
                                  </div>
                                  <div class="ctg_depth2">
                                      <ul>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'bags',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'bags',cat3:'crossbag'})">크로스백</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'bags',cat3:'mensbag'})">맨즈백</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li class="ctg_depth1">
                                  <div>
                                      <a href="#">
                                          <span>남성잡화</span>
                                      </a>
                                  </div>
                                  <div class="ctg_depth2">
                                      <ul>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'ac',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'ac',cat3:'belt'})">벨트</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'men',cat2:'ac',cat3:'hat'})">모자</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li>
                      <h2 class="tit_h2">WOMEN</h2>
                      <div class="ctg_link">
                          <ul>
                              <li>
                                  <a href="#">
                                      <em>NEW</em>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
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
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'shoes',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'shoes',cat3:'flat'})">플랫슈즈</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'shoes',cat3:'sandal'})">샌들</a>
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
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'bags',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'bags',cat3:'backpack'})">백팩</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'bags',cat3:'minibag'})">미니백</a>
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
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'ac',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'ac',cat3:'socks'})">양말</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'women',cat2:'ac',cat3:'hat'})">모자</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li>
                      <h2 class="tit_h2">KIDS</h2>
                      <div class="ctg_link">
                          <ul>
                              <li>
                                  <a href="#">
                                      <em>NEW</em>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
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
                                          <span>아동신발</span>
                                      </a>
                                  </div>
                                  <div class="ctg_depth2">
                                      <ul>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'shoes',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'shoes',cat3:'shoe'})">구두</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'shoes',cat3:'sandal'})">샌들</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li class="ctg_depth1">
                                  <div>
                                      <a href="#">
                                          <span>아동가방</span>
                                      </a>
                                  </div>
                                  <div class="ctg_depth2">
                                      <ul>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'bags',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'bags',cat3:'stylebag'})">패션가방</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'bags',cat3:'slipperbag'})">실내화가방</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li class="ctg_depth1">
                                  <div>
                                      <a href="#">
                                          <span>아동잡화</span>
                                      </a>
                                  </div>
                                  <div class="ctg_depth2">
                                      <ul>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'ac',cat3:'all'})">전체</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'ac',cat3:'socks'})">양말</a>
                                          </li>
                                          <li>
                                              <a href="#" v-on:click.prevent="$store.commit('ChgMenu',{cat1:'kids',cat2:'ac',cat3:'hat'})">모자</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </li>
              </ul>
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
                  <!-- 메인 상품리스트 -->
                  <div class="ui-item-view">
                      <ul class="ui-col4">
                        <template v-for="(v,n) in $store.state.menu2">
                            <li v-for="(a,b) in v" v-if="$store.state.cat3 === n || $store.state.cat3 === 'all'" :key="a.idx">
                                <div class="ui-prod-bx">
                                    <a href="#">
                                        <div class="prod-detail-img">
                                            <img :src="'./images/02.imgData/sub/'+$store.state.cat1+'/'+$store.state.cat2+'/'+n+'/'+'item_'+(b+1)+'.jpg'" alt="상품이미지">
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
                                        <span>원</span>
                                    </span>
                                    <span class="percent-price" v-if="a.oprice && a.dprice">
                                        <em>{{a.oprice,a.dprice}}</em>
                                    </span>
                                    <div class="box_grade">
                                        <div class="star">
                                        <span></span>
                                        <strong>리뷰
                                            <span v-if="a.review!==undefined" v-text="'('+a.review+')'"></span>
                                            <span v-else>(0)</span>
                                        </strong>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </template>
                      </ul>
                  </div>
              </div>
          </div>
       `,
  prodList: `
       `,

  // NEW & BEST 상품정보 리스트
  NewBest_prodList: `
        <div class="new_inner">
            <h2>{{$store.state.cat1}}</h2>
            <div class="new-prod-container">
                <!-- new&best 아이템 탭메뉴 -->
                <div class="new-prod-tab">
                    <ul>
                        <li>
                            <a href="#" @click.prevent="chgFn('all')">ALL</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="chgFn('women')">WOMEN</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="chgFn('men')">MEN</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="chgFn('kids')">KIDS</a>
                        </li>
                    </ul>
                </div>
                <!-- new&best 아이템 리스트 -->
                <div class="new-prod-cont">
                    <ul>
                        <li v-for="(value,i) in $store.state.nbData[$store.state.setcat]">
                            <div class="new-prod-bx">
                                <a href="#">
                                    <div class="prod-img">
                                        <img v-bind:src="'./images/02.imgData/sub/'+$store.state.cat1+'/'+$store.state.cat2+'/'+'item_'+1+'.jpg'" alt="상품이미지">
                                    </div>
                                    <div class="prod-txt">
                                        <strong class="brand">슈펜</strong>
                                        <p></p>
                                    </div>
                                </a>
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
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
};

export default catData;
