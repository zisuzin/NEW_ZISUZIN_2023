// 공통 템플릿 JS
const comData = {
// 상단영역 html data
  tarea: `
  <div class="top">
  <!-- 로고 -->
  <div class="top_wrap top_wrap1">
      <h1 class="logo">
          <a href="#">
              <img src="./images/02.imgData/logo_shoopen_sd.png" alt="로고">
          </a>
      </h1>
  </div>
  <!-- GNB -->
  <div class="top_wrap top_wrap2">
      <nav class="gnb">
          <ul>
              <li>
                  <a href="#" class="tit_1">BEST&NEW</a>
                  <div class="gnb_draw_select">
                    <div class="draw_inner">
                      <div class="menu_list">
                        <ul>
                          <!-- 베스트셀러 -->
                          <li>
                            <span class="tit_2">베스트셀러</span>
                            <ul>
                              <li>
                                <a href="#">ALL</a>
                              </li>
                              <li>
                                <a href="#">WOMEN</a>
                              </li>
                              <li>
                                <a href="#">MEN</a>
                              </li>
                              <li>
                                <a href="#">KIDS</a>
                              </li>
                            </ul>
                          </li>
                          <!-- 신제품 -->
                          <li>
                            <span class="tit_2">신제품</span>
                            <ul>
                              <li>
                                <a href="#">ALL</a>
                              </li>
                              <li>
                                <a href="#">WOMEN</a>
                              </li>
                              <li>
                                <a href="#">MEN</a>
                              </li>
                              <li>
                                <a href="#">KIDS</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="menu_banner">
                        <ul>
                          <li>
                            <a href="#">
                              <img src="./images/02.imgData/gnb/best.jpg" alt="베스트셀러 대표상품이미지">
                            </a>
                            <p>[가드너] 스퀘어
                              리본 플랫슈즈</p>
                          </li>
                          <li>
                            <a href="#">
                              <img src="./images/02.imgData/gnb/new.jpg" alt="신상품 대표상품이미지">
                            </a>
                            <p>오가니언스 베리어 리페어
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </li>
              <li>
                  <a href="#" class="tit_1">MEN</a>
                  <div class="gnb_draw_select">
                    <div class="draw_inner">
                      <div class="menu_list">
                        <ul>
                          <!-- 남성신발 -->
                          <li>
                            <span class="tit_2">남성신발</span>
                            <ul>
                              <li>
                                <a href="#">전체</a>
                              </li>
                              <li>
                                <a href="#">샌들</a>
                              </li>
                              <li>
                                <a href="#">스니커즈</a>
                              </li>
                            </ul>
                          </li>
                          <!-- 남성가방 -->
                          <li>
                            <span class="tit_2">남성가방</span>
                            <ul>
                              <li>
                                <a href="#">전체</a>
                              </li>
                              <li>
                                <a href="#">맨즈백</a>
                              </li>
                              <li>
                                <a href="#">백팩</a>
                              </li>
                            </ul>
                          </li>
                          <!-- 남성잡화 -->
                          <li>
                            <span class="tit_2">남성잡화</span>
                            <ul>
                              <li>
                                <a href="#">전체</a>
                              </li>
                              <li>
                                <a href="#">모자</a>
                              </li>
                              <li>
                                <a href="#">벨트</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </li>
              <li>
                  <a href="#" class="tit_1">WOMEN</a>
                  <div class="gnb_draw_select">
                    <div class="draw_inner">
                      <div class="menu_list">
                        <ul>
                          <!-- 여성신발 -->
                          <li>
                            <span class="tit_2">여성신발</span>
                            <ul>
                              <li>
                                <a href="#">메리제인</a>
                              </li>
                              <li>
                                <a href="#">슬링백</a>
                              </li>
                            </ul>
                          </li>
                          <!-- 여성가방 -->
                          <li>
                            <span class="tit_2">여성가방</span>
                            <ul>
                              <li>
                                <a href="#">전체</a>
                              </li>
                              <li>
                                <a href="#">백백</a>
                              </li>
                              <li>
                                <a href="#">미니백</a>
                              </li>
                            </ul>
                          </li>
                          <!-- 여성잡화 -->
                          <li>
                            <span class="tit_2">여성잡화</span>
                            <ul>
                              <li>
                                <a href="#">전체</a>
                              </li>
                              <li>
                                <a href="#">모자</a>
                              </li>
                              <li>
                                <a href="#">양말</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </li>
              <li>
                  <a href="#" class="tit_1">KIDS</a>
                  <div class="gnb_draw_select">
                    <div class="draw_inner">
                      <div class="menu_list">
                        <ul>
                          <!-- 아동신발 -->
                          <li>
                            <span class="tit_2">아동신발</span>
                            <ul>
                              <li>
                                <a href="#">전체</a>
                              </li>
                              <li>
                                <a href="#">샌들</a>
                              </li>
                              <li>
                                <a href="#">구두</a>
                              </li>
                            </ul>
                          </li>
                          <!-- 아동가방 -->
                          <li>
                            <span class="tit_2">아동가방</span>
                            <ul>
                              <li>
                                <a href="#">전체</a>
                              </li>
                              <li>
                                <a href="#">패션가방</a>
                              </li>
                              <li>
                                <a href="#">실내화가방</a>
                              </li>
                            </ul>
                          </li>
                          <!-- 아동잡화 -->
                          <li>
                            <span class="tit_2">아동잡화</span>
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </li>
          </ul>
      </nav>
  </div>
  <!-- 마이페이지 -->
  <div class="header_top_personal_menu">
      <ul>
          <li>
              <a href="#" class="search-btn">
                  <em class="btn_bind_title">돋보기버튼</em>
              </a>
              <div class="search-input-wrap">
                  <form>
                      <label for="searchWord">
                          <input type="text" name="searchWord" id="searchWord">
                      </label>
                      <a href="#" role="button"></a>
                  </form>
                  <div class="search-input-contents">
                      <div class="search-input-cont-inner">
                          <div class="latest-search-word-bx">
                              <dl>
                                  <dt>최근 검색어</dt>
                                  <dd class="user-input-value"></dd>
                                  <dd class="delete-contents">
                                      <a href="#">전체삭제</a>
                                  </dd>
                              </dl>
                          </div>
                          <div class="popular-search-word-bx">
                              <dl class="hot-keyword">
                                  <dt>인기 검색어</dt>
                                  <dd>
                                      <ul>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>1</em>
                                                  워킹화
                                                  <span class="up">3</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>2</em>
                                                  메리제인
                                                  <span class="up">1</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>3</em>
                                                  가방
                                                  <span class="up">2</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>4</em>
                                                  슬링백
                                                  <span class="up">7</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>5</em>
                                                  샌들
                                                  <span class="up">16</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>6</em>
                                                  슬리퍼
                                                  <span class="down">4</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>7</em>
                                                  운동화
                                                  <span class>NEW</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>8</em>
                                                  스니커즈
                                                  <span class="down">7</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>9</em>
                                                  여자신발
                                                  <span class="up">25</span>
                                              </a>
                                          </li>
                                          <li class="real-time-rank">
                                              <a href="#">
                                                  <em>10</em>
                                                  구두
                                                  <span>NEW</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </dd>
                              </dl>
                          </div>
                      </div>
                      <div class="search-close-btn">
                          <a href="#" role="button">닫기</a>
                      </div>
                  </div>
              </div>
          </li>
          <li>
              <a href="#">
                  <em class="btn_bind_title">장바구니버튼</em>
              </a>
          </li>
          <li>
              <a href="#">
                  <em class="btn_bind_title">찜하기버튼</em>
              </a>
          </li>
          <li class="mypage_btn">
              <a href="#">
                  <em class="btn_bind_title">마이페이지</em>
              </a>
          </li>
      </ul>
  </div>
</div>
    `,

};


export default comData;
