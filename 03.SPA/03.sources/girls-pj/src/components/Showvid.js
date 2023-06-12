// 제이쿼리
import $ from "jquery";
// 배너 데이터
import ban_data from "../data/ban";

export default function Video_Ban(props){
    // 데이터 셋팅
    const vdata = ban_data[props.cat];
    // console.log(vdata)

    // 비디오보이기 함수
    const showVid = (src,tit) => {
        
        let ifr = $(".playvid iframe");
        // 1. 아이프레임 src넣기
        ifr.attr("src",src+"?autoplay=1");
        // 2. 비디오 타이틀넣기
        $(".ifrtit").text(tit);

        let vdbx = $(".vidbx");
        // 3. 비디오 전체박스 보이기
        vdbx.fadeIn(300);
        // 4. 닫기버튼 셋팅
        $(".cbtn").click(()=>{
            vdbx.fadeOut(300);
            ifr.attr("src","");
        })
    } // Showvid // 

    return (
        <main className="container">
          <h2>VIDEO</h2>
          <div className="contents_inner">
            <section id="main_mv">
              <img src="https://i.ytimg.com/vi/zE3loHRmof4/maxresdefault.jpg" alt="여자아이들 뮤직비디오" />
            </section>
            {/* 영상 재생버튼 */}
            <button class="play-button" aria-label="재생">
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                <path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
              </svg>
            </button>
            <section id="sub_mv">
              <ul className="mv_wrap">
                {vdata.map((x, i) => (
                  <li key={i} onClick={()=>showVid(x.vsrc, x.txt)}>
                    <div className="mv_img">
                      <img src={x.isrc} />
                    </div>
                    <div className="mv_date">
                      <p>{x.txt}</p>
                      <p>{x.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="pagenation">
            <span>1 </span>
            <span>| 2 </span>
            <span>| 3 </span>
          </div>
        </main>
      );
} 

