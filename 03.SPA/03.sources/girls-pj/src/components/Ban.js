// 배너 컴포넌트 - Ban.js
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// 스와이퍼 컴포넌트
import { Swiper, SwiperSlide } from "swiper/react";
// 스와이퍼 네비게이션 컴포넌트
import { Navigation } from "swiper";
// 제이쿼리
import $ from "jquery";

// 배너CSS
import "../scss/ban.css";
// // 미디어쿼리CSS
// import "../scss/media.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// 배너 데이터
import ban_data from "../data/ban";
// import ReactPaginate from "react-paginate";

// 메인배너 출력용 컴포넌트
function Main_Ban(props) {
    const sel_data = ban_data[props.cat];

    return (
        <section className="banbx">
            <div className="bancont">
                <ul className="album_wrap">
                    {sel_data.map((x, i) => (
                        <li className="album_set" key={i}>
                            <article className={"album_cover" + (i + 1)}>
                                <div className="album_cover_inner">
                                    <div>
                                        <div className="original_author">
                                            <span>{x.altop_txt.split("^")[0]}</span>
                                            <span>/</span>
                                            <span>{x.altop_txt.split("^")[1]}</span>
                                        </div>
                                        <em>{x.mtit}</em>
                                    </div>
                                    <div className="release_date">
                                        <div className="date">
                                            <span>{x.albot_txt.split("^")[0]}</span>
                                            <span>{x.albot_txt.split("^")[1]}</span>
                                        </div>
                                        <div className="singer">(G)I-DLe</div>
                                    </div>
                                </div>
                            </article>
                            <aside className="album_cd1">
                                <a href="#">
                                    <img src={x.isrc} alt="앨범이미지1" />
                                </a>
                                <div className="cd_center_circle"></div>
                            </aside>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

// 프로필배너 출력용 컴포넌트
function Profile_Ban(props) {
    // 반환된 객체에서 각각의 id 속성을 추출!
    const [imgclk, setImgClk] = useState(0);

    $(() => {
        // 멤버 프로필 리스트 클릭시 큰이미지박스 보이기
        const tgImg = $(".profile_img > li");
        tgImg.click(function () {
            // 1. 클릭된 이미지 경로 읽어오기
            let isrc = $(this).find("img").attr("src");

            // 2. 클릭된 이미지 경로를 큰 이미지에 src로 넣기
            $(".gimg > img").attr("src", isrc);

            // 3. 큰이미지박스 보이기
            $("#imbx")
                .css({ display: "block" })
                .find(".imgbx")
                .eq($(this).index())
                .css({ display: "table" })
                .siblings()
                .css({ display: "none" });
        });

            // 4. 닫기버튼 클릭시 큰이미지박스 숨기기
            $(".close_btn").click(function () {
                $(this).parent().css({ display : "none"});
            })
    });

    const sel_data = ban_data[props.cat];

    return (
        <>
            {sel_data.map((x, i) => (
                <main key={i} id="kv_wrap">
                    {/* 1. 전체멤버 프로필 */}
                    <section className="kv">
                        <div>
                            <img src={x.isrc} alt="여자아이들 이미지" />
                        </div>
                    </section>
                    <div className="intro_profile">
                        {/* 2. 그룹 소개 */}
                        <section className="group_intro">
                            <h2 className="conttents_tit">{x.mtit}</h2>
                            <p className="contents-desc">{x.stit}</p>
                        </section>
                        {/* 3. 개별멤버 프로필 */}
                        <section className="members_intro">
                            <div className="members_inner">
                                <div className="intro_title">
                                    <h2>MEMBER</h2>
                                </div>
                                <ul className="profile_img">
                                    {x.sub.map((v, n) => (
                                        <li key={n}>
                                            <button>
                                                <div>
                                                    <img src={v.img} alt={v.name + "의 프로필"} />
                                                </div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            {/* 4. 큰이미지 박스 */}
                            <section id="imbx">
                                {x.sub.map((item, i) => (
                                    <div className="imgbx">
                                        {/* 큰 이미지 */}
                                        <div className="gimg">
                                            <img src="" alt="큰이미지" />
                                        </div>
                                        <dl className="gimgDetail">
                                            {
                                                <>
                                                    <dt>{item.name}</dt>
                                                    <dd>{item.birth}</dd>
                                                </>
                                            }
                                        </dl>
                                        <button type="button" className="close_btn" title="팝업 닫기"></button>
                                    </div>
                                ))}
                            </section>
                            </div>
                        </section>
                    </div>
                </main>
            ))}
        </>
    );
}

// 비디오배너 출력용 컴포넌트
function Video_Ban(props) {
    // 데이터 셋팅
    const vdata = ban_data[props.cat];

    useEffect(() => {
        // 컴포넌트가 마운트될 때 첫 번째 li 클릭
        const firstLi = document.querySelector(".swiper-slide");
        if (firstLi) {
            firstLi.click();
        }

        // 두번째 인자가 빈 배열 []인 경우, 컴포넌트가 처음 마운트될 때만 실행됨.
    }, []);

    // 비디오 보이기 함수
    const showVid = (src, tit) => {
        let ifr = $("#main_mv iframe");
        // 1. 아이프레임 src넣기
        ifr.attr("src", src + "?autoplay=1");
        // 2. 아이프레임 title넣기
        ifr.attr("title", tit);
        ifr.css("opacity", 1);
    }; // Showvid //

    return (
        <main className="contents_wrap">
            <h2>VIDEO</h2>
            <div className="contents_inner">
                <section id="main_mv">
                    <iframe src="" title="" style={{ opacity: 0, transition: "opacity 1s" }}></iframe>
                </section>
                <section id="sub_mv">
                    <Swiper
                        className="mv_wrap"
                        slidesPerView={3}
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {vdata.map((x, i) => (
                            <SwiperSlide key={i} className="swiper-slide" onClick={() => showVid(x.vsrc, x.txt)}>
                                <div className="mv_img">
                                    <img src={x.isrc} />
                                </div>
                                <div className="mv_date">
                                    <p>{x.txt}</p>
                                    <p>{x.date}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
        </main>
    );
}

// 앨범 출력용 컴포넌트
function Album_Ban() {
    const sel_data = ban_data.main;

    return (
        <main className="contents_wrap">
            <h2>DISCOGRAPHY</h2>
            <div className="contents_inner">
                <div className="album_list">
                    <ul>
                        {sel_data.map((x, i) => (
                            <li key={i}>
                                <Link to={`/album/${i}`}>
                                    <img src={x.isrc} alt={"여자아이들의 " + x.mtit + " 앨범"} />
                                    <div className="albumInfo_box">
                                        <div className="txt_align">
                                            <h5>{x.altop_txt.split("^")[1]}</h5>
                                            <h2>{x.mtit.replace(/-/g, "")}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

// 갤러리1 컴포넌트
function Gal1_comp(props) {
    const galVal = props.cat[0];

    return (
        <>
            <h3>Album Title : {galVal.galtit}</h3>
            <div className="gal1_cont">
                {/* 앨범명 */}
                <div className="gal_img_wrap">
                    <div className="gal_img_inner">
                        <ul>
                            {galVal.galisrc.map((x, i) => (
                                <li className={"gal1_img" + (i + 1)} key={i}>
                                    <img
                                        src={`./images/gallery/${galVal.galtit}/${x}.jpg`}
                                        alt={"여자아이들의 " + galVal.galtit + " 앨범이미지"}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

// // 갤러리2 컴포넌트
// function Gal2_comp

// 갤러리 출력용 컴포넌트
function Gallery_Ban() {
    const sel_data = ban_data.gallery;
    let prevIndex = 1;

    const firstSpan = $(".gallery_dot1");

    const [handleClick, setHandleClick] = useState(false);

    const handleNextClick = () => {
        setHandleClick((prevIndex) => (prevIndex + 1) % sel_data.length); // 다음 갤러리 인덱스로 변경
    };

    const handlePrevClick = () => {
        setHandleClick((prevIndex) => (prevIndex - 1 + sel_data.length) % sel_data.length); // 이전 갤러리 인덱스로 변경
    };

    return (
        <>
            <main className="contents_wrap">
                <h2>Gallery</h2>
                {/* 컴포넌트 출력 부분 */}
                <Gal1_comp cat={sel_data} />
            </main>
            <nav className="go_lft_rgt_btn">
                <div className="lft_rgt_btn_wrap">
                    <div id="go_prev_btn" onClick={handlePrevClick}>
                        <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path d="m5.216 9.4-4.2-4.2 4.2-4.2" stroke="#000" strokeWidth=".7"></path>
                        </svg>
                    </div>
                    <div id="go_btn_dots">
                        {sel_data.map((_, index) => (
                            <span
                                key={index}
                                className={`gallery_dot${index + 1} ${index === handleClick ? "active" : ""}`}
                                style={{ fontWeight: index === handleClick ? "700" : "400" }}
                            >
                                I
                            </span>
                        ))}
                    </div>
                    <div id="go_next_btn" onClick={handleNextClick}>
                        <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path d="m5.216 9.4-4.2-4.2 4.2-4.2" stroke="#000" strokeWidth=".7"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export { Main_Ban, Profile_Ban, Video_Ban, Album_Ban, Gallery_Ban };
