import '../css/main.css';

function ready () {
    console.log('READY');
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



