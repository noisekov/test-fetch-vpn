import './main.scss';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

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
    let result = await response.json()
    let data = result.data
    let getImg = []
    data.forEach(element => {
      getImg.push(element.imgUrl) 
    });
    return getImg
}

const sliderForSwiper = document.querySelectorAll('.swiper-slide__img')
let img = new Image()

sliderForSwiper.forEach(elemImg => {
  elemImg.append(img)
})

request()
  .then(result => {
    result.forEach(res => img.src = res) 
  })
  .catch(err => {console.log("server err")})


