// 메인 페이지 컴포넌트
import { useEffect } from "react";
import { Main_Ban } from "./components/Ban";
import Circle from "./components/Circle";
import Player from "./components/Player";
import { handleWheel } from "./js/commonFn";
import $ from "jquery";

const Main = () => {
  
  const popUpEle = () => {
    // .album_set 클릭시 너비값 커지면서 화면 전환시킬 대상요소
    const chg_page_ele = $(".circle");
    $(".album_set").click(function () {
        $(chg_page_ele).toggleClass("on");
        $(chg_page_ele).css("opacity","1");
        const albumId = $(this).attr("data-num")
        setTimeout(()=>{
            // window.location.href = `http://localhost:3000/album/${albumId}`
            window.location.href = `http://localhost:3000/#/album/${albumId}`;
        },300)
    });
};

  useEffect(()=>{
    // .banbx 요소를 포함하고 있는 모듈에만 body를 hidden 처리!
    const banEle = document.querySelector(".banbx");
    
    if(banEle) {
        document.body.style.overflowY = "hidden";
        window.addEventListener("mousewheel", handleWheel);
        popUpEle()
    }
    return () => {
      document.body.style.overflowY = "auto";
      window.removeEventListener("mousewheel", handleWheel);
    };
    
  }, []);
  
  return (
    <>
      {/* 1. 배너모듈 */}
      <Main_Ban cat="main" />
      {/* 2. 플레이어모듈 */}
      <Player cat="main"/>
      {/* 3. 커지는 원 */}
      <Circle />
    </>
  );
};

export default Main;