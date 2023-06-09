import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Ban';

export default function App(){
    return (
        <Main/>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
