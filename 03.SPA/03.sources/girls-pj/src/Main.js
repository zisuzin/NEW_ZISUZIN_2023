// 메인 페이지 컴포넌트
import { useEffect } from "react";
import { Main_Ban } from "./components/Ban";
import Circle from "./components/Circle";
import Player from "./components/Player";
import { handleWheel } from "./js/commonFn";

const Main = () => {
  useEffect(()=>{
    // .banbx 요소를 포함하고 있는 모듈에만 body를 hidden 처리!
    const banEle = document.querySelector(".banbx");
    window.addEventListener("mousewheel", handleWheel);
    if(banEle) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
    
  }, []);
  
  return (
    <>
      {/* 1. 배너모듈 */}
      <Main_Ban cat="main" />
      {/* 2. 플레이어모듈 */}
      <Player cat="main"/>
      {/* 3. 커지는 원 */}
      <Circle/>
    </>
  );
};

export default Main;