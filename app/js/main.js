import '../css/main.css';
import imagesJson from '../assets/img/gallery/gallery.json'


function ready () {
    console.log('READY');
    console.log('imagesJson: ', imagesJson)
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

document.addEventListener("DOMContentLoaded", ready);



