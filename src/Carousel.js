export default class Carousel {
    constructor(selector, imgUrls, interval = 5000) {

        if (typeof selector === "string") {
            // if user provides a css selector
            
            this.carousel = document.querySelector(selector);
        }
        else {
            // if user provides a dom node
            this.carousel = this.#createCarousel(selector, imgUrls);
        }
        
        this.slideContainer = this.carousel.querySelector(".slides");
        this.nav = this.carousel.querySelector(".nav");
        this.nextButton = this.carousel.querySelector("button#next");
        this.previousButton = this.carousel.querySelector("button#previous");
        this.images = this.carousel.querySelectorAll("img");
        this.interval = interval;
        this.current = 0;
        
        this.#init();
    }


    #createCarousel(container, imgSrcs) {
        // creates a carousel dom under container using imgSrcs

        // create carousel under given container
        const carousel = document.createElement("div");
        carousel.classList.add("carousel");
        container.appendChild(carousel);

        // slide and controls
        const slideContainer = document.createElement("div");
        slideContainer.classList.add("slides");
        carousel.appendChild(slideContainer);

        const controls = document.createElement("div");
        controls.classList.add("controls");
        carousel.appendChild(controls);

        // imgs for slides
        imgSrcs.forEach(imgUrl => {
            const img = document.createElement("img");
            img.src = imgUrl;
            slideContainer.appendChild(img);
        });

        // buttons and nav for controls
        const previousButton = document.createElement("button");
        previousButton.setAttribute("id", "previous");
        previousButton.innerHTML = "&larr;"
        controls.appendChild(previousButton);

        const nav = document.createElement("div");
        nav.classList.add("nav");
        controls.appendChild(nav);

        const nextButton = document.createElement("button");
        nextButton.setAttribute("id", "next");
        nextButton.innerHTML = "&rarr;";
        controls.appendChild(nextButton);

        // return a reference to carousel
        return carousel;
    }

    #hideAllImages() {
        this.images.forEach((img) => {
            img.style.visibility = "hidden";
            img.style.position = "absolute";
        });
    }

    #showCurrentImage() {
        this.images[this.current].style.visibility = "visible";
        this.images[this.current].style.position = "static";
        
        // update the nav indicators
        this.nav.querySelectorAll(".nav-item").forEach(item => {
            item.classList.toggle("active", (item.getAttribute("id") == this.current));
        });
    }

    #startSlideShow() {
        const slide = () => {
            // cycle current through images
            this.current = (this.current + 1) % this.images.length;
            this.#hideAllImages();
            this.#showCurrentImage();

            // slide calls itself
            setTimeout(slide, this.interval);
        };

        // call slide
        setTimeout(slide, this.interval);
    }

    showNextImage() {
        this.current = (this.current + 1) % this.images.length;
        this.#hideAllImages();
        this.#showCurrentImage();
    }

    showPreviousImage() {
        this.current =
            this.current - 1 < 0 ? this.images.length - 1 : this.current - 1;
        this.#hideAllImages();
        this.#showCurrentImage();
    }

    showImageById(id) {
        this.current = id;
        this.#hideAllImages();
        this.#showCurrentImage();
    }

    #init() {
        if (this.images.length === 0) {
            console.log("Initialization failed : No img elements found");
        }

        // events for button
        this.nextButton.addEventListener("click", () => {
            this.showNextImage();
        });

        this.previousButton.addEventListener("click", () => {
            this.showPreviousImage();
        });

        // make nav circles
        for (let i = 0; i < this.images.length; i++) {
            const navItem = document.createElement("div");
            navItem.classList.add("nav-item");
            navItem.setAttribute("id", i);
            this.nav.appendChild(navItem);

            navItem.addEventListener("click", () => {
                this.showImageById(i);
            })
        }

        this.#hideAllImages();
        this.#showCurrentImage();

        this.#startSlideShow();
    }
}