// store.js

import { createStore } from 'redux';

// 초기 상태
const initialState = {
  isPlaying: false, // 재생 상태
  currentSongIndex: 0, // 현재 곡 인덱스
};

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYING':
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    case 'SET_CURRENT_SONG_INDEX':
      return {
        ...state,
        currentSongIndex: action.currentSongIndex,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
