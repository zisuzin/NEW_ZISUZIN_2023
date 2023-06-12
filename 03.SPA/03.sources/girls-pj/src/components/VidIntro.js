import Showvid from "./Showvid";

function VidIntro(props) {
  return (
    <>
      {/* 모듈코드 */}
      <section className="vidbx_wrap">
        {/* 비디오 컴포넌트 */}
        <Showvid/>
        {/* 1. 비디오 재생창 */}
        <section className="vidbx">
          {/* 2. 비디오중앙박스 */}
          <div className="playvid">
            {/* 3. 비디오타이틀 */}
            <h2 className="ifrtit"></h2>
            {/* 4. 아이프레임 */}
            <iframe src="" allow="autoplay"></iframe>
            {/* 5. 닫기버튼 */}
            <button className="cbtn">×</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default VidIntro;
