import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../src/index.css';
import Layout from "./Layout";
import Main from './Main';

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                {/* 중요! 레이아웃 컴포넌트를 루트로 잡아줌! */}
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='' element={<Main/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
