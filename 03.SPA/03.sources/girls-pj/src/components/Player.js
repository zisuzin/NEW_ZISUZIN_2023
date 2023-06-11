// 플레이어 컴포넌트 - Player.js
import React, { useState } from "react";
// 플레이어CSS
import "../scss/player.css";
// 배너 데이터
import ban_data from "../data/ban";
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////


// 플레이어 출력용 컴포넌트
function Player(props) {
  const sel_data = ban_data[props.cat];
  return (
    <>
      {sel_data.map((x, i) => (
        <div className="player" key={i}> 
          <span id="arm"></span>
          <ul>
            <li className="artwork">
              <a href="#">
                <img src={x.isrc} alt="레코드이미지" />
              </a>
            </li>
            <li className="info">
              {/* 곡 정보 */}
              <h1 id="album">{x.mtit}</h1>
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
      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
}

export default Player;
