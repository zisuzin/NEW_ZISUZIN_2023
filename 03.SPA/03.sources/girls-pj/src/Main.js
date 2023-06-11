// 메인 페이지 컴포넌트
import {Main_Ban} from "./components/Ban";
import Player from "./components/Player";

const Main = () => {
    return (
        <>
        {/* 1. 배너모듈 */}
        <Main_Ban cat="main"/>
        {/* 2. 플레이어모듈 */}
        <Player cat="main"/>
        </>
    )
}

export default Main;