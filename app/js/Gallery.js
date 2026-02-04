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
import view15 from "../assets/img/gallery/gallery15.jpg";
import view16 from "../assets/img/gallery/gallery16.jpg";
import view17 from "../assets/img/gallery/gallery17.jpg";
import view18 from "../assets/img/gallery/gallery18.jpg";
import view19 from "../assets/img/gallery/gallery19.jpg";
import view20 from "../assets/img/gallery/gallery20.jpg";

const GALLERY_ICON_WIDTH = 180;
const GALLERY_ICON_HEIGHT = 136;
const VIEW_GALERY = [view1, view2, view3, view4, view5, view6, view7, view8, view9, view10, view11, view12, view13, view14,
    view15, view16, view17, view18, view19, view20];

class Gallery {
    constructor(modal) {
        this.galleryContainer = document.getElementById('gallery-container');
        this.modal = modal;

        this.getIconSize = () => {
            const width = window.innerWidth;
            if (width <= 576) {
                return { width: GALLERY_ICON_WIDTH * 0.5, height: GALLERY_ICON_HEIGHT * 0.5 };
            } else if (width <= 768) {
                return { width: GALLERY_ICON_WIDTH * 0.75, height: GALLERY_ICON_HEIGHT * 0.75 };
            }
            return { width: GALLERY_ICON_WIDTH, height: GALLERY_ICON_HEIGHT };
        };

        // Функция для обновления размеров иконки
        const updateIconSize = (img) => {
            let initialWidth = img.width;
            let initialHeight = img.height;
            const { width: targetWidth, height: targetHeight } = this.getIconSize();
            let scale = Math.min(targetWidth / initialWidth, targetHeight / initialHeight);

            img.width = initialWidth * scale;
            img.height = initialHeight * scale;
        };

        VIEW_GALERY.forEach((imgName, index) => {
            const galleryWrapper = document.createElement('div');
            galleryWrapper.className = 'gallery-icon-wrapper';
            const galleryImg = document.createElement('img');
            galleryImg.src = imgName;
            galleryImg.alt = `Иконка галереи ${index+1}`;

            galleryImg.onload = (e) => {
                updateIconSize(e.target);
            };

            galleryImg.addEventListener('click', () => {
                this.showGalleryItem(imgName, index);
            });

            galleryWrapper.append(galleryImg);
            this.galleryContainer.append(galleryWrapper);
        });

        window.addEventListener('resize', () => {
            const icons = this.galleryContainer.querySelectorAll('img');
            icons.forEach(img => {
                if (img.complete) {
                    updateIconSize(img);
                }
            });
        });

    }

    showGalleryItem(imgName, index) {
        this.modal.setModalContent(index, VIEW_GALERY);
        this.modal.showModal();
    };
}

export default Gallery;