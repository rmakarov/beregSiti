import '../css/main.css';
import Modal from './Modal';
import Gallery from './Gallery';
import Apartmens from './Apartmens';
import Booking from './Booking';
import Boats from './Boats';

let modal = null;
let galery = null;
let apartmens = null;
let booking = null;
let boats = null;
let apartmentsData = null;
let boatsData = null;

document.addEventListener('DOMContentLoaded', ready, false );

function ready() {
    loadJsonFile('site.json')
        .then(data => {
            initApp(data.apartments, data.boats);
        })
        .catch(error => {
            console.error('Failed to load:', error);
        });
}

function initApp(apartmentsData, boatsData) {
    modal = new Modal();
    galery = new Gallery(modal);
    apartmens = new Apartmens(modal, apartmentsData);
    booking = new Booking();
    boats = new Boats(boatsData);

    const navLinks = document.getElementsByClassName('nav-link');
    for (const navLink of navLinks) {
        navLink.addEventListener('click', (e) => {
            const anchor = e.target.getAttribute('data-anchor');
            scrollToElement(anchor);
        });
    }
}

async function loadJsonFile(filename) {
    try {
        const response = await fetch(`json/${filename}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading JSON file:', error);
        throw error;
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



