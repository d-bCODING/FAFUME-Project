/* brand-item */

//브랜드 로고 누를 때 반응
var brands = document.querySelectorAll('.brand-info');
var brandItem = document.querySelectorAll('.item-wrap');
// console.log(brandItem);

brandItem[0].style.display="block";

brands.forEach(brand => {
   brand.addEventListener('click',function(){

      //브랜드명 클릭시 로고 확대(on 클래스 삽입)
      for (let i = 0; i < brands.length; i++) {
         if ((brands[i].getAttribute('class').includes('on')) == true) {
            brands[i].classList.remove('on');
         }
      }this.classList.add('on');

      // 브랜드명 클릭시 해당 브랜드명에 해당하는 item-wrap 불러오기
      for (let i = 0; i < brandItem.length; i++) {
         if (brandItem[i].classList[1] == this.classList[1]) {
            brandItem[i].style.display="block";
         }else{
            brandItem[i].style.display="none";
         }
      }
   })
})

//각 브랜드별 아이템 사진 넣기
var jomalonImg = document.querySelectorAll('.item-wrap.jomalone .item-info a .item-img');
for (let i = 0; i < jomalonImg.length; i++) {
   jomalonImg[i].style.background = 'url("../images/jomalone/jomalone'+ (i+1) +'.png") no-repeat center center / auto 300px';
}

var maisonImg = document.querySelectorAll('.item-wrap.maison .item-info a .item-img');
for (let i = 0; i < maisonImg.length; i++) {
   maisonImg[i].style.background = 'url("../images/maison/maison'+ (i+1) +'.png") no-repeat center center / auto 300px';
}

var byredoImg = document.querySelectorAll('.item-wrap.byredo .item-info a .item-img');
for (let i = 0; i < maisonImg.length; i++) {
   byredoImg[i].style.background = 'url("../images/byredo/byredo'+ (i+1) +'.png") no-repeat center center / auto 300px';
}

var tomfordImg = document.querySelectorAll('.item-wrap.tomford .item-info a .item-img');
for (let i = 0; i < tomfordImg.length; i++) {
   tomfordImg[i].style.background = 'url("../images/tomford/tomford'+ (i+1) +'.png") no-repeat center center / auto 300px';
}

var kennethImg = document.querySelectorAll('.item-wrap.kenneth .item-info a .item-img');
for (let i = 0; i < kennethImg.length; i++) {
   kennethImg[i].style.background = 'url("../images/kenneth/kenneth'+ (i+1) +'.png") no-repeat center center / auto 300px';
}

var kilianImg = document.querySelectorAll('.item-wrap.kilian .item-info a .item-img');
for (let i = 0; i < kilianImg.length; i++) {
   kilianImg[i].style.background = 'url("../images/kilian/kilian'+ (i+1) +'.png") no-repeat center center / auto 300px';
}



