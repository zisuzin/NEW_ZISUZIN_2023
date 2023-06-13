import React from "react";
import { useParams } from "react-router-dom";
import ban_data from "../data/ban";

function AlbumDetail () {
  // 반환된 객체에서 각각의 id 속성을 추출!
  const { id } = useParams();

  const eachAlbum = ban_data.main[id];
//   console.log(ban_data.main[id])

  return (
    <>
      {/* <h2>Album Detail - {id}</h2> */}
      <main className="container">
        <div className="contents_wrap">
          {/* 1. 좌측 컨텐츠 */}
          <div className="contents_left">
            {/* 1-1. 뒤로가기 버튼 */}
            <div className="back_btn">
              <span>＜BACK</span>
            </div>
            {/* 1-2. 앨범 커버 이미지 */}
            <div className="album_cover">
              <img src={eachAlbum.isrc} alt={'여자아이들의 '+ eachAlbum.mtit +' 앨범입니다.'} />
            </div>
            {/* 1-3. 앨범 발매일 */}
            <div className="release_date">
              <p>Release Date</p>
              <p>2023-04-26</p>
            </div>
          </div>
          {/* 2. 우측 컨텐츠 */}
          <div className="contents_right"></div>
        </div>
      </main>
    </>
  );
};

export default AlbumDetail;
