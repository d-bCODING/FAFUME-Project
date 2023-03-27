var slideContainer = document.querySelector('.main-slide');

//슬라이드 모두 담아두는 곳
var slideWrapper = document.querySelector('.slide-wrapper');

//슬라이드들 가져오기
var slideList = document.querySelectorAll('.slide-wrapper > li');

//슬라이드의 개수
var slideCount = slideList.length; //5

//진짜 슬라이드들 가져오기
var realSlide = document.querySelectorAll('.real');

//진짜 슬라이드 개수
var realSlideCount = realSlide.length; //3

//이전 버튼
var prevBtn = document.querySelector('.prev');

//다음 버튼
var nextBtn = document.querySelector('.next');

//페이지 번호 담을 변수
var pageCount = 0;

//selected 바
var selected = document.querySelectorAll('.page-selected > li');
//--------------------------------------------------------

var btnFlag = true;

nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', function () {
    if (btnFlag) {
        btnFlag = false;
        console.log(btnFlag);
        setTimeout(() => {
            btnFlag = true;
        }, 1500);
        pageCount--;
        for (let i = 0; i < slideList.length; i++) {
            slideList[i].classList.remove('on');
            setTimeout(() => {
                if (slideList[i].classList.length == 0) {
                    slideList[i].style.display = "none";
                }
            }, 1200);
            selected[i].classList.remove('on');
        }
        if (pageCount == -1) {
            pageCount = 2;
        }
        slideList[pageCount].style.display = "block";
        setTimeout(() => {
            slideList[pageCount].classList.add('on');
        }, 1);
        selected[pageCount].classList.add('on');
    }
})

function next() {
    if (btnFlag) {
        btnFlag = false
        setTimeout(() => {
            btnFlag = true;
        }, 1500);
        pageCount++;
        for (let i = 0; i < slideList.length; i++) {
            slideList[i].classList.remove('on');
            setTimeout(() => {
                if (slideList[i].classList.length == 0) {
                    slideList[i].style.display = "none";
                }
            }, 1200);
            selected[i].classList.remove('on');
        }
        if (pageCount == 3) {
            pageCount = 0;
        }
        slideList[pageCount].style.display = "block";
        setTimeout(() => {
            slideList[pageCount].classList.add('on');
        }, 1);
        selected[pageCount].classList.add('on');
    }
}



//자동 재생 기능
var autoMove = setInterval(() => {
    autoStop;
    next()
}, 6000);

function auto() {
    clearInterval(autoMove);
    autoMove = setInterval(() => {
        autoStop;
        next()
    }, 6000);
}

//자동 재생 멈춤 기능
function autoStop() {
    clearInterval(autoMove);
}

slideContainer.addEventListener('mouseenter', autoStop)
slideContainer.addEventListener('mouseleave', auto)