const btnModalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');

export {modal, body, modalTitle, modalText}

btnModalClose.addEventListener('click', btnCloseModal);

function btnCloseModal () {
    modal.classList.remove('show');
    body.classList.remove('scroll-blocked');
}

modal.addEventListener('click', closeWithoutModalWindow);

function closeWithoutModalWindow (evt) {
    if (!evt.target.closest('.modal-window')){
        modal.classList.remove('show');
        body.classList.remove('scroll-blocked');
    }
}
