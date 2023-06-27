// PC - 휠이벤트 + 메인배너이동

import { qs, qsa } from "./eventFn.js";
import changeSongTxt from "../components/Player.js";
import $ from "jquery";

/****************************************** 
    함수명: handleWheel
    기능: 휠 이동시 슬라이드 위치 변경
******************************************/

// 회전각 초기화변수
let rotation = 0;

function handleWheel(e) {
  // console.log("휠발생!!");

  // 휠 방향 체크
  let delta = e.wheelDelta || e.deltaY;

  if (delta < 0) {
    console.log("위로휠!:",delta)
  }
  // 슬라이드 겉박스
  const moveSl = qs(".album_wrap");
  // 대상 슬라이드 li
  const tgsl = qsa(".album_set");

  rotation +=1;

  // li요소 싸고있는 부모박스 ul 회전시키기
  $(".album_wrap").css({transform: "rotate(" + (rotation) + "deg)"});
  // 대상 li 요소들 역방향 회전시키기
  $(".album_set ").css({transform: "rotate(" + (-rotation) + "deg)"});

}

document.querySelectorAll(".album_wrap li").forEach((ele,idx)=>ele.setAttribute("data-seq", idx));

/****************************************** 
    함수명: handleHover
    기능: 마우스 오버시 CD 회전하면서 옆으로 나옴
******************************************/
function handleHover() {
  // 대상에 호버했을때 함수호출!
  const hovertg = qsa(".album_set");
  hovertg.forEach((ele) => {
    // 호버했을때 cd 회전하면서 튀어나옴
    const tg = ele.querySelector("aside")
    ele.onmouseover = () => {
      tg.style.transition = "transform 7s";
      tg.style.transform = "translate(5%, -50%) rotate(720deg)";
    };

    ele.onmouseleave = () => {
      tg.style.transition = "transform 7s";
      tg.style.transform = "translate(0, -50%) rotate(0deg)";
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

// 음원 재생시간 구하는 변수
let currentTime2;

/****************************************** 
    함수명: handleTime
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
    $("#music").on("timeupdate", function () { // timeupdate - 오디오 또는 비디오의 재생 시간이 변경될 때마다 발생하는 이벤트

      // 오디오의 재생 시간과 전체 재생 시간 가져오기
      const currentTime = audio.currentTime;
      const duration = audio.duration || 0; // 오디오 총 길이

      // 음원 총 재생시간 구해서 시간 업데이트
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
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
  
  // 프로그레스바 클릭시 해당 시점 계산후 음원 재생
  const controlSong = (e) => {
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

      audio.currentTime = seekTime;
    }
    if(document.querySelector("#slider"))
  slider.addEventListener("click",controlSong);
}

window.addEventListener("wheel", handleWheel);

export { handleHover, handleToggle, handleTime, handleWheel, currentTime2 };