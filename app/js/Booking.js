import * as domUtils  from './domUtils';
import Accordion from './Accordion';

class Booking {
    constructor() {
        this.bookingContainer = document.getElementById('booking-container');

        this.bookingIframe = document.createElement('iframe');
        this.bookingIframe.title = 'Форма бронирования гостевого дома'
        this.bookingIframe.src = 'https://litepms.ru/widget/search?id=8483';
        Object.assign(this.bookingIframe.style, {
            width: '1px',
            minWidth: '100%',
            minHeight: '600px',
            height: 'auto'
        });

        this.accordion = new Accordion(this.bookingContainer, this.bookingIframe);
    }
}

export default Booking;