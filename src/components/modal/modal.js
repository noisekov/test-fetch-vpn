const btnModalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
export {modal, body}

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
