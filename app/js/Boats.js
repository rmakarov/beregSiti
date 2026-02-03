import * as domUtils from './domUtils';
import boat1 from '../assets/img/boats/boat1.jpg';
import boat2 from '../assets/img/boats/boat2.jpg';
import botik1 from '../assets/img/boats/botik1.jpg';

const DEFAULT_BOAT1_PRICE = 'Стоимость аренды: 700 руб. день';
const DEFAULT_BOAT2_PRICE = 'Стоимость аренды: 2500 руб. день + ГСМ';
const DEFAULT_BOTIK1_PRICE = 'Стоимость прогулки на лодке 1500 руб. час';

class Boats {
    constructor(boatsData) {
        console.log('boatsData?.boat1?.price: ', boatsData?.boat1?.price);
        console.log('boatsData?.boat2?.price: ', boatsData?.boat2?.price);
        console.log('boatsData?.botik?.price: ', boatsData?.botik?.price);
        const BOAT1_PRICE = boatsData?.boat1?.price || DEFAULT_BOAT1_PRICE;
        const BOAT2_PRICE = boatsData?.boat2?.price || DEFAULT_BOAT2_PRICE;
        const BOTIK1_PRICE = boatsData?.botik1?.price || DEFAULT_BOTIK1_PRICE;
        this.boatsContainer = document.getElementById('boats-section');
        this.boat1Section = domUtils.addBlock(this.boatsContainer, {class: 'boat-section'});
        this.boat2Section = domUtils.addBlock(this.boatsContainer, {class: 'boat-section'});
        domUtils.addTextBlock('Весельная лодка', this.boat1Section, {class: 'responsive-text'});
        domUtils.addTextBlock('Лодка с мотором (9,9 л.с)', this.boat2Section, {class: 'responsive-text'});
        domUtils.addImage(boat1, this.boat1Section, {alt: 'Весельная лодка'});
        domUtils.addTextBlock(BOAT1_PRICE, this.boat1Section, {class: 'responsive-text'});
        domUtils.addImage(boat2, this.boat2Section, {alt: 'Лодка с мотором (9,9 л.с)'});
        domUtils.addTextBlock(BOAT2_PRICE, this.boat2Section, {class: 'responsive-text'});

        this.boticContainer = document.getElementById('botic-section');
        this.botic1Section = domUtils.addBlock(this.boticContainer, {class: 'boat-section'});
        domUtils.addImage(botik1, this.botic1Section, {alt: 'Весельная лодка'});
        domUtils.addTextBlock(BOTIK1_PRICE, this.botic1Section, {class: 'responsive-text'});
    }
}

export default Boats;

