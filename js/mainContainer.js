var prevBtn = document.querySelector('.f-prev');
var nextBtn = document.querySelector('.f-next');
var moveWidth = 386.5;

var slideContainer = document.querySelector('.fashion-slide');

var currentPos = -1159.5;

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide() {
    if (currentPos == 0) {
        currentPos = currentPos - (moveWidth * 6);
        slideContainer.style.transition = "0s";
        slideContainer.style.transform = "translate(" + currentPos + "px)";
        setTimeout(function(){
            slideContainer.style.transition = "500ms";
            currentPos += moveWidth;
            slideContainer.style.transform = "translate(" + currentPos + "px)";
        },0.01)
    } else {
        currentPos += moveWidth;
        slideContainer.style.transform = "translate(" + currentPos + "px)";
    }
}

function nextSlide() {
    if (currentPos == -2319) {
        currentPos = 0;
        slideContainer.style.transition = "0s";
        slideContainer.style.transform = "translate(" + currentPos + "px)";
        setTimeout(function(){
            slideContainer.style.transition = "500ms";
            currentPos -= moveWidth;
            slideContainer.style.transform = "translate(" + currentPos + "px)";
        },0.01)
    }
    else{
        currentPos -= moveWidth;
        slideContainer.style.transform = "translate(" + currentPos + "px)";
    }
}

var ex1 = document.querySelectorAll('.ex1');
var ex2 = document.querySelectorAll('.ex2');
var ex3 = document.querySelectorAll('.ex3');

for (let i = 0; i < ex1.length; i++) {
    ex1[i].style.background = "url('./images/fashion/shadow1.png') no-repeat center center / 350px auto";
}

for (let i = 0; i < ex2.length; i++) {
    ex2[i].style.background = "url('./images/fashion/shadow2.png') no-repeat center center / 350px auto";
}

for (let i = 0; i < ex3.length; i++) {
    ex3[i].style.background = "url('./images/fashion/shadow3.png') no-repeat center center / 350px auto";
}

//-------------------------------------------------------------------------

var brandWrapper = document.querySelector('.brand-wrapper');
var brandList = document.querySelector('.brand-list');
var brandNames = document.querySelectorAll('.brand-name');
var brand = document.querySelectorAll('.brand-list li');
var isOn1 = false;
var isOn2 = false;

var itemName = document.querySelector('.item-list');
var brandName = document.querySelectorAll('.item-brand');
var itemWrapper = document.querySelector('.item-wrapper');
var itemList = document.querySelector('.item-list');

var perfumeImg = document.querySelector('.perfume-img');
var imgSrc = "";

var alert1 = document.querySelector('.alert');

var cycle = true;

brandWrapper.addEventListener('click', function () {
    if (!isOn1) {
        brandList.classList.add('on');
        isOn1 = true;
    } else {
        brandList.classList.remove('on');
        isOn1 = false;
    }
})

itemWrapper.addEventListener('click', function () {
    if (!isOn2) {
        itemList.classList.add('on');
        isOn2 = true;
    } else {
        itemList.classList.remove('on');
        isOn2 = false;
    }
})

brand.forEach((li, index) => {
    li.addEventListener('click', function () {
        //브랜드 선택 시 이전 제품 선택 이력 초기화(글자만)
        itemWrapper.firstElementChild.innerHTML = "제품 선택";
        //선택한 브랜드의 이름 맨 상단부에 입력
        brandWrapper.firstElementChild.innerHTML = this.innerText;
        //imgSrc주소 초기화 및 브랜드명까지 설정해서 저장 (이후 제품 번호만 저장하면 끝)
        imgSrc = findBrandName(this.innerText);
        //제품 선택시에 주소가 중첩되는 문제를 방지하고자 초기화용 주소 별도 저장
        var reImgSrc = imgSrc;
        //브랜드 선택시마다 해당 제품 리스트 초기화 및 불러오기
        itemName.innerHTML = "";
        brandName.forEach((brand) => {
            if (brand.innerHTML == brandWrapper.firstElementChild.innerHTML) {
                itemName.innerHTML += "<li>" + brand.nextElementSibling.innerHTML + "</li>"
            }
        })

        //브랜드 설정을 먼저 해야 제품 리스트가 생겨, 이후에 객체를 불러올 수 있다.
        var item = document.querySelectorAll('.item-list li');
        item.forEach((li, index) => {
            li.addEventListener('click', function () {
                //제품 선택시 주소 초기화
                imgSrc = reImgSrc;
                //선택한 제품의 이름 맨 상단부에 입력
                itemWrapper.firstElementChild.innerHTML = this.innerText;
                //imgSrc에 제품명까지 설정해서 저장 (경로 완성)
                imgSrc += (index + 1) + ".png";
                //완성된 경로 활용하여 제품사진 변경
                perfumeImg.style.background = 'url("' + imgSrc + '") no-repeat center center / auto 350px';
           
                alert1.style.display = "none";
                
                if (cycle) {
                    for (let i = 0; i < ex1.length; i++) {
                        ex1[i].style.background = "url('../images/fashion/fashion1.png') no-repeat center center / 350px auto";
                    }
                    
                    for (let i = 0; i < ex2.length; i++) {
                        ex2[i].style.background = "url('../images/fashion/fashion2.png') no-repeat center center / 350px auto";
                    }
                    
                    for (let i = 0; i < ex3.length; i++) {
                        ex3[i].style.background = "url('../images/fashion/fashion3.png') no-repeat center center / 350px auto";
                    }
                    cycle = false;
                }else{
                    for (let i = 0; i < ex1.length; i++) {
                        ex1[i].style.background = "url('../images/fashion/fashion4.png') no-repeat center center / 350px auto";
                    }
                    
                    for (let i = 0; i < ex2.length; i++) {
                        ex2[i].style.background = "url('../images/fashion/fashion5.png') no-repeat center center / 350px auto";
                    }
                    
                    for (let i = 0; i < ex3.length; i++) {
                        ex3[i].style.background = "url('../images/fashion/fashion6.png') no-repeat center center / 350px auto";
                    }
                    cycle = true;
                }
            })
        })
    })
})

function findBrandName(brandName) {
    imgSrc = "";
    for (let i = 0; i < brandNames.length; i++) {
        if (brandNames[i].innerText == brandName) {
            var brand = brandNames[i].parentElement.parentElement.classList[1];
            imgSrc += "../images/" + brand + "/" + brand;
        }
    }
    return imgSrc;
}

//----------------------------------------------------------------------------

