import './main.scss';
import './components/like-button/like-button';
import {modalTitle, modalText} from './components/modal/modal';
import {likeCounter} from './components/like-button/like-button';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',

    speed: 1500,
    // spaceBetween: 100,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

async function request() {
    let response = await fetch("https://private-anon-d93a744d8e-grchhtml.apiary-mock.com/slides?offset=0&limit=3")
    let result = await response.json();
    let data = result.data;
    let getImg = [];
    let getTitle = [];
    let getDesc = [];
    let getLikeCnt = [];
    data.forEach(element => {
      getImg.push(element.imgUrl); 
    });
    data.forEach(element => {
      getTitle.push(element.title); 
    });
    data.forEach(element => {
      getDesc.push(element.desc); 
    });
    data.forEach(element => {
      getLikeCnt.push(element.likeCnt); 
    });
    return [getImg, getTitle, getDesc, getLikeCnt]
}

const imgForSwiper1 = document.querySelector('.swiper-slide__img-first img');
const imgForSwiper2 = document.querySelector('.swiper-slide__img-second img');
const imgForSwiper3 = document.querySelector('.swiper-slide__img-third img');

request()
  .then(result => {
    //parse img 
    imgForSwiper1.src = result[0][0];
    imgForSwiper2.src = result[0][1];
    imgForSwiper3.src = result[0][2];
    //parse title into modalWindow
    modalTitle.innerHTML = result[1][0];
    //parse description into modalWindow
    modalText.innerHTML = result[2][0];
    //parse like count
    likeCounter.innerHTML = result[3][0];
  })

  .catch(err => {console.log("server err")});


