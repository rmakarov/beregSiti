import '../css/main.css';
import Modal from './Modal';
import Gallery from './Gallery';
import Apartmens from './Apartmens';

let modal = null;
let galery = null;
let apartmens = null;

document.addEventListener('DOMContentLoaded', ready, false );

function ready() {
    modal = new Modal();
    galery = new Gallery(modal);
    apartmens = new Apartmens(modal);

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



