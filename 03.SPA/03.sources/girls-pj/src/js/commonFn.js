// PC - 휠이벤트 + 메인배너이동

import { qs, qsa } from "./eventFn.js";
import changeSongTxt from "../components/Player.js";
import $ from "jquery";

/****************************************** 
    함수명: handleWheel
    기능: 휠 이동시 슬라이드 위치 변경
******************************************/
let prot = 0;
// delta값이 음수인 경우 방향 셋팅
const valset1 = ["0%","15%","0%","-10%","-15%","-25%","-35%"];
// delta값이 양수인 경우 방향 셋팅
const valset2 = ["0%","-25%","5%","-25%","-50%","-50%","-50%"];

// function handleWheel(e) {
//   // 광휠금지
//   if (prot) return;
//   prot = 1;
//   setTimeout(() => {
//     prot = 0;
//   }, 1000);

//   // 슬라이드 겉박스
//   const moveSl = qs(".album_wrap");

//   // 대상 슬라이드 li
//   const tgsl = qsa(".album_set");

//   // 휠 방향 체크
//   let delta = e.deltaY > 0 ? 1 : -1;

//   // delta값이 음수인 경우 (위로 휠-> 위로 이동)
//     if (delta < 0) {
//       // console.log("위로휠!:",delta)
//       // ele.style.top = currentTop + delta + "px";
//         let fe = document.querySelectorAll(".album_wrap li")[0];
//       moveSl.insertBefore(tgsl[6], fe);
//       // console.log(fe);
//       moveSl.style.top = "-360px";
//       moveSl.style.transition = "none";
//       setTimeout(()=>{
//         moveSl.style.transition = "1s ease-in-out";
//         moveSl.style.top = "3vh";
//       },10);
//     }
//     // delta값이 양수인 경우 (아래로 휠-> 아래로 이동)
//     else if (delta > 0) {
//       // console.log("아래로휠!:",delta)
//       moveSl.style.top = "-360px";
//       moveSl.style.transition = "1s ease-out";
//       setTimeout(()=>{
//         // ele.style.top = currentTop + delta + "px";
//         let fe = document.querySelectorAll(".album_wrap li")[0];
//         // console.log(fe);
//         moveSl.appendChild(fe);
//         moveSl.style.transition = "none";
//         moveSl.style.top = "3vh";
//       },1000)
//     }

//     // data-seq 라는 사용자정의 속성 넣기
//     document.querySelectorAll(".album_wrap li").forEach((ele, idx) => {
//     ele.style.transform = `translateX(${delta<0?valset1[idx]:valset2[idx]})`;
//   }); // forEach //
// }

// document.querySelectorAll(".album_wrap li").forEach((ele,idx)=>ele.setAttribute("data-seq", idx));

let currentTime2;


/****************************************** 
    함수명: handleHover
    기능: 마우스 오버시 CD 회전하면서 옆으로 나옴
******************************************/
function handleHover() {
  // 대상에 호버했을때 함수호출!
  const hovertg = qsa(".album_set");
  hovertg.forEach((ele) => {
    // 호버했을때 cd 회전하면서 튀어나옴
    const tg = ele.lastElementChild;
    ele.onmouseover = () => {
      tg.style.transition = "transform 7s";
      tg.style.transform = "translateX(83%) rotate(720deg)";
    };

    ele.onmouseleave = () => {
      tg.style.transition = "transform 7s";
      tg.style.transform = "translateX(73%) rotate(0deg)";
    };
  });
}

/****************************************** 
    함수명: handleToggle
    기능: 원형 네비 메뉴 클릭시 GNB 등장
******************************************/
function handleToggle() {
  const nav = $(".circular_nav");
  const toggleBtn = nav.find($(".toggle_btn"));

  nav.toggleClass("active");
  toggleBtn.toggleClass("active");
}

/****************************************** 
    함수명: player
    기능: 
    (1) 슬라이드li 2번째 요소에 맞춰 플레이어 음원/커버 변경
    (2) 오디오 볼륨조절
    (3) 음원 현재 재생시간/ 총 재생시간 업데이트
    (4) 플레이버튼 토글하여 음원 재생/멈춤
******************************************/
function handleTime() {
  let audio = $("#music")[0];
  let elapsed = $("#elapsed");
  const total1 = $("#total_timer > .tot1");
  const total2 = $("#total_timer > .tot2");
  // console.log(total1,total2)
  const current = $("#progress_timer");

  // 오디오의 재생 시간이 업데이트될 때마다 함수 호출!
  audio.addEventListener("timeupdate", function () { // timeupdate - 오디오 또는 비디오의 재생 시간이 변경될 때마다 발생하는 이벤트
    // 오디오의 재생 시간과 전체 재생 시간 가져오기
    const currentTime = audio.currentTime;
    const duration = audio.duration || 0; // 오디오 총 길이
    // 음원 총 재생시간 구해서 시간 업데이트
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    // let totalTime = minutes.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0"); // 자료형을 문자화한 후 앞에 "0"을 추가!
    let totalTime1 = minutes.toString().padStart(2,"0")
    let totalTime2 = seconds.toString().padStart(2,"0")
    total1.text(totalTime1)
    total2.text(totalTime2)

    // 음원 현재 재생시간 구해서 시간 업데이트
    const minutes2 = Math.floor(currentTime / 60);
    const seconds2 = Math.floor(currentTime % 60);
    currentTime2 = minutes2.toString().padStart(2,"0") + ":" + seconds2.toString().padStart(2,"0"); // 자료형을 문자화한 후 앞에 "0"을 추가!
    current.text(currentTime2);
    
    // 프로그레스 바의 너비 계산
    const progress = (currentTime / duration) * 100 + "%";
    // console.log("프로그레스바너비:",progress)
    
    // 프로그레스 바 업데이트
    elapsed.css("width", progress);
    
    // controlSong(currentTime2,duration,progress)
    
  });
  
  const slider = document.querySelector("#slider");
  let play_btn = $(".play_song_btn");
  
  const controlSong = (e) => {
    // if(play_btn.hasClass("active")){
      
      // 클릭한 위치의 X 좌표 구하기
      const clickX = e.offsetX;
      
      // 프로그레스바의 전체너비
      const progressBarWidth = slider.clientWidth;
  
      // 오디오 총 길이
      let audioDuration = audio.duration; 

      // 클릭한 위치의 너비 비율 계산
      const progressWidth = (clickX / progressBarWidth) * 100;

      // 클릭한 위치의 시간 계산
      const seekTime = (clickX / progressBarWidth) * audioDuration;
  
      // 프로그레스바 너비 업데이트
      elapsed.css("width", progressWidth + '%');

      // console.log(audioDuration)
      // console.log(seekTime);
      // console.log("od현재시간:",audio.currentTime)
      audio.currentTime = seekTime;

    // }
    }
  slider.addEventListener("click",controlSong);
}

// window.addEventListener("wheel", handleWheel);

export { handleHover, handleToggle, handleTime, currentTime2 };