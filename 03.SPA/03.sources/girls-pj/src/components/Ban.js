// 배너 컴포넌트 - Ban.js
import { useEffect, useState } from "react";
// 제이쿼리
import $ from "jquery";
// 배너CSS
import "../scss/ban.css";
// 배너 데이터
import ban_data from "../data/ban";
import ReactPaginate from "react-paginate";

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
function Video_Ban(props){
  // 데이터 셋팅
  const vdata = ban_data[props.cat];

  useEffect(() => {
    // 컴포넌트가 마운트될 때 첫 번째 li 클릭
    const firstLi = document.querySelector(".mv_wrap li");
    if (firstLi) {
      firstLi.click();
    }

    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3004/comments?_page=1&_limit=5`
      );
      const data = await res.json();
      setItems(data);
    }
    // 두번째 인자가 빈 배열 []인 경우, 컴포넌트가 처음 마운트될 때만 실행됨.
  }, []);

  // 비디오 보이기 함수
  const showVid = (src,tit) => {
      let ifr = $("#main_mv iframe");
      // 1. 아이프레임 src넣기
      ifr.attr("src",src+"?autoplay=1");
      // 2. 아이프레임 title넣기
      ifr.attr("title", tit);
      ifr.css("opacity", 1);

  } // Showvid // 

  const [items, setItems] = useState([]);

  console.log(items);

  const handlePageClick = (data) => {
    console.log(data.selected)
  }

  return (
      <main className="container">
        <h2>VIDEO</h2>
        <div className="contents_inner">
          <section id="main_mv">
            <iframe src="" title="" style={{ opacity: 0, transition: 'opacity 1s' }}></iframe>
          </section>
          <section id="sub_mv">
            <ul className="mv_wrap">
              {vdata.map((x, i) => (
                <li key={i} onClick={()=>showVid(x.vsrc, x.txt)}>
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
        <ReactPaginate
        previousLabel={'< prev'}
        nextLabel={'next >'}
        pageCount={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        />
        {/* <div className="pagenation">
          <span>1 </span>
          <span>| 2 </span>
          <span>| 3 </span>
        </div> */}
      </main>
    );
} 



export { Main_Ban, Profile_Ban, Video_Ban };
