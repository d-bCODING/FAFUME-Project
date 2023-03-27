var list = document.querySelectorAll('.perfume-top-list li');
var info = document.querySelectorAll('.perfume-explain ul li');

info[0].style.display = "block";

list.forEach((li, index) => {
    li.addEventListener('click', function(){
        for (let i = 0; i < info.length; i++) {
            info[i].style.display = "none";
            info[i].classList.remove('on');
            list[i].classList.remove('on');
        }

        info[index].style.display = "block";
        setTimeout(() => {
            info[index].classList.add('on');
        }, 1);
        li.classList.add('on');
    })
})