// 배너 컴포넌트 - Ban.js
// 배너CSS
import "../scss/ban.css";
// 배너 데이터
import ban_data from "../data/ban";
// 제이쿼리
import $ from "jquery";

// 배너출력용 컴포넌트
function Ban(){
    return (
        <section class="banbx">
            <div class="bancont">
                <ul class="album_wrap">
                {
                    ban_data.map((x,i)=>
                    <li class="album_set" key={i}>
                    <article class="album_cover1">
                      <div class="album_cover_inner">
                        <div>
                          <div class="original_author">
                            <span>{x.altop_txt.split('^')[0]}</span>
                            <span>/</span>
                            <span>{x.altop_txt.split('^')[1]}</span>
                          </div>
                          <em>{x.mtit}</em>
                        </div>
                        <div class="release_date">
                          <div class="date">
                            <span>{x.albot_txt.split('^')[0]}</span>
                            <span>{x.albot_txt.split('^')[1]}</span>
                          </div>
                          <div class="singer">(G)I-DLe</div>
                        </div>
                      </div>
                    </article>
                    <aside class="album_cd1">
                      <a href="#">
                        <img src={x.isrc} alt="앨범이미지1"/>
                      </a>
                      <div class="cd_center_circle"></div>
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