// 플레이어 컴포넌트 - Player.js
import React, { useState } from "react";
// 플레이어CSS
import "../scss/player.css";
// 배너 데이터
import ban_data from "../data/ban";
import $ from "jquery";

let audio; 

function handleplayer() {
  audio = $("#music")[0];
  const play_btn = $(".play_song_btn");
  const elapsed = $("#elapsed");
  const total = $("#total_timer");
  const current = $("#progress_timer");
  const volumeBar = $("#volume");

  // 오디오 재생/멈춤버튼 토글
  play_btn.click(function() {
    play_btn.toggleClass("active");
    /* active 클래스 가지고있으면 이미지 변경! */
    if (play_btn.hasClass("active") && audio.paused) {
      play_btn.find("img").attr("src", "./images/player/bx-pause.svg");
      audio.play();
    } else {
      play_btn.find("img").attr("src", "./images/player/bx-play-circle.svg");
      audio.pause();
    }
  });

  // 오디오 볼륨 조절
  volumeBar.on("input" , "#volume", function() { // 볼륨 조절바를 조작할때 이벤트 발생!
    const volumeVal = $(this).val(); // 오디오 요소 - 현재 볼륨값을 값으로 가져옴
    audio.volume = volumeVal;
  })
  
} // handleplayer 함수

$(document).ready(function() {
  handleplayer();
});

// 플레이어 출력용 컴포넌트
function Player(props) {
  const sel_data = ban_data[props.cat];

  return (
    <>
      {sel_data.map((x, i) => (
        <div className={"player msp" + (i + 1)} key={i}> 
          <span id="arm"></span>
          <ul>
            <li className="artwork">
              <a href="#">
                <img src={x.isrc} alt="레코드이미지" />
              </a>
            </li>
            <li className="info">
              {/* 곡 정보 */}
              <h1 id="album">{x.mtit.replace(/-/g,"")}</h1>
              <h4 id="artist">(G)I-DLe</h4>
              <h2 id="song">{x.mtit}</h2>
              <div className="button-items">
                <audio id="music">
                  <source src={x.vsrc} type="audio/mp3" />
                </audio>
                {/* 음반 리스트 */}
                <div id="slider">
                  {/* 음원 재생시간 프로그레스바 */}
                  <div id="elapsed"></div>
                  <div id="buffered"></div>
                </div>
                {/* 현재 재생시간 */}
                <p id="progress_timer" className="timer">
                  00:00
                </p>
                {/* 총 재생시간 */}
                <p id="total_timer" className="timer">
                  00:00
                </p>
                <div className="controls">
                  <span className="prev_song_btn">
                    <i className="bx bx-skip-previous"></i>
                  </span>
                  <span className="play_song_btn">
                    <img src={"./images/player/bx-play-circle.svg"} alt="정지버튼" />
                  </span>
                  <span className="next_song_btn">
                    <i className="bx bx-skip-next"></i>
                  </span>
                  <div className="slider">
                    <div className="volume"></div>
                    <input type="range" id="volume" min="0" max="1" step="0.01"/>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
} // Player 함수

export default Player;
