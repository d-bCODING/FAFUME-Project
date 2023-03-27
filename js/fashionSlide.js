// var prevBtn = document.querySelector('.f-prev');
// var nextBtn = document.querySelector('.f-next');
// var moveWidth = 386.5;

// var slideContainer = document.querySelector('.fashion-slide');

// var currentPos = -1159.5;

// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// function prevSlide() {
//     if (currentPos == 0) {
//         currentPos = currentPos - (moveWidth * 6);
//         slideContainer.style.transition = "0s";
//         slideContainer.style.transform = "translate(" + currentPos + "px)";
//         setTimeout(function(){
//             slideContainer.style.transition = "500ms";
//             currentPos += moveWidth;
//             slideContainer.style.transform = "translate(" + currentPos + "px)";
//         },0.01)
//     } else {
//         currentPos += moveWidth;
//         slideContainer.style.transform = "translate(" + currentPos + "px)";
//     }
// }

// function nextSlide() {
//     if (currentPos == -2319) {
//         currentPos = 0;
//         slideContainer.style.transition = "0s";
//         slideContainer.style.transform = "translate(" + currentPos + "px)";
//         setTimeout(function(){
//             slideContainer.style.transition = "500ms";
//             currentPos -= moveWidth;
//             slideContainer.style.transform = "translate(" + currentPos + "px)";
//         },0.01)
//     }
//     else{
//         currentPos -= moveWidth;
//         slideContainer.style.transform = "translate(" + currentPos + "px)";
//     }
// }

// var ex1 = document.querySelectorAll('.ex1');
// var ex2 = document.querySelectorAll('.ex2');
// var ex3 = document.querySelectorAll('.ex3');

// for (let i = 0; i < ex1.length; i++) {
//     ex1[i].style.background = "url('../images/fashion/fashion1.png') no-repeat center center / 350px auto";
// }

// for (let i = 0; i < ex2.length; i++) {
//     ex2[i].style.background = "url('../images/fashion/fashion2.png') no-repeat center center / 350px auto";
// }

// for (let i = 0; i < ex3.length; i++) {
//     ex3[i].style.background = "url('../images/fashion/fashion3.png') no-repeat center center / 350px auto";
// }