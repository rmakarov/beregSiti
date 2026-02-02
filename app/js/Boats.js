import * as domUtils from './domUtils';
import boat1 from '../assets/img/boats/boat1.jpg';
import boat2 from '../assets/img/boats/boat2.jpg';
import botik1 from '../assets/img/boats/botik1.jpg';

class Boats {
    constructor() {
        this.boatsContainer = document.getElementById('boats-section');
        this.boat1Section = domUtils.addBlock(this.boatsContainer, {class: 'boat-section'});
        this.boat2Section = domUtils.addBlock(this.boatsContainer, {class: 'boat-section'});
        domUtils.addTextBlock('Весельная лодка', this.boat1Section, {class: 'responsive-text'});
        domUtils.addTextBlock('Лодка с мотором (9,9 л.с)', this.boat2Section, {class: 'responsive-text'});
        domUtils.addImage(boat1, this.boat1Section, {alt: 'Весельная лодка'});
        domUtils.addTextBlock('Стоимость аренды: 700 руб. день', this.boat1Section, {class: 'responsive-text'});
        domUtils.addImage(boat2, this.boat2Section, {alt: 'Лодка с мотором (9,9 л.с)'});
        domUtils.addTextBlock('Стоимость аренды: 2500 руб. день + ГСМ', this.boat2Section, {class: 'responsive-text'});

        this.boticContainer = document.getElementById('botic-section');
        this.botic1Section = domUtils.addBlock(this.boticContainer, {class: 'boat-section'});
        domUtils.addImage(botik1, this.botic1Section, {alt: 'Весельная лодка'});
        domUtils.addTextBlock('Стоимость прогулки на лодке 1500 руб. час', this.botic1Section, {class: 'responsive-text'});
    }
}

export default Boats;

