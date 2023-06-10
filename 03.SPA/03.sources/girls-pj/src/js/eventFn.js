// 요소 선택 함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 이벤트 함수  - 오버
const hoverCont = (x) => {
    // 선택
    let y = qsa(x);
    // 클래스 추가/제거
    y.forEach(ele=>{
        ele.onmouseenter = () => {
            console.log(ele)
            // addCls(ele,"active");
        }
        ele.onmouseleave = () => {
            // removeCls(ele,"active");
        }
    });
}

export {qs, qsa};