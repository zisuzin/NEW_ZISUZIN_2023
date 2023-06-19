// 플레이어 컴포넌트 - Player.js
import React, { useRef, useState, useEffect } from "react";
// 오디오 재생/컨트롤 라이브러리
import { Howl } from "howler";
// 플레이어CSS
import "../scss/player.css";
// 메인함수
import { handleHover } from "../js/commonFn";
import $ from "jquery";
// 배너 데이터
import ban_data from "../data/ban";

// LP 회전각도 초기화 변수
let rotation = 0;

function handleplayer() {
  let audio = $("#music")[0];
  const play_btn = $(".play_song_btn");
  const elapsed = $("#elapsed");
  const volumeBar = $("#volume");
  const lp = $(".artwork");

  // 오디오 재생/멈춤버튼 토글
  play_btn.click(function () {
    play_btn.toggleClass("active");
    /* active 클래스 가지고있으면 이미지 변경! */
    if (play_btn.hasClass("active") && audio.paused) {
      play_btn.find("img").attr("src", "./images/player/bx-pause.svg");
      // audio.play();
      rotateLp();
    } else {
      play_btn.find("img").attr("src", "./images/player/bx-play-circle.svg");
      // audio.pause();
      stopLp();
    }
  });

  function rotateLp() {
    // 회전각 1씩 증가!
    rotation += 1;
    // 1씩 증가된 회전각 만큼 회전
    lp.css("transform", "rotate(" + rotation + "deg)");
    requestAnimationFrame(rotateLp);
  }

  function stopLp() {
    // 회전각 1씩 감소!
    rotation -= 1;
    // 1씩 감소된 회전각 만큼 회전
    lp.css("transform", "rotate(" + rotation + "deg)");
    requestAnimationFrame(stopLp);
  }

} // handleplayer 함수

$(document).ready(function () {
  // Player 함수
  handleplayer();
  // CD Hover함수
  handleHover();
  // CD Wheel 함수
  // handleWheel();
});

// 플레이어 출력용 컴포넌트
function Player(props) {
  const total = $("#total_timer");
  const current = $("#progress_timer");
  const elapsed = $("#elapsed");

  const audioPlayer = useRef(null);
  const sel_data = ban_data[props.cat];
  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (event) => {
    const volumeValue = event.target.value;
  };

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const soundRef = useRef(null);

  // 다음 버튼 클릭시 다음 순번부터 곡 재생 (1~0)
  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % sel_data.length;
    setCurrentSongIndex(nextIndex);
    // playAudio 함수에 src값 인자로 넘겨주며 호출!
    playAudio(sel_data[nextIndex].vsrc);
  };

  const playPrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + sel_data.length) % sel_data.length;
    setCurrentSongIndex(prevIndex);
    const audioSrc = sel_data[prevIndex].vsrc;
    playAudio(audioSrc);
  };

  const playAudio = (audioSrc) => {
    // 이전/다음버튼 클릭 전 음원 중지
    if (soundRef.current) {
      soundRef.current.stop();
    }

    const sound = new Howl({
      src: [audioSrc],
      html5: true,
    });
    sound.play();

    // 현재 재생 중인 곡 참조
    soundRef.current = sound;

    // 재생버튼에 클래스 .active 유무 확인으로 음원 재생/멈춤
    if ($(".play_song_btn").hasClass("active")) {
      sound.play();
    } else {
      sound.stop();
    }
  };

  const x = ban_data.main[currentSongIndex];

  return (
    <div className={"player"}>
      <span id="arm"></span>
      <ul>
        <li className="artwork">
          <a href="#">
            <img src={x.isrc} alt="레코드이미지" />
          </a>
        </li>
        <li className="info">
          {/* 곡 정보 */}
          <h1 id="album">{x.mtit.replace(/-/g, "")}</h1>
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
              <span className="prev_song_btn" onClick={playPrevSong}>
                <i className="bx bx-skip-previous"></i>
              </span>
              <span className="play_song_btn">
                <img src={"./images/player/bx-play-circle.svg"} alt="정지버튼" />
              </span>
              <span className="next_song_btn" onClick={playNextSong}>
                <i className="bx bx-skip-next"></i>
              </span>
              <div className="slider">
                <div className="volume"></div>
                <input type="range" id="volume" min={0} max={100} step={1} value={volume} onChange={handleVolumeChange} />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
} // Player 함수

export default Player;
