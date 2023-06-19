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

// 플레이어 출력용 컴포넌트
function Player(props) {
    // LP 회전각도 초기화 변수
    let rotation = 0;

    // 전체곡순번
    const [songSeq, setSongSeq] = useState(0);

    let audio, play_btn, lp;

    const audioPlayer = useRef(null);
    const sel_data = ban_data[props.cat];
    const [volume, setVolume] = useState(1);

    function handleplayer() {
        const total = $("#total_timer");
        const current = $("#progress_timer");
        audio = $("#music")[0];
        play_btn = $(".play_song_btn");
        const elapsed = $("#elapsed");
        const volumeBar = $("#volume");
        lp = $(".artwork");

        // console.log(audio);

    } // handleplayer 함수

    $(document).ready(function () {
        // Player 함수
        handleplayer();
        // CD Hover함수
        handleHover();
        // CD Wheel 함수
        // handleWheel();
    });

    const handleVolumeChange = (event) => {
        const volumeValue = event.target.value;
    };

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const soundRef = useRef(null);

    // 다음 버튼 클릭시 다음 순번부터 곡 재생 (1~0)
    const currentPlayStop = () => {
        play_btn.toggleClass("active");
        // console.log("재생멈춤버튼!!!");
        /* active 클래스 가지고있으면 이미지 변경! */
        if (play_btn.hasClass("active") && audio.paused) {
            play_btn.find("img").attr("src", "./images/player/bx-pause.svg");
            audio.play();
            rotateLp();
        } else {
            play_btn.find("img").attr("src", "./images/player/bx-play-circle.svg");
            audio.pause();
            stopLp();
        }
    };

    const rotateLp = () => {
        // 회전각 1씩 증가!
        rotation += 1;
        // 1씩 증가된 회전각 만큼 회전
        lp.css("transform", "rotate(" + rotation + "deg)");
        requestAnimationFrame(rotateLp);
    };

    const stopLp = () => {
        // 회전각 1씩 감소!
        rotation -= 1;
        // 1씩 감소된 회전각 만큼 회전
        lp.css("transform", "rotate(" + rotation + "deg)");
        requestAnimationFrame(stopLp);
    };

    // 다음 버튼 클릭시 다음 순번부터 곡 재생 (1~0)
    const playNextSong = () => {
        const nextIndex = (currentSongIndex + 1) % sel_data.length;
        setCurrentSongIndex(nextIndex);
        // playAudio 함수에 src값 인자로 넘겨주며 호출!
        // playAudio(sel_data[nextIndex].vsrc);
        // console.log(nextIndex);
        setSongSeq(nextIndex);

        if (play_btn.hasClass("active")) {
          setTimeout(()=>audio.play(),100);
        }

        // console.log(audio);
    };

    const playPrevSong = () => {
        const prevIndex = (currentSongIndex - 1 + sel_data.length) % sel_data.length;
        setCurrentSongIndex(prevIndex);
        const audioSrc = sel_data[prevIndex].vsrc;
        // console.log(prevIndex);
        setSongSeq(prevIndex);
        
        if (play_btn.hasClass("active")) {
          setTimeout(()=>audio.play(),100);
        }
        // console.log(audio);
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
        console.log($(".play_song_btn").hasClass("active"));
        if ($(".play_song_btn").hasClass("active")) {
            sound.play();
            // console.log("플레이");
        } else {
            sound.stop();
            // console.log("멈춤");
        }
    };

    const srcList = [
        "./audios/i feel.mp3",
        "./audios/Expectations.mp3",
        "./audios/Nxde.mp3",
        "./audios/i love.mp3",
        "./audios/dumdi dumdi.mp3",
        "./audios/i am.mp3",
        "./audios/tomboy.mp3",
    ];

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
                        <audio id="music" src={srcList[songSeq]}></audio>
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
                            <span className="play_song_btn" onClick={currentPlayStop}>
                                <img src={"./images/player/bx-play-circle.svg"} alt="정지버튼" />
                            </span>
                            <span className="next_song_btn" onClick={playNextSong}>
                                <i className="bx bx-skip-next"></i>
                            </span>
                            <div className="slider">
                                <div className="volume"></div>
                                <input
                                    type="range"
                                    id="volume"
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={volume}
                                    onChange={handleVolumeChange}
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
} // Player 함수

export default Player;