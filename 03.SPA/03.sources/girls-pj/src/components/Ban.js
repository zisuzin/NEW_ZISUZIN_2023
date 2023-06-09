// 배너 컴포넌트 - Ban.js
// 배너CSS
import "../scss/ban.css";
// 배너 데이터
import ban_data from "../data/ban";

// 배너출력용 컴포넌트
function Ban(){
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

export default Ban;