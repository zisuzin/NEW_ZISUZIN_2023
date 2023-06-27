// 플레이어 컴포넌트 - Player.js
import React, { useRef, useState, useEffect } from "react";
// 플레이어CSS
import "../scss/player.css";
// 메인함수
import { handleHover, handleTime, minutes2, seconds2, currentTime2 } from "../js/commonFn";
import $ from "jquery";
// 배너 데이터
import ban_data from "../data/ban";
import { PropTween } from "gsap/gsap-core";

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
    audio = $("#music")[0];
    play_btn = $(".play_song_btn");
    lp = $(".artwork");
  } // handleplayer 함수

  const audtit = {
    "I feel": [{"0":"Queencard"},{"162":"Allergy"},{"324":"Lucid"},{"500":"All Night"},{"646":"Paradise"},{"835":"Peter Pan"}],
    "I love": [{"0":"LOVE"},{"196":"Change"},{"400":"Reset"},{"582":"Sculpture"},{"769":"DARK (X-file)"}],
    "I am": [{"0":"LATATA"},{"202":"달라 ($$$)"},{"414":"MAZE"},{"616":"DON'T TEXT ME"},{"830":"알고 싶어"},{"1038":"들어줘요"}],
  }

  let audseq = 0;
  let albtxt;
  let sec=0;
  let dur=0;
  let protsts=false;

  function upAlbumTxt(){  
    setTimeout(()=>{
      // 앨범이름은 오디오가 로딩된 후 시차로 실행!
      let temp = $("#album").text();
      console.log("I순번:",temp.indexOf('I'),temp);
      if(temp.indexOf('I')===0){ 
        protsts = false;
        albtxt = temp;
        console.log("flase처리!!!");
      }
      else protsts=true;
    },100);
  }

  
  function updateAudio(){
    let alEle = document.querySelector("#album");
    $("#music").on("timeupdate",()=>{
      if(alEle.innerText.indexOf('I')===0){ 
        protsts = false;
        albtxt = alEle.innerText;
      }
      else{
        protsts = true;
      }
      console.log(protsts);
      if(protsts) return;
      
      if(!currentTime2||!albtxt||!audtit[albtxt]) return;


      sec = Math.floor(audio.currentTime);
      dur = Math.floor(audio.duration);

      let ct =audtit[albtxt].map(v=>Object.keys(v));
      console.log(sec,albtxt,ct);

      ct.forEach((v,i)=>{
        let n1 = ct[i][0];
        let n2 = i+1==ct.length?dur:ct[i+1][0];
        // console.log("범위:",n1,"~",n2,"/길이:",ct.length);
 
        if(sec>=n1 && sec<n2){
          // console.log("찍을값:",audtit[albtxt][i][n1]);
          $("#song").text(audtit[albtxt][i][n1]);         
        }

      })
    })
  }

  $(document).ready(function () {
    // Player 함수
    handleplayer();
    handleTime()
    // CD Hover함수
    handleHover();
    // CD Wheel 함수
    // handleWheel();


    $("#slider").click(()=>{
      console.log(3333,sec);
      audseq = 0;
      // 재생/멈춤/이전곡/다음곡시에 앨범제목 업데이트!
      upAlbumTxt();
    })
  });
  
  // 볼륨조절 함수
  const volumeChange = (event) => {
    const volumeValue = event.target.value;
    audio.volume = volumeValue;
    setVolume(volumeValue);
  };

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const soundRef = useRef(null);
  let rotsts = 1;

  // 다음 버튼 클릭시 다음 순번부터 곡 재생 (1~0)
  const currentPlayStop = (e) => {
    play_btn.toggleClass("active");
    // console.log("재생멈춤버튼!!!");
    /* active 클래스 가지고있으면 이미지 변경! */
    if (play_btn.hasClass("active")) {
      play_btn.find("img").attr("src", "./images/player/bx-pause.svg");
      updateAudio();
      audio.play();
      rotsts = 1;
      rotateLp();
    } else {
      play_btn.find("img").attr("src", "./images/player/bx-play-circle.svg");
      audio.pause();
      rotsts = 0;
    }
    // 재생/멈춤/이전곡/다음곡시에 앨범제목 업데이트!
    upAlbumTxt();
  };

  const rotateLp = () => {
    // console.log("상태값:",rotsts)
    // 회전각 1씩 증가!
    rotation += 1;
    // 1씩 증가된 회전각 만큼 회전
    lp.css("transform", "rotate(" + rotation + "deg)");
    if (rotsts && play_btn.hasClass("active")) setTimeout(rotateLp, 10);
  };

  // 다음 버튼 클릭시 다음 순번부터 곡 재생 (1~0)
  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % sel_data.length;
    setCurrentSongIndex(nextIndex);
    setSongSeq(nextIndex);

    if (play_btn.hasClass("active")) {
      setTimeout(() => audio.play(), 10);
      changeSongTxt(nextIndex);
    }
    // 재생/멈춤/이전곡/다음곡시에 앨범제목 업데이트!
    upAlbumTxt();

  };

  const playPrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + sel_data.length) % sel_data.length;
    setCurrentSongIndex(prevIndex);
    const audioSrc = sel_data[prevIndex].vsrc;
    // console.log(prevIndex);
    setSongSeq(prevIndex);

    if (play_btn.hasClass("active")) {
      setTimeout(() => audio.play(), 10);
    }
    // console.log(audio);
    // 재생/멈춤/이전곡/다음곡시에 앨범제목 업데이트!
    upAlbumTxt();

  };

  // 재생시간에 따라 특정 값으로 텍스트 변경
  const changeSongTxt = (songSrc) => {
    const songTxt = $("#song");
    // console.log(songSrc);

    switch (
      songSrc // 3 - I love
    ) {
      case "3":
        return;
    }

    // console.log(songSrc)
  };

  const srcList = ["./audios/i feel.mp3", "./audios/Expectations.mp3", "./audios/Nxde.mp3", "./audios/i love.mp3", "./audios/dumdi dumdi.mp3", "./audios/i am.mp3", "./audios/tomboy.mp3"];

  // main 배열의 각 순번 별로 데이터 접근 - currentSongIndex : 0, 1, 2, 3,..
  const x = ban_data.main[currentSongIndex];

  // 체크함수 ///////
  const chkFn = () => {
    handleplayer();
    updateAudio();
    audio.pause();
    rotsts = 0;
  }; ///////////// chkFn ////////////

  // 페이지로딩시 체크코드
  useEffect(chkFn,[]);

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
          <h2 id="song">{x.stit == "" ? x.mtit.replace(/-/g, "") : x.stit}</h2>
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
              <span className="tot1">00</span>:<span className="tot2">00</span>
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
                <input type="range" id="volume" min={0} max={1} step={0.1} value={volume} onChange={volumeChange} />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
} // Player 함수

export default Player;