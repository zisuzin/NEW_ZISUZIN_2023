// 메인 페이지 컴포넌트
import Ban from "./components/Ban";
import Player from "./components/Player";

const Main = () => {
    return (
        <>
        {/* 1. 배너모듈 */}
        <Ban />
        {/* 2. 플레이어모듈 */}
        <Player />
        </>
    )
}

export default Main;