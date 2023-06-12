// 갤러리 페이지 컴포넌트
import React from "react";
import { Video_Ban } from "./components/Ban";
import VidIntro from "./components/VidIntro";

const video = () => {
    return (
        <>
        <Video_Ban cat="video"/>
        <VidIntro/>
        </>
    )
}; // video // 

export default video;