// 배너 컴포넌트 - Ban.js
// 배너CSS
import "../scss/ban.css";
// 배너 데이터
import ban_data from "../data/ban";

// 배너출력용 컴포넌트
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

function Video_Ban(props) {
  const sel_data = ban_data[props.cat];

  return (
    <main className="container">
      <h2>VIDEO</h2>
      <div className="contents_inner">
        <section id="main_mv">
          <img src="https://i.ytimg.com/vi/zE3loHRmof4/maxresdefault.jpg" alt="여자아이들 뮤직비디오" />
        </section>
        {/* 영상 재생버튼 */}
        <button class="play-button" aria-label="재생">
          <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
            <path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
          </svg>
        </button>
        <section id="sub_mv">
          <ul className="mv_wrap">
            {sel_data.map((x, i) => (
              <li key={i}>
                <div className="mv_img">
                  <img src={x.isrc} />
                </div>
                <div className="mv_date">
                  <p>{x.txt}</p>
                  <p>{x.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="pagenation">
        <span>1 </span>
        <span>| 2 </span>
        <span>| 3 </span>
      </div>
    </main>
  );
}

export { Main_Ban, Profile_Ban, Video_Ban };
