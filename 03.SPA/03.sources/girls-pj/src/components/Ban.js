// 배너 컴포넌트 - Ban.js
// 배너CSS
import "../scss/ban.css";
// 배너 데이터
import ban_data from "../data/ban";

// 배너출력용 컴포넌트
function Main_Ban(){
    return (
        <section className="banbx">
            <div className="bancont">
                <ul className="album_wrap">
                {
                    ban_data.map((x,i)=>
                    <li className="album_set" key={i}>
                    <article className={"album_cover"+(i+1)}>
                      <div className="album_cover_inner">
                        <div>
                          <div className="original_author">
                            <span>{x.altop_txt.split('^')[0]}</span>
                            <span>/</span>
                            <span>{x.altop_txt.split('^')[1]}</span>
                          </div>
                          <em>{x.mtit}</em>
                        </div>
                        <div className="release_date">
                          <div className="date">
                            <span>{x.albot_txt.split('^')[0]}</span>
                            <span>{x.albot_txt.split('^')[1]}</span>
                          </div>
                          <div className="singer">(G)I-DLe</div>
                        </div>
                      </div>
                    </article>
                    <aside className="album_cd1">
                      <a href="#">
                        <img src={x.isrc} alt="앨범이미지1"/>
                      </a>
                      <div className="cd_center_circle"></div>
                    </aside>
                  </li>
                )
                }
                </ul>
            </div>
        </section>
    )
}

function Profile_Ban(){
  return (
    <main>
      {/* 1. 전체멤버 프로필 */}
      <section className="kv">
        <div>
          <img src="./images/profile/all.jpg" alt="여자아이들 이미지"/>
        </div>
      </section>
      <div className="intro_profile">
      {/* 2. 그룹 소개 */}
        <section className="group_intro">
          <h2 className="conttents_tit">ABOUT (G)I-DLE</h2>
          <p className="contents-desc">
          2018년 5인조 다국적 걸그룹으로 데뷔해 국내 신인상을 휩쓴 여자아이들은 명실상부 한국을 대표하는 최정상 걸그룹으로 성장했다.
          데뷔 초부터 흔치 않은 콘셉트로 인기몰이를 하며 데뷔 후 활동 20일 만에 음악 방송 1위, 음원 차트 상위권 신인상 7관왕을 차지하며 괴물 신인으로 불렸고, 탄탄한 해외 팬덤을 가지고 있다.
          또한 퀸덤에서 보여준 막내 걸그룹답지 않은 존재감과 무대 퍼포먼스, 뛰어난 실력을 기점으로 대세 걸그룹으로서의 확고한 입지를 다져나가고 있다.
          </p>
        </section>
      {/* 3. 개별멤버 프로필 */}
        <section className="members_intro">
          <div className="members_inner">
            <div className="intro_title">
              <h2>MEMBER</h2>
            </div>
            <ul>
              <li>
                <button>
                  <div>
                    <img src="" alt=""/>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export {Main_Ban, Profile_Ban};