// 플레이어 컴포넌트 - Player.js
// 플레이어CSS
import "../scss/player.css";
// 배너 데이터
import ban_data from "../data/ban";

// 플레이어 출력용 컴포넌트
function Player(){
    return (
        <>
        {
            ban_data.map((x,i)=>
            <div class="player">
                <span id="arm"></span>
                <ul>
                    <li class="artwork">
                    <a href="#">
                        <img src="../00.data/02.imgData/album/alb1.jpg" alt="레코드이미지"/>
                    </a>
                    </li>
                    <li class="info">
                    {/* 곡 정보 */}
                    <h1 id="album">{}</h1>
                    <h4 id="artist">(G)I-DLe</h4>
                    <h2 id="song">Expectations</h2>
                    <div class="button-items">
                        <audio id="music" preload="auto" autoplay>
                        <source src="../00.data/03.audioData/Expectations.mp3" type="audio/mp3"/>
                        </audio>
                        {/* 음반 리스트 */}
                        <div id="slider">
                            {/* 음원 재생시간 프로그레스바 */}
                        <div id="elapsed"></div>
                        <div id="buffered"></div>
                        </div>
                        {/* 현재 재생시간 */}
                        <p id="progress_timer" class="timer">00:00</p>
                        {/* 총 재생시간 */}
                        <p id="total_timer" class="timer">00:00</p>
                        <div class="controls">
                        <span class="prev_song_btn">
                            <i class='bx bx-skip-previous'></i>
                        </span>
                        <span class="play_song_btn">
                            <img src="../00.data/02.imgData/player/bx-play-circle.svg" alt="정지버튼"/>
                        </span>
                        <span class="next_song_btn">
                            <i class='bx bx-skip-next'></i>
                        </span>
                        <div class="slider">
                            <div class="volume"></div>
                            <input type="range" id="volume" min="0" max="1" step="0.01" value="0.6" />
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
            )
      }
    </>
    )
}