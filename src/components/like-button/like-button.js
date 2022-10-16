import {modal, body} from '../modal/modal';

const likeBtn = document.querySelector('.like-button');
let likeCounter = document.querySelector('.like-counter__number');
export {likeCounter};

//disabled button and add count like
likeBtn.addEventListener('click', function(){
    likeBtn.setAttribute('disabled','');
    modal.classList.add('show');
    body.classList.add('scroll-blocked')
    let result;
    result = likeCounter.innerHTML;
    +result++
    likeCounter.innerHTML = result;
    localStorage.setItem('likeCount', result)
})

//save like count
// document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('likeCount', 'result')) {
        likeCounter.innerHTML = localStorage.getItem('likeCount', 'result');
        likeBtn.setAttribute('disabled','');
    }
})
