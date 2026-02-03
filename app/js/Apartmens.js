import * as domUtils  from './domUtils';
import house1 from '../assets/img/apartmens/house1.jpg';
import house2 from '../assets/img/apartmens/house2.jpg';
import house1wiew1 from '../assets/img/apartmens/house1view/house1_view1.jpg';
import house1wiew2 from '../assets/img/apartmens/house1view/house1_view2.jpg';
import house1wiew3 from '../assets/img/apartmens/house1view/house1_view3.jpg';
import house1wiew4 from '../assets/img/apartmens/house1view/house1_view4.jpg';
import house1wiew5 from '../assets/img/apartmens/house1view/house1_view5.jpg';

import house2wiew1 from '../assets/img/apartmens/house2view/house2_view1.jpg';
import house2wiew2 from '../assets/img/apartmens/house2view/house2_view2.jpg';
import house2wiew3 from '../assets/img/apartmens/house2view/house2_view3.jpg';
import house2wiew4 from '../assets/img/apartmens/house2view/house2_view4.jpg';

const HOUSE1_WIEW = [house1wiew1, house1wiew2, house1wiew3, house1wiew4, house1wiew5 ];
const HOUSE2_WIEW = [house2wiew1, house2wiew2, house2wiew3, house2wiew4 ];
const HOUSE_YELLOW = 'Дом №1 (желтый)';
const DEFAULT_HOUSE_YELLOW_PRICE = 'Стоимость в сутки: 5000 руб. Животные +500 руб. к общей сумме(по договоренности)';
const HOUSE_GREEN = 'Дом №2 (зеленый)';
const DEFAULT_HOUSE_GREEN_PRICE = 'Стоимость в сутки: 5000 руб. Животные +500 руб. к общей сумме(по договоренности)';

class Apartmens {
    constructor(modal, apartmentsData) {
        const HOUSE_YELLOW_PRICE = apartmentsData?.home1?.price || DEFAULT_HOUSE_YELLOW_PRICE;
        const HOUSE_GREEN_PRICE = apartmentsData?.home2?.price || DEFAULT_HOUSE_GREEN_PRICE;
        this.apartmensContainer = document.getElementById('apartmens-container');
        this.modal = modal;

        this.aparmenYellow = domUtils.addBlock(this.apartmensContainer, {class: 'apartment-section'})

        domUtils.addTextBlock(HOUSE_YELLOW, this.aparmenYellow, {class: 'responsive-text'});
        this.aparmenYellowScreen = domUtils.addImage(house1, this.aparmenYellow, {alt: 'Дом №1 (желтый)', style: "cursor: pointer"});
        domUtils.addTextBlock(HOUSE_YELLOW_PRICE, this.aparmenYellow, {class: 'responsive-text'} );

        this.aparmenGreen = domUtils.addBlock(this.apartmensContainer, {class: 'apartment-section'});

        domUtils.addTextBlock(HOUSE_GREEN, this.aparmenGreen, {class: 'responsive-text'});
        this.aparmenGreenScreen = domUtils.addImage(house2, this.aparmenGreen, {alt: 'Дом №2 (зеленый)', style: "cursor: pointer"});
        domUtils.addTextBlock(HOUSE_GREEN_PRICE, this.aparmenGreen, {class: 'responsive-text'});

        this.aparmenYellowScreen.addEventListener('click', () => {
            this.modal.setModalContent(0, HOUSE1_WIEW);
            this.modal.showModal();
        });

        this.aparmenGreenScreen.addEventListener('click', () => {
            this.modal.setModalContent(0, HOUSE2_WIEW);
            this.modal.showModal();
        });
    }
}

export default Apartmens;