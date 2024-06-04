let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumb = document.querySelectorAll('.thumb .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider()
}

prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem -1
    }
    showSlider();
}

function showSlider(){
    let itemActiveoLD = document.querySelector('.slider .list .item.active');
    let thumbActiveOld = document.querySelector('.thumb .item.active')
    itemActiveoLD.classList.remove('active')
    thumbActiveOld.classList.remove('active')


    items[itemActive].classList.add('active');
    thumb[itemActive].classList.add('active')
}