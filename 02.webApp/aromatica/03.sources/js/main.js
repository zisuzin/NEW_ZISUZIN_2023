/********************************************** 
    [ 터치 배너 기능구현하기 ]

    1. 원리 : 제이쿼리 UI를 이용하여 x축으로만
    드래그가 되도록 설정 후 위치값을 체크하여
    드래그가 끝난 시점에 자동 위치이동 애니메이션
    처리해준다!

    2. 대상 : .vidslide

    3. 기준
    (1) 왼쪽방향이동 : 기준값(-100%) 보다 -10% 작은경우(-110%)
    (2) 오른쪽방향이동 : 기준값(-100%) 보다 10% 큰경우(-90%)
    (3) 제자리이동 : 양쪽기준값 사이일때(-110% ~ -90%)

    4. 구현시 주의사항
    -> %단위는 모두 px단위로 변환하여 구현한다!
    -> 배너크기가 윈도우가로크기와 같다! 이것을 활용함!
        
**********************************************/

// 전역변수!!!!!!!!!!
// 슬라이드 대상
const slide = $(".vidslide");
// 광드래그 방지 커버
const cover = $(".cover");
// 인디케이터
const indic = $(".indic li");

/*********************************************** 
    함수명: slideFn
    기능: 메인 동영상 슬라이드 구성하는 전체함수
***********************************************/
function slideFn() {

    // 드래그설정
    slide.draggable({
        axis: "x" // x축고정
    }); /// 드래그설정 ///

    // 윈도우크기 리턴함수
    const retWin = () => {
        return $(window).width();
    }
    // 윈도우 가로크기 : left 기준위치 px변환!
    // 초기 가로크기 할당
    let winW = retWin();
    // 리사이즈시 윈도우크기 업데이트
    $(window).resize(()=>{
        winW = retWin();
        // console.log(winW)
    });

    // 드래그 종료후 발생하는 이벤트 함수
    slide.on("dragstop",function(){
        // console.log("드래그멈춤")

        // 광드래그 방지 커버 보이기
        cover.show();

        // 슬라이드 left위치값
        let sleft = $(this).offset().left;
        // console.log("left위치값:",sleft)

        // 분기점 : -110%보다 작을때
        if (sleft < -winW*1.1) {
            slide.animate({
                left: -winW*2 + "px"
            }, 1000, "easeOutQuint", ()=>{
                // 이동후 첫번째 li 이동
                slide.append(slide.find("li").first()).css({left: "-100%"});
                // 커버 제거하기
                cover.hide();
                // 메인배너 타이틀함수 호출!
                showTit();
            }); // animate
            // 블릿 변경함수 호출!
            addOn(2);
            // 영상 재생함수 호출!
            vidOn(2);
        } ///// if : 왼쪽이동 /////

        // 분기점 : -90%보다 클때
        else if (sleft > -winW*0.9) {
            slide.animate({
                left: "0px",
            }, 1000, "easeOutQuint", ()=>{
                // 이동후 맨뒤 li 맨앞으로 이동하기
                slide.prepend(slide.find("li").last()).css({left: "-100%"});
                // 커버 제거하기
                cover.hide();
                // 메인배너 타이틀함수 호출!
                showTit();
            }); // animate

            // 블릿 변경함수 호출!
            addOn(0);
            // 영상 재생함수 호출!
            vidOn(0);
        }  ///// else if : 오른쪽이동 /////

        // 분기점 : 제자리일경우
        else {
            slide.animate({
                left: -winW + "px"
            }, 200, "easeOutQuint", ()=>{
                cover.hide();
            }); // animate

        } ///// else : 제자리 /////
    }); ////////////////// slide dragstop 이벤트 //////////////////

    /*************************************** 
        함수명 : setSeq
        기능 : 슬라이드에 data-seq 속성값 설정
    ***************************************/
    function setSeq() {
        // 배너 li
        const list = slide.find("li");
        const cnt = list.length;
        // console.log("슬라이드개수:",cnt)
        
        // 조건문
        list.each((idx,ele) => {
            // 처음것을 마지막 순번으로 넣기
            if (idx === 0) {
                $(ele).attr("data-seq", cnt-1) 
            }
            else {
                $(ele).attr("data-seq", idx-1)
            }
        }) //////////// each ////////////
    } /////////// setSeq 함수 ///////////////////

    // 최초호출
    setSeq();

/*************************************** 
    함수명 : addOn
    기능 : data-seq를 조건으로 클래스 on 넣기/빼기
***************************************/
function addOn(seq) { // seq - 읽을 슬라이드
    // 0 - 오른쪽, 2 - 왼쪽 이동
    // 슬라이드 data-seq 읽어오기
    let getseq = slide.find("li").eq(seq).attr("data-seq");
    // console.log("현재순번:",getseq)

    // 해당 슬라이드와 동일순번 블릿에 클래스 on
    indic.eq(getseq).addClass("on")
    .siblings().removeClass("on");
} //////// addOn 함수 ///////

 /***************************************** 
    함수명: vidOn
    기능 : 1) 타겟된 동영상 재생/나머지 멈춤
            2) 하단 타이머 작동
*****************************************/
let num = 0;
function vidOn(seq) {
    // 변수설정
    // 타겟 슬라이드 data-seq 구해오기
    let getseq = slide.find("li").eq(seq).attr("data-seq");
    // 타겟 비디오
    let tgVid = slide.find("li").eq(seq).find("video");
    // 타겟 제외
    let noneTg = tgVid.parent().siblings().find("video");
    // 출력대상
    let chgVar = indic.eq(getseq).find(".bid");
    // 출력제외
    let noneVar = chgVar.parent().siblings().find(".bid");

    // 현재 비디오재생
    play(tgVid);
    // 나머지 비디오 초기화 (멈춤 + 타임업데이트 이벤트 종료)
    noneTg.off("timeupdate",stop(noneTg));

    // 재생함수
    function play(tg) {
        tg.get(0).currentTime = 0;
        tg.get(0).play();
    }
    
    function stop(tg) {
        tg.get(0).pause();
        // 재생시간 초기화
        tg.get(0).currentTime = 0;
        noneVar.css({width: "0"});
    }

    // 타겟영상 timeupdate 이벤트 셋팅
    tgVid.on("timeupdate", vidTimer);

    /****************************************** 
        함수명: vidTimer (vidOn 내부함수)
        기능: timeupdate 등록용 setInterval 기능 함수!
                타겟영상 시간 측정, 대상출력,
                종료시 자동 슬라이드 기능 구현
    ******************************************/
   function vidTimer() {

    // 변수선언
    let nowTime;
    let maxTime;
    let timer;

    // setinterval 할당 변수
    let countNum = setInterval(callback,100);
    // 콜백함수
    function callback() {
        // 비디오 현재 재생시간 변수
        nowTime = tgVid.get(0).currentTime;
        // 비디오 총 재생시간 변수
        maxTime = tgVid.get(0).duration;
        // console.log(nowTime,maxTime)

        timer = (100 * nowTime / maxTime);
        // console.log(timer)

        // 출력
        chgVar.css({width: 3+timer+"%", transition: ".3s linear"})

        // 타이머바 100%일 경우
        if (nowTime === maxTime) {
            // 중복실행 방지위해 타겟영상 정지
            stop(tgVid);
            console.log("타이머바 100%!!");

            // 광드래그 방지 커버 보이기
            cover.show();

            // 왼쪽으로 슬라이드 이동
            slide.animate({
                left: -winW*2 + "px"
            }, 1000, "easeOutQuint", ()=>{
                // 이동후 첫번째 li 이동
                slide.append(slide.find("li").first()).css({left: "-100%"});
                // 커버 제거하기
                cover.hide();
                // 메인배너 타이틀함수 호출!
                showTit();
            }); // animate

            // 블릿 변경함수 호출!
            addOn(2);
            // 영상 재생함수 호출!
            vidOn(2);
            // 배너텍스트 변경함수 호출!
            showTit(2);
            // 한계값시 쌓임방지 인터벌초기화
            clearInterval(countNum);
        } /////// if ////////////

        // 쌓임방지 인터벌초기화
        clearInterval(countNum);
    } //////////// callback 함수 ///////////

   } ////////////////////// vidTimer 함수 ///////////////////////
} ////////////////////// vidOn 함수 //////////////////////

/************************************************** 
    배너 타이틀 데이터 셋팅!
**************************************************/
///////////////////////////////////////
////// 각 배너 등장 타이틀 셋팅 /////////
///////////////////////////////////////
const mainTxtData = {
    "ban1": "Skin Care",
    "ban2": "Recycling",
    "ban3": "Quality",
}; /////////// mainTxtData 객체 ///////////

const subTxtData = {
    "ban1": "자연 에너지를 한 병에 담은 시그니처 테라피<br>이제 집에서도 손쉽게 아로마테라피를 즐겨보세요.",
    "ban2": "자원의 재순환을 위한 제로웨이스트<br>폐도자기를 수거해 새로운 가치를 더합니다.",
    "ban3": "유기농 비건 뷰티 브랜드<br>차별화된 프리미엄 원료를 피부로 직접 느껴보세요.",
}; /////////// subTxtData 객체 ///////////

function showTit() {

    // 대표배너
    const mainBan = slide.find("li").eq(1);
    // 클래스명 읽어오기
    let clsName = mainBan.attr("class");
    // console.log("클래스명:",clsName)
    // 클래스명에 해당하는 객체값 읽어오기
    let mainTxt = mainTxtData[clsName];
    let subTxt = subTxtData[clsName];
    // console.log("메인txt명:",mainTxt,"\n서브txt명:",subTxt);

    // append 초기화
    $(".txtbx").remove();

    // 1. 요소 추가하기
    mainBan.append(`
    <span class="txtbx">
        <h2 class="btit"></h2>
        <p class="stit"></p>
    </span>
    `);

    // 2. 배너넣기
    // 2-1. 공통박스 설정
    mainBan.find(".txtbx").css({
        position: "absolute",
        left: "min(5vw,100px)",
        bottom: "12vh",
        zIndex: "10",
        whiteSpace: "nowrap",
        opacity: "0" // 처음에 투명
    })
    .animate({
        bottom: "15vh",
        opacity: "1",
    },1000);

    // 2-2. .btit / .stit 셋업
    // .btit
    mainBan.find(".btit").html(mainTxt)
    .css({
        font: "min(10vw,100px) var(--aromatica-font-secondary)",
        color: "#fff",
        marginBottom: "20px",
        textShadow: "1px 1px 3px rgb(64 64 64)",
    });
    
    mainBan.find(".stit").html(subTxt)
    .css({
        fontFamily: "var(--aromatica-font-primary)",
        fontSize: "min(3vw,18px)",
        fontWeight: "300",
        lineHeight: "1.8",
        color: "#fff",
        textShadow: "1px 1px 3px rgb(64 64 64)",
    });

} //////// showTit 함수 ///////

// 함수 최초호출 모음!
addOn(1);
vidOn(1);
showTit();

} //////// slideFn 함수 ///////

// 전체 싸고있는 함수 최초호출!
slideFn();