// 요소 선택 함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 클래스 추가/제거 함수
const addCls = (x,y) => x.classList.add(y);
const removeCls = (x,y) => x.classList.remove(y);

// 이벤트 함수  - 오버
const hoverCont = (x) => {
    // 선택
    let y = qsa(x);
    // 클래스 추가/제거
    y.forEach(ele=>{
        // 하위박스가 없으면 리턴
        if(!ele.querySelector("div")) return;

        ele.onmouseenter = () => {
            addCls(ele,"active");
        }
        ele.onmouseleave = () => {
            removeCls(ele,"active");
        }
    });
}

// 이벤트 함수 - 클릭 토글
const toggleCont = (x) => {
    // 선택
    let y = qs(x);
    // 클래스 추가/제거
    y.onclick = function(){
        this.classList.toggle("active");
    }
}

// 내보내기 
export {qs, qsa, addCls, removeCls, hoverCont, toggleCont};