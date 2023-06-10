// 플레이어 컴포넌트 - Player.js
// 플레이어CSS
import "../scss/player.css";
// 배너 데이터
import ban_data from "../data/ban";
import $ from "jquery";

/****************************************** 
    함수명: player
    기능: 
    (1) 슬라이드li 2번째 요소에 맞춰 플레이어 음원/커버 변경
    (2) 오디오 볼륨조절
    (3) 음원 현재 재생시간/ 총 재생시간 업데이트
    (4) 플레이버튼 토글하여 음원 재생/멈춤
******************************************/
function handlePlayer() {
  const audio = $("#music")[0];
  const play_btn = $(".play_song_btn");
  const elapsed = $("#elapsed");
  const total = $("#total_timer");
  const current = $("#progress_timer");

  // 오디오 재생/멈춤버튼 토글
  play_btn.click(function () {
    play_btn.toggleClass("active");
    /* active 클래스 가지고있으면 이미지 변경! */
    if (play_btn.hasClass("active")) {
      play_btn.find("img").attr("src", "./images/player/bx-pause.svg");
    } else {
      play_btn.find("img").attr("src", "./images/player/bx-play-circle.svg");
    }
  });

  // 오디오의 재생 시간이 업데이트될 때마다 함수 호출!
  audio.addEventListener("timeupdate", function () {
    // timeupdate - 오디오 또는 비디오의 재생 시간이 변경될 때마다 발생하는 이벤트
    // 오디오의 재생 시간과 전체 재생 시간 가져오기
    const currentTime = audio.currentTime;
    const duration = audio.duration; // 오디오 총 길이
    // 음원 총 길이 구해서 시간 업데이트
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const totalTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0"); // 자료형을 문자화한 후 앞에 "0"을 추가!
    total.text(totalTime);

    // 음원 재생시간 구해서 시간 업데이트
    const minutes2 = Math.floor(currentTime / 60);
    const seconds2 = Math.floor(currentTime % 60);
    const currentTime2 = minutes2.toString().padStart(2, "0") + ":" + seconds2.toString().padStart(2, "0"); // 자료형을 문자화한 후 앞에 "0"을 추가!
    current.text(currentTime2);

    // 프로그레스 바의 너비 계산
    const progress = (currentTime / duration) * 100 + "%";
    // console.log("프로그레스바너비:",progress)

    // 프로그레스 바 업데이트
    elapsed.css("width", progress);
  });

  play_btn.click(function () {
    if (audio.paused) {
      // 재생버튼 클릭시 음원 재생
      audio.play();
    } else {
      audio.pause();
    }
  });
}

function handleVolume() {
  const volumeBar = $("#volume");
  const audio = $("#music")[0];
  // 오디오 볼륨 조절
  // 볼륨 조절바를 조작할때 이벤트 발생!
  const volumeVal = $(this).val(); // 오디오 요소 - 현재 볼륨값을 값으로 가져옴
  audio.volume = volumeVal;
}

// 플레이어 출력용 컴포넌트
function Player() {
  return (
    <>
      {ban_data.map((x, i) => (
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
                    <input type="range" id="volume" min="0" max="1" step="0.01" value="0.6" onChange={handleVolume} />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Player;
