# Carousel

A lightweight, customizable carousel component for modern web applications. Features automatic slideshow, navigation dots, and previous/next controls.

## Installation

```bash
npm install carousel-min
```

## Usage

### 1. With an existing HTML structure

- Create an HTML structure for the carousel (such as below)
- Use the selector for the carousel to a create new Carousel object

```html
<div id="my-carousel">
    <div class="slides">
        <img src="image1.jpg">
        <img src="image2.jpg">
        <img src="image3.jpg">
    </div>
    <div class="controls">
        <button id="previous">&larr;</button>
        <div class="nav"></div>
        <button id="next">&rarr;</button>
    </div>
</div>

<script>
import Carousel from 'simple-carousel';

// Initialize with selector
const carousel = new Carousel('#my-carousel');
</script>
```

### 2. Dynamic creation

- Set up a container for the carousel
- Use the container node and image sources to create a new Carousel object

```javascript
import Carousel from 'simple-carousel';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

const container = document.querySelector('#app');
const images = [image1, image2, image3];

// Initialize with container element and image URLs
const carousel = new Carousel(container, images);
```

## Syntax

```javascript
new Carousel(
    selector,    // String (CSS selector) or DOM Element
    imgUrls,     // Array of image URLs (only required for dynamic creation)
    interval     // Number: Slideshow interval in milliseconds (default: 5000)
);
```

## Methods

- `showNextImage()`: Display the next image
- `showPreviousImage()`: Display the previous image
- `showImageById(id)`: Display a specific image by its index (as passed)

## Styling

The carousel provides basic styling classes that you can customize:

```css
.carousel       /* Main container */
.slides         /* Slides container */
.controls       /* Controls wrapper */
.nav            /* Navigation dots wrapper */
.nav-item       /* Individual navigation dot */
.nav-item.active /* Active navigation dot */
```