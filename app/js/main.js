import '../css/main.css';
import view1 from '../assets/img/gallery/gallery1.jpg'
import view2 from '../assets/img/gallery/gallery2.jpg'
import view3 from '../assets/img/gallery/gallery3.jpg'
import view4 from '../assets/img/gallery/gallery4.jpg'
import view5 from '../assets/img/gallery/gallery5.jpg'
import view6 from '../assets/img/gallery/gallery6.jpg'
import view7 from '../assets/img/gallery/gallery7.jpg'
import view8 from '../assets/img/gallery/gallery8.jpg'
import view9 from '../assets/img/gallery/gallery9.jpg'
import view10 from '../assets/img/gallery/gallery10.jpg'
import view11 from '../assets/img/gallery/gallery11.jpg'
import view12 from '../assets/img/gallery/gallery12.jpg'
import view13 from '../assets/img/gallery/gallery13.jpg'
import view14 from '../assets/img/gallery/gallery14.jpg'

const GALLERY_ICON_WIDTH = 180;
const GALLERY_ICON_HEIGHT = 136;
const VIEW_GALERY = [view1, view2, view3, view4, view5, view6, view7, view8, view9, view10, view11, view12, view13, view14];
const DEFAULT_MODAL_CONTENT = {
    position: 0,
    content: []
}

let MODAL_CONTENT = DEFAULT_MODAL_CONTENT

document.addEventListener('DOMContentLoaded', ready, false );


function ready() {
    renderGallery();

    const navLinks = document.getElementsByClassName('nav-link');
    for(const navLink of navLinks) {
        navLink.addEventListener('click', (e) => {
            const anchor = e.target.getAttribute('data-anchor');
            scrollToElement(anchor);
        });
    }
}

function scrollToElement (elementId)  {
    const element = document.getElementById(elementId);
    if(element){
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        })
    }
}

function renderGallery() {
    const galleryContainer = document.getElementById('gallery-container');

    VIEW_GALERY.forEach((imgName, index) => {
        const galleryWrapper = document.createElement('div');
        galleryWrapper.className = 'gallery-icon-wrapper';
        const galleryImg = document.createElement('img');
        galleryImg.src = imgName;
        galleryImg.alt = imgName;

        galleryImg.onload = (e) => {
            let initialWidth = e.target.width;
            let initialHeight = e.target.height;
            let scale = Math.min(GALLERY_ICON_WIDTH/initialWidth, GALLERY_ICON_HEIGHT /initialHeight);

            e.target.width = initialWidth * scale;
            e.target.height = initialHeight * scale;
        };
        galleryImg.addEventListener('click', () => {
            showGalleryItem(imgName, index)
        });
        galleryWrapper.append(galleryImg);
        galleryContainer.append(galleryWrapper);
    });
}

function showGalleryItem(imgName, index){
    MODAL_CONTENT = {
        position: index,
        content: VIEW_GALERY
    }
    showModal();
}

function showModal() {
    const modal = document.querySelector('.modal');

    createImageContent();

    const closeModalButton = document.querySelector('.modalCloseButton');
    const modalPrevButton = document.querySelector('.modalPrevButton');
    const modalNextButton = document.querySelector('.modalNextButton');

    modal.classList.add('active');

    closeModalButton.addEventListener('click', (e) => {
        closeModal();
    });

    enableModalControlsButtons(modalPrevButton, modalNextButton);

    modalPrevButton.addEventListener('click', (e) => {
        if( MODAL_CONTENT.position >= 0 ){
            MODAL_CONTENT.position -=1;
            createImageContent();
            enableModalControlsButtons(modalPrevButton, modalNextButton);
        }
    });

    modalNextButton.addEventListener('click', (e) => {
        if( MODAL_CONTENT.position <= MODAL_CONTENT.content.length - 1 ){
            MODAL_CONTENT.position +=1;
            createImageContent();
            enableModalControlsButtons(modalPrevButton, modalNextButton);
        }
    });
}

function enableModalControlsButtons(modalPrevButton, modalNextButton) {
    if(modalPrevButton) {
        modalPrevButton.disabled = (MODAL_CONTENT.position === 0);
    }

    if(modalNextButton) {
        modalNextButton.disabled = (MODAL_CONTENT.position === MODAL_CONTENT.content.length-1);
    }
}

function createImageContent() {
    if(MODAL_CONTENT.content.length){
        const imgContent = document.createElement('img');
        imgContent.src = MODAL_CONTENT.content[MODAL_CONTENT.position];
        addModalContent(imgContent);
    }
}

function addModalContent(content) {
    const modalContent = document.querySelector('.modalContent');
    if (modalContent) {
        modalContent.innerHTML = '';
        modalContent.appendChild(content);
    }
}

function closeModal() {
    MODAL_CONTENT = DEFAULT_MODAL_CONTENT;
    const modal = document.querySelector('.modal');

    modal.classList.remove('active');
}




