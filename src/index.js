import "./styles.css";
import imgSrc from "./images/kode.jpg";

class Carousel {
    constructor(selector, interval = 5000) {
        this.carousel = document.querySelector(selector);
        this.slideContainer = this.carousel.querySelector("div.slides");
        this.images = this.carousel.querySelectorAll("img");
        this.interval = interval;
        this.current = 0;

        this.init();
    }

    hideAllImages() {
        this.images.forEach((img) => {
            img.style.visibility = "hidden";
            img.style.position = "absolute";
        });
    }

    showCurrentImage() {
        this.images[this.current].style.visibility = "visible";
        this.images[this.current].style.position = "static";
    }

    autoSlide() {

        const slide = () => {
            
            // cycle current through images
            this.current = (this.current + 1) % this.images.length;
            this.hideAllImages();
            this.showCurrentImage();

            // slide calls itself
            setTimeout(slide, this.interval);
        }

        // call slide
        setTimeout(slide, this.interval);
    }

    init() {
        if (this.images.length === 0) {
            console.log("Initialization failed : No img elements found");
        }

        this.hideAllImages();
        this.showCurrentImage();

        this.autoSlide();
    }
}

new Carousel(".carousel");
