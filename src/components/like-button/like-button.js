import {modal} from '../modal/modal';

const likeBtn = document.querySelector('.like-button');

likeBtn.addEventListener('click', function(){
    likeBtn.setAttribute('disabled','');
    modal.classList.add('show');
})