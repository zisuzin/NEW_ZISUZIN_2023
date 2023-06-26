// 배너 컴포넌트 - Ban.js
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// 애니메이션 라이브러리
import gsap from "gsap";
import { ReactSVG } from "react-svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 스와이퍼 컴포넌트
import { Swiper, SwiperSlide } from "swiper/react";
// 스와이퍼 네비게이션 컴포넌트
import { Navigation } from "swiper";
// 제이쿼리
import $ from "jquery";

// 폰트어썸 임포트
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 배너 CSS
import "../scss/ban.css";
// // 미디어쿼리CSS
// import "../scss/media.css";

// 스와이퍼 CSS
import "swiper/css";
import "swiper/css/navigation";

// 배너 데이터
import ban_data from "../data/ban";

// 메인배너 출력용 컴포넌트
function Main_Ban(props) {
  const sel_data = ban_data[props.cat];

  return (
    <section className="banbx">
      <div className="banbxInner">
        <div className="bancont">
          <ul className="album_wrap">
            {sel_data.map((x, i) => (
              <li className={"album_set album_set" + (i + 1)} key={i}>
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
      </div>
    </section>
  );
}

// 프로필배너 출력용 컴포넌트
function Profile_Ban(props) {
  const sel_data = ban_data[props.cat];

  $(() => {
    // 멤버 프로필 리스트 클릭시 큰이미지박스 보이기
    const tgImg = $(".profile_img > li");
    tgImg.click(function () {
      // 1. 클릭된 이미지 경로 읽어오기
      let isrc = $(this).find("img").attr("src");

      // 2. 클릭된 이미지 경로를 큰 이미지에 src로 넣기
      $(".gimg > img").attr("src", isrc);

      // 3. 큰이미지박스 보이기
      $("#imbx").css({ display: "block" }).find(".imgbx").eq($(this).index()).css({ display: "table" }).siblings().css({ display: "none" });
    });

    // 4. 닫기버튼 클릭시 큰이미지박스 숨기기
    $(".close_btn").click(function () {
      $(this).parent().css({ display: "none" });
    });
  });

  // site svg 애니메이션
  const textWave = () => {
    const textPath = document.querySelector("#text-path");
    const textContainer = document.querySelector("#text-container");
    let path = document.querySelector(textPath.getAttribute("href"));
    let pathLength = path.getTotalLength();

    function updateTextPathOffset(offset) {
      textPath.setAttribute("startOffset", offset);
    }

    updateTextPathOffset(pathLength);

    function onScroll() {
      requestAnimationFrame(function () {
        let rect = textContainer.getBoundingClientRect();
        let scrollPercent = rect.y / window.innerHeight;
        updateTextPathOffset(scrollPercent * 2 * pathLength);
      });
    }

    window.addEventListener("scroll", onScroll);

    $(window).scroll(function () {
      if (!document.querySelector("#text-container")) return;
      // console.log("33",document.querySelector("#text-container"));
      let scroll = $(window).scrollTop();
      const sec_start1 = $("#text-container").offset().top;
      const siteListTitle = $("#text-curve");

      if (scroll > sec_start1 && siteListTitle.length > 0) {
        gsap.to(siteListTitle, { duration: 0.8, opacity: 1, y: 3, delay: 1.1 });
      }
    });
  };

  function setFn() {
    setTimeout(textWave, 1000);
  }

  // setTimeout 썼을때 페이지하단 카운트되는것 방지!
  useEffect(setFn, []);

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

            {/* 스크롤시 등장하는 웨이브 텍스트 */}
            <svg id="text-container" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
              <path id="text-curve" d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0" fill="none"></path>

              <text y="40">
                <textPath id="text-path" href="#text-curve" startOffset="442.8510130819152">
                  멤버들에 대해 궁금하신가요?
                </textPath>
              </text>
            </svg>

            {/* 3. 개별멤버 프로필 */}
            <section className="members_intro">
              <div className="members_inner">
                <div className="intro_title">
                  <h2>MEMBER</h2>
                </div>
                <ul className="profile_img">
                  {x.sub.map((v, n) => (
                    <li key={n}>
                      <div>
                        <img src={v.img} alt={v.name + "의 프로필"} />
                      </div>
                    </li>
                  ))}
                </ul>

                {/* 4. 큰이미지 박스 */}
                <section id="imbx">
                  {x.sub.map((item, i) => (
                    <div className="imgbx" key={i}>
                      {/* 큰 이미지 */}
                      <div className="gimg">
                        <img src="" alt="큰이미지" />
                      </div>
                      <dl className="gimgDetail">
                        <dt>{item.name}</dt>
                        <dd>{item.birth}</dd>
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
    // 컴포넌트가 마운트 될 때 gridbtn 클릭
    const gridbtn = document.querySelector("#gridRadio");
    if (gridbtn) {
      gridbtn.click();
    }
  }, []);

  // 비디오 보이기 함수
  const showVid = (src, tit) => {
    let ifr = $(".vid_ifr_wrap iframe");
    // 1. 아이프레임 src넣기
    ifr.attr("src", src + "?autoplay=1");
    // 2. 아이프레임 title넣기
    ifr.attr("title", tit);
    ifr.css("opacity", 1);
  }; // Showvid //

  // 데이터 선택하기 : Hook 데이터 구성
  // -> 데이터 정렬을 반영하기 위해 정렬상태값을 같이 설정함!
  // 데이터구성 : [배열데이터,정렬상태값]
  // 정렬상태값 : 1 - 오름차순, 2 - 내림차순, 3 - 정렬전
  let [mvd, setMvd] = useState([vdata, 3]);

  // 데이터 건수 : Hook 데이터 구성
  let [tot, setTot] = useState(vdata.length);

  // 자동완성 상태변수
  const [autocomplete, setAutocomplete] = useState([]);

  // 사용자입력값 상태변수
  const [resultTit, setResultTit] = useState(null);

  // 데이터 검색 함수
  const schList = () => {
    // 검색요소 대상 : #searchInput
    let input = document.querySelector("#searchInput");

    // 1. 검색어 읽기
    let keyword = input.value;

    // 2. 검색어 입력확인분기
    if (keyword.trim() === "") {
      // 입력창으로 다시보내기
      input.focus();
      // 기존 정렬상태로 돌아가기
      setMvd([vdata, mvd[3]]);
      // 검색건수 초기화
      setTot(vdata.length);
      return;
    }

    // 3. 데이터 검색하기
    // 배열값 다중검색 메서드 -> filter()
    let searchList = vdata.filter((v) => {
      if (v.txt.toLowerCase().indexOf(keyword) !== -1) return true;
    });

    // 4. 검색결과 리스트 업데이트하기
    // 검색결과 리스트 업데이트
    setMvd([searchList, 3]);
  }; // schList 함수

  const searchAuto = (e) => {
    let userInp = document.querySelector("#searchInput").value;
    // 입력창에서 텍스트 입력시 자동완성 데이터 업데이트
    // 검색어 입력시 관련 값이 있을 경우만 css 적용!
    $(".panels").css({ display: "block" });

    // 입력한 검색어와 관련된 데이터가 있을 경우에만 값을 출력
    let searchList = vdata.filter((v) => {
      if (v.txt.toLowerCase().indexOf(userInp) !== -1) return true;
    });

    // 검색어가 비었을때 자동완성 데이터 초기화
    if (userInp.trim() === "" || searchList.length == 0) {
      setAutocomplete([]);
      $(".panels").css({ display: "none" });
      return;
    }
    setAutocomplete(searchList.map((item) => item.txt));
  }; // searchAuto 함수

  // 입력창에서 엔터키 누르면 검색함수 호출!
  const enterKy = (e) => {
    // 엔터쳤을때 데이터 업데이트!
    if (e.key === "Enter") {
      schList();
      const userInp = e.target.value.toLowerCase();
      const completeList = vdata.filter((item) => {
        if (item.txt.toLowerCase().indexOf(userInp) !== -1) return true;
      });

      // 검색건수 업데이트
      setTot(completeList.length);

      // 검색결과 타이틀 출력 - 입력값이 있고, 데이터가 있는 경우에만!
      if (userInp.trim() !== "" && completeList.length !== 0) {
        setResultTit(
          <>
            <strong className="inputVal">{userInp}</strong>
            <span>검색결과 ({completeList.length})</span>
          </>
        );
        $(".sortbx").css({ display: "block" });
        // 검색 데이터가 하나만 있는 경우
        if (completeList.length === 1) {
          $(".sortbx").css({ display: "none" });
        }
      }
      // 검색결과 없는 경우
      else if (completeList.length == 0) {
        setResultTit("검색 결과가 없습니다");
        $(".sortbx").css({ display: "none" });
      }
      // 초기화면 구성 - 위 두 조건을 만족하지 않으면 null값 반환
      else {
        setResultTit(null);
        $(".sortbx").css({ display: "block" });
      }
    }
  }; // enterKy 함수

  // 리스트 정렬 변경함수
  const sortList = (e) => {
    // 1. 선택옵션값 : 1 - 오름차순 / 1 - 내림차순
    let opt = e.target.value;

    // 임시변수 : 배열데이터만 가져옴
    let temp = mvd[0];

    // 2. 옵션에 따른 정렬 반영하기
    temp.sort((x, y) => {
      if (opt == 1) {
        // 오름차순(1)
        return x.txt == y.txt ? 0 : x.txt > y.txt ? 1 : -1;
      } else if (opt == 2) {
        // 내림차순(2)
        return x.txt == y.txt ? 0 : x.txt > y.txt ? -1 : 1;
      }
    });
    // 3. 데이터 정렬변경 반영하기
    // setMvd([배열데이터,정렬상태값])
    setMvd([temp, Number(opt)]);
  }; // sortList 함수

  // #listRadio 클릭시 디스플레이 리스트형태로 변경!
  const displayList = (e) => {
    // 현재 클릭한 요소에 클래스 'on' 추가
    e.target.classList.add("on");
    const rdobtn = document.querySelectorAll(".sortbx input[type='radio']");
    // 클릭한 요소 외 요소는 클래스 'on' 제거
    rdobtn.forEach((item) => {
      if (e.target !== item) {
        item.classList.remove("on");
      }
    });

    // 클릭한 요소의 아이디값에 따라 개별 css 적용
    // 클릭한 요소가 listbtn일때
    if (e.target.id === "listRadio") {
      $("#sub_mv").css({ "flex-direction": "column" });
      $(".mvbx").css("width", "100%");
    }
    // 클릭한 요소가 gridbtn일때
    else {
      $("#sub_mv").css({ flexWrap: "wrap", flexDirection: "row" });
      $(".mvbx").css("width", "50%");

      const winWidth = window.innerWidth;
      if (winWidth > 1090) {
        $(".mvbx").css("width", "31%");
      }
    }
  };

  // 체크박스 요소
  let chkele = document.querySelectorAll(".chkhdn");
  // 체크박스 검색함수
  const chkSearch = (e) => {
    // 1. 체크박스 아이디 : 검색항목의 값(sort)
    let chkid = e.target.id;
    // 2. 체크박스 체크여부 : checked (true/false)
    let chked = e.target.checked;
    console.log("아이디:", chkid, "\n체크여부:", chked);

    // 임시변수 : 기존입력된 데이터 가져옴
    let temp = mvd[0];

    // 결과집합변수
    let newList = [];

    // 3. 체크박스 체크갯수 세기 : 1개 초과시 배열 합쳐서 결과 출력!
    let num = 0;
    chkele.forEach((v) => {
      if (v.checked) num++;
    });
    console.log("체크갯수:", num);

    // 4. 체크박스 체크여부에 따른 분기
    // (1) 체크여부가 true일때 해당 검색어로 검색!
    if (chked) {
      // 현재 데이터 변수에 담기
      let nowdt = vdata.filter((v) => {
        if (v.sort === chkid) return true;
      }); // filter

      // 체크갯수가 1초과일때 배열합치기! (스프레드연산자 사용)
      if (num > 1) {
        // 기존데이터(temp) + 새데이터(noWdt)
        newList = [...temp, ...nowdt];
      }
      // 체크갯수 1일 때
      else {
        newList = nowdt;
      }
    } // if : 체크박스 true

    // (2) 체크박스가 false일때 데이터지우기
    else {
      console.log("지울 데이터:", chkid);
      // splice삭제시 일반for문으로 --처리해야함
      for (let i = 0; i < temp.length; i++) {
        // 조건은 체크박스 풀린 값
        if (temp[i].sort === chkid) {
          // 배열지우기 메서드 : splice(순번,개수)
          temp.splice(i, 1);
        }
        // splice로 지우면 배열항목자체가 삭제되므로 for문 돌때 개수가 줄어듦
        // 따라서 다음번호를 지울때 ++을 --처리 필수!
        i--;
      }
      // 결과처리하기 : 삭제처리된 temp 결과에 넣기!
      newList = temp;
    }

    // 4. 검색결과 리스트 업데이트
    // Hook 데이터변수+데이터건수
    setMvd([newList], 2);
    setTot(newList.length);
  }; // chkSearch 함수

  function CatList(props) {
    // 선택데이터
    let mvd = props.dt;

    return (
      <main className="video_wrap">
        <div className="contents_inner">
          <h3 className="mv_item_tit">Video Clip</h3>
          <section id="sub_mv">
            {mvd.map((x, i) => (
              <div className="mvbx" key={i} onClick={() => showVid(x.vsrc, x.txt)}>
                <figure className="mv_img">
                  <img src={x.isrc} />
                </figure>
                <figcaption className="mv_date">
                  <p>{x.txt}</p>
                  <p>{x.date}</p>
                </figcaption>
              </div>
            ))}
          </section>
          <div className="ifr_bg">
            <div className="vid_ifr_wrap">
              <h3>타이틀입니다</h3>
              <div className="vid_ifr_inner">
              <iframe src="" title="" style={{ opacity: 0, transition: "opacity 1s" }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="contents_wrap">
      {/* <h2>VIDEO</h2> */}
      <div className="contents_inner">
        {/* 모듈코드 */}
        <section className="schbx">
          {/* 1. 옵션선택박스 */}
          <div id="search_filter_bx">
            <div className="schopt">
              {/* 검색박스 */}
              <div className="searching">
                {/* 검색버튼 돋보기아이콘 */}
                <FontAwesomeIcon icon={faSearch} className="schbtn" title="키워드 검색" />
                {/* 입력창 */}
                <input id="searchInput" type="text" maxLength="14" placeholder="검색어를 입력해주세요" onKeyUp={enterKy} onChange={searchAuto} />
              </div>
              {/* 키워드 검색시 연관검색어 팝업 */}
              <div id="keyword_collection">
                <div className="panels">
                  <ul>
                    {autocomplete.map((item, i) => (
                      <li key={i}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* 체크박스구역 */}
            <div className="chkbx">
              <ul>
                <li>
                  <h2>Category</h2>
                  {/* 체크박스리스트 */}
                  <ol>
                    <li>
                      Music Videos
                      <input type="checkbox" id="mv" className="chkhdn" onChange={chkSearch} />
                      <label htmlFor="mv" className="chklb"></label>
                    </li>
                    <li>
                      V-logs
                      <input type="checkbox" id="vlog" className="chkhdn" onChange={chkSearch} />
                      <label htmlFor="vlog" className="chklb"></label>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
          {/* 2. 결과리스트박스 */}
          <div className="listbx">
            {/* 검색결과 타이틀 */}
            {resultTit && <div className="restit">{resultTit}</div>}
            {/* 정렬선택박스 */}
            <aside className="sortbx">
              <select className="sel" name="sel" id="sel" onChange={sortList}>
                <option value="0">정렬선택</option>
                <option value="1">오름차순</option>
                <option value="2">내림차순</option>
              </select>
              <label htmlFor="listRadio">
                <input type="radio" name="listRadio" id="listRadio" onClick={displayList}></input>
              </label>
              <label htmlFor="gridRadio">
                <input type="radio" name="gridRadio" id="gridRadio" onClick={displayList}></input>
              </label>
            </aside>
            {/* 비디오 리스트 컴포넌트 
                전달속성 dt - 리스트 데이터 */}
            <CatList dt={mvd[0]} />
          </div>
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
      <h2 className="mttit">DISCOGRAPHY</h2>
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
                  <img src={`./images/gallery/${galVal.galtit}/${x}.jpg`} alt={"여자아이들의 " + galVal.galtit + " 앨범이미지"} />
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
              <span key={index} className={`gallery_dot${index + 1} ${index === handleClick ? "active" : ""}`} style={{ fontWeight: index === handleClick ? "700" : "400" }}>
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
