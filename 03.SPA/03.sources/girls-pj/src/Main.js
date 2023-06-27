// 메인 페이지 컴포넌트
import { useEffect } from "react";
import { Main_Ban } from "./components/Ban";
import Player from "./components/Player";
import { handleWheel } from "./js/commonFn";

const Main = () => {
  useEffect(()=>{
    // .banbx 요소를 포함하고 있는 모듈에만 body를 hidden 처리!
    const banEle = document.querySelector(".banbx");
    if(banEle) {
      document.body.style.overflowY = "hidden";
      handleWheel();
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
    </>
  );
};

export default Main;
