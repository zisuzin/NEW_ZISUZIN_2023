import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "../src/index.css";
import Layout from "./Layout";
import Main from "./Main";
import Gallery from "./Gallery";
import Video from "./Video";
import Album from "./Album";
import Profile from "./Profile";
import AlbumDetail from "./components/AlbumDetail";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                {/* 중요! 레이아웃 컴포넌트를 루트로 잡아줌! */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="ga" element={<Gallery />} />
                    <Route path="vd" element={<Video />} />
                    <Route path="al" element={<Album />} />
                    <Route path="pf" element={<Profile />} />
                    <Route path="album/:id" element={<AlbumDetail />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
