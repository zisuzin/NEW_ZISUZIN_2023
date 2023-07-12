// 공통 템플릿 JS
const comData = {
    // 상단영역 html data
      tarea: `
        <div class="top">
            <!-- 로고 -->
            <div class="top_wrap top_wrap1">
                <h1 class="logo">
                    <a href="index.html">
                        <img src="./images/02.imgData/logo_shoopen_sd.png" alt="로고">
                    </a>
                </h1>
            </div>
            <!-- GNB -->
            <div class="top_wrap top_wrap2">
                <nav class="gnb">
                    <ul>
                        <li>
                            <a href="product.html?=new">NEW</a>
                        </li>
                        <li>
                            <a href="product.html?=best">BEST</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent>MEN</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent>WOMEN</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent>KIDS</a>
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