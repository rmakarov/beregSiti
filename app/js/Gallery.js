import view1 from "../assets/img/gallery/gallery1.jpg";
import view2 from "../assets/img/gallery/gallery2.jpg";
import view3 from "../assets/img/gallery/gallery3.jpg";
import view4 from "../assets/img/gallery/gallery4.jpg";
import view5 from "../assets/img/gallery/gallery5.jpg";
import view6 from "../assets/img/gallery/gallery6.jpg";
import view7 from "../assets/img/gallery/gallery7.jpg";
import view8 from "../assets/img/gallery/gallery8.jpg";
import view9 from "../assets/img/gallery/gallery9.jpg";
import view10 from "../assets/img/gallery/gallery10.jpg";
import view11 from "../assets/img/gallery/gallery11.jpg";
import view12 from "../assets/img/gallery/gallery12.jpg";
import view13 from "../assets/img/gallery/gallery13.jpg";
import view14 from "../assets/img/gallery/gallery14.jpg";

const GALLERY_ICON_WIDTH = 180;
const GALLERY_ICON_HEIGHT = 136;
const VIEW_GALERY = [view1, view2, view3, view4, view5, view6, view7, view8, view9, view10, view11, view12, view13, view14];

class Gallery {
    constructor(modal) {
        this.galleryContainer = document.getElementById('gallery-container');
        this.modal = modal;
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
                this.showGalleryItem(imgName, index);
            });
            galleryWrapper.append(galleryImg);
            this.galleryContainer.append(galleryWrapper);
        });

    }

    showGalleryItem(imgName, index) {
        this.modal.setModalContent(index, VIEW_GALERY);
        this.modal.showModal();
    };
}

export default Gallery;