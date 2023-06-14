import React from "react";
import { Link, useParams } from "react-router-dom";
import ban_data from "../data/ban";

function AlbumDetail() {
  // 반환된 객체에서 각각의 id 속성을 추출!
  const { id } = useParams();

  // 각각의 id순번 데이터에 접근하기 위한 변수
  const eachAlbum = ban_data.main[id];

  return (
    <>
      <main id="albumlist_bx" style={{background:eachAlbum.bgcolor}}>
        <section className="albumlist_wrap">
          {/* 1. 좌측 컨텐츠 */}
          <div className="contents_left">
            {/* 1-1. 뒤로가기 버튼 */}
            <div className="back_btn">
              <Link to="/al">
                <span>＜BACK</span>
              </Link>
            </div>
            {/* 1-2. 앨범 커버 이미지 */}
            <div className="album_cover">
              <img src={"." + eachAlbum.isrc} alt={"여자아이들의 " + eachAlbum.mtit + " 앨범"} />
            </div>
            {/* 1-3. 앨범 발매일 */}
            <div className="release_date">
              <p>Release Date</p>
              <p>{eachAlbum.release}</p>
            </div>
          </div>
          {/* 2. 우측 컨텐츠 */}
          <div className="contents_right">
            {/* 2-1.앨범 타이틀 */}
            <div className="album_tit">
              {/* txcolor 문자열에 ^가 없다면 그냥 txcolor 색상 출력 */}
              <p style={{color: eachAlbum.txcolor.indexOf('^') == -1? eachAlbum.txcolor : eachAlbum.txcolor.split('^')[0]}}>
                {eachAlbum.mtit.replace(/-/g, "")}
                </p>
            </div>
            <div className="album_info">
              {/* txcolor 문자열에 ^가 있다면 txcolor.split('^')[1] 색상 출력 */}
              <p style={{color: eachAlbum.txcolor.indexOf('^') !== -1? eachAlbum.txcolor.split('^')[1] : eachAlbum.txcolor}}>
                {eachAlbum.info.split("^").map((segment, index) => (
                  <React.Fragment key={index}>
                    {segment}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </section>
        <section className="track-list">
          <h2 className="contents-title" style={{color: eachAlbum.txcolor.indexOf('^') == -1? eachAlbum.txcolor : eachAlbum.txcolor.split('^')[0]}}>TRACK</h2>
          <div className="list-wrap">
            <ol>
              { eachAlbum.track.map((x,i)=>
              <li key={i}>
                <span style={{color: eachAlbum.txcolor.indexOf('^') !== -1? eachAlbum.txcolor.split('^')[1] : eachAlbum.txcolor}}>{x}</span>
              </li>
              )
              }
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}

export default AlbumDetail;
