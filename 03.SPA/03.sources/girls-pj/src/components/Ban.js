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
      <section>
        <img src="./images/video/tomboy.jpg" alt="여자아이들 뮤직비디오" />
      </section>
      <section>
        <ul className="mv_wrap">
          {sel_data.map((x,i) => (
            <li key={i}>
              <div>
                <img src={x.isrc} />
              </div>
              <div>
                <p>
                  {x.txt}
                  <span>{x.date}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="pagenation">
        <span>1 </span>
        <span>| 2 </span>
        <span>| 3 </span>
      </div>
    </main>
  );
}

export { Main_Ban, Profile_Ban, Video_Ban };
