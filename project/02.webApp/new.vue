<template>
    <div class="header_inner">
        <div class="header_fixed_bar">
            <div class="header_top_logo">
                <h2>
                    <a href="main.html">
                        <img src="./00.data/02.imgData/logo_shoopen_sd.png" alt="메인로고" />
                    </a>
                </h2>
            </div>
            <nav class="header_top_gnb">
                <ul>
                    <li>
                        <a href="new.html">NEW</a>
                    </li>
                    <li>
                        <a href="#">BEST</a>
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
                    <li>
                        <a href="#">EVENT</a>
                    </li>
                </ul>
            </nav>
            <div class="header_top_personal_menu">
                <ul>
                    <li>
                        <a href="#" class="search-btn">
                            <em class="btn_bind_title">돋보기버튼</em>
                        </a>
                        <div class="search-input-wrap">
                            <form>
                                <label for="searchWord">
                                    <input type="text" name="searchWord" id="searchWord" />
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
                    <li>
                        <a href="#">
                            <em class="btn_bind_title">마이페이지</em>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'title'
} 
</script>