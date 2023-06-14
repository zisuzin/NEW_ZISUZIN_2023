// 배너 컴포넌트 - Ban.js
import { useEffect } from "react";
import { Link } from 'react-router-dom';
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
          <Swiper className="mv_wrap" slidesPerView={3} spaceBetween={20} navigation={true} modules={[Navigation]}>
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
                    <h5>{x.altop_txt.split('^')[1]}</h5>
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

export { Main_Ban, Profile_Ban, Video_Ban, Album_Ban };
