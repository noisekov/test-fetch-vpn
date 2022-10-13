const btnModalClose = document.querySelector('.modal-close');

btnModalClose.addEventListener('click', btnCloseModal);

function btnCloseModal () {
    modal.classList.remove('show');
}


const modal = document.querySelector('.modal');
export {modal}

modal.addEventListener('click', closeWithoutModalWindow);

function closeWithoutModalWindow (evt) {
    if (!evt.target.closest('.modal-window')){
        modal.classList.remove('show');
    }
}
