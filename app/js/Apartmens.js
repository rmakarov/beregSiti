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

class Apartmens {
    constructor(modal) {
        this.apartmensContainer = document.getElementById('apartmens-container');
        this.modal = modal;
        this.aparmenYellow = document.createElement('div');
        this.aparmenYellowScreen = document.createElement('img');
        this.aparmenYellowScreen.src = house1;
        this.aparmenYellowScreen.alt = 'Дом №1';
        this.aparmenYellow.appendChild(this.aparmenYellowScreen);

        this.aparmenGreen = document.createElement('div');
        this.aparmenGreenScreen = document.createElement('img');
        this.aparmenGreenScreen.src = house2;
        this.aparmenGreenScreen.alt = 'Дом №2';
        this.aparmenGreen.appendChild(this.aparmenGreenScreen);

        this.apartmensContainer.appendChild(this.aparmenYellow);
        this.apartmensContainer.appendChild(this.aparmenGreen);
    }
}

export default Apartmens;