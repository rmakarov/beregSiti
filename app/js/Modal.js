
const DEFAULT_MODAL_CONTENT = {
    position: 0,
    content: []
};
let MODAL_CONTENT = DEFAULT_MODAL_CONTENT;

class Modal {
    constructor () {
        this.modal = document.querySelector('.modal');
        this.modalOverlay = document.querySelector('.modalOverlay');
        this.closeModalButton = document.querySelector('.modalCloseButton');
        this.modalPrevButton = document.querySelector('.modalPrevButton');
        this.modalNextButton = document.querySelector('.modalNextButton');

        this.modalOverlay.addEventListener('click', (e) => {
            this.closeModal();
        });

        this.closeModalButton.addEventListener('click', () => {
            this.closeModal();
        });

        this.modalPrevButton.addEventListener('click', () => {
            if( MODAL_CONTENT.position >= 0 ){
                MODAL_CONTENT.position -=1;
                this.createImageContent();
                this.enableModalControlsButtons();
            }
        });

        this.modalNextButton.addEventListener('click', () => {
            if( MODAL_CONTENT.position <= MODAL_CONTENT.content.length - 1 ) {
                MODAL_CONTENT.position +=1;
                this.createImageContent();
                this.enableModalControlsButtons();
            }
        });
    };

    setModalContent(index, content) {
        MODAL_CONTENT = {
            position: index,
            content: content
        };
    };

    showModal() {
        this.createImageContent();
        document.body.classList.add('modal-open');
        this.modal.classList.add('active');
        this.enableModalControlsButtons();
    };

    closeModal() {
        MODAL_CONTENT = DEFAULT_MODAL_CONTENT;

        document.body.classList.remove('modal-open');
        this.modal.classList.remove('active');
    };

    createImageContent() {
        if (MODAL_CONTENT.content.length) {
            const imgContent = document.createElement('img');
            imgContent.src = MODAL_CONTENT.content[MODAL_CONTENT.position];
            this.addModalContent(imgContent);
        };
    };

    addModalContent(content) {
        const modalContent = document.querySelector('.modalContent');
        if (modalContent) {
            modalContent.innerHTML = '';
            modalContent.appendChild(content);
        };
    };

    enableModalControlsButtons() {
        if(this.modalPrevButton) {
            this.modalPrevButton.disabled = (MODAL_CONTENT.position === 0);
        };

        if(this.modalNextButton) {
            this.modalNextButton.disabled = (MODAL_CONTENT.position === MODAL_CONTENT.content.length-1);
        };
    };
};

export default Modal;