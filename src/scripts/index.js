import { createToggleHeaderMenu } from './utils/toggleHeaderMenu';
import { setCurrentSlide, updateSlides } from './utils/slider';
import HandBaseLamp from '../assets/images/Image.png';
import LampTool from '../assets/images/Image-2.png';
import StylishChair from '../assets/images/Image-1.png';
import VintageChairWhite from '../assets/images/Image-4.png';
import VintageChairDark from '../assets/images/Image-5.png';
import StackableChair from '../assets/images/Image-3.png';
import '../assets/css/global.scss';
import '../assets/css/main.scss';

const items = [
 {type: 'light', name: 'Hand Base Lamp', currentPrice: '$35.00', defaultPrice: '$55.00', img: HandBaseLamp},
 {type: 'chair', name: 'Vintage Chair', currentPrice: '$65.00', defaultPrice: '$95.00', img: VintageChairDark},
 {type: 'light', name: 'Lamp Tool', currentPrice: '$35.00', defaultPrice: '$45.00', img: LampTool},
 {type: 'chair', name: 'Stylish Chair', currentPrice: '$45.00', defaultPrice: '$55.00', img: StylishChair},
 {type: 'chair', name: 'Vintage Chair', currentPrice: '$65.00', defaultPrice: '$95.00', img: VintageChairWhite},
 {type: 'chair', name: 'Stackable Chair', currentPrice: '$87.00', defaultPrice: '$97.00', img: StackableChair}
];

const prevButton = document.querySelector('.slider-menu__arrows-prev');

const nextButton = document.querySelector('.slider-menu__arrows-next');

const currentSlideLabel = document.querySelector('.slider-menu__status-page.slider-menu__current');

const slides = document.querySelectorAll('.preview-slider__slide img');

const categories = document.querySelector('.products-categories');

const products = document.querySelector('.products-list');

categories.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    const prevActiveTab = categories.querySelector('.products-categories__item.active');
    prevActiveTab.classList.remove('active');
    e.target.classList.add('active');
    const type = e.target.textContent.toLowerCase();
    const filteredItems = getFilteredItems(type);
    sortItems(filteredItems);
  }
});

let currentSlide = 0;

const prevSlide = () => {
    currentSlide = setCurrentSlide(currentSlide, slides.length, 'prev');
    currentSlideLabel.textContent = currentSlide + 1 >= 10 ? currentSlide + 1 : `0${currentSlide + 1}`;
    updateSlides(slides, currentSlide);
}

const nextSlide = () => {
    currentSlide = setCurrentSlide(currentSlide, slides.length, 'next');
    currentSlideLabel.textContent = currentSlide + 1 >= 10 ? currentSlide + 1 : `0${currentSlide + 1}`;
    updateSlides(slides, currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


function getFilteredItems(type) {
    if (type === 'all') {
        return items;
    } 
    return items.filter(item => item.type === type);
}

function sortItems(items) {
   const height = products.clientHeight;
   products.style.height = height;
   products.innerHTML = '';
   if (!items.length) {
    products.insertAdjacentHTML('afterbegin', `<span class="no-products">Currently, there are no products in this category :(</span>`);
   } else {
    items.forEach(item => {
        products.insertAdjacentHTML('afterbegin', `
        <div class="products-list__item">
    <button class="products-item__basket">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.93371 9.42554C3.22278 9.42554 2.64648 10.0019 2.64648 10.7128C2.64648 11.4237 3.22281 12 3.93371 12C4.64464 12 5.22093 11.4237 5.22093 10.7128C5.22096 10.0019 4.64464 9.42554 3.93371 9.42554ZM3.93371 11.4279C3.53875 11.4279 3.21859 11.1077 3.21859 10.7128C3.21859 10.3178 3.53875 9.99767 3.93371 9.99767C4.32866 9.99767 4.64883 10.3178 4.64883 10.7128C4.64886 11.1077 4.32866 11.4279 3.93371 11.4279Z" fill="white"/>
                <path d="M9.36828 9.42554C8.65735 9.42554 8.08105 10.0019 8.08105 10.7128C8.08105 11.4237 8.65738 12 9.36828 12C10.0792 12 10.6555 11.4237 10.6555 10.7128C10.6555 10.0019 10.0792 9.42554 9.36828 9.42554ZM9.36828 11.4279C8.97333 11.4279 8.65316 11.1077 8.65316 10.7128C8.65316 10.3178 8.97333 9.99767 9.36828 9.99767C9.76324 9.99767 10.0834 10.3178 10.0834 10.7128C10.0834 11.1077 9.76324 11.4279 9.36828 11.4279Z" fill="white"/>
                <path d="M12.2716 1.91657C12.2121 1.8515 12.1306 1.81077 12.0428 1.80214L2.73181 1.67342L2.47436 0.886767C2.293 0.360899 1.80055 0.00588587 1.24433 0H0.286053C0.128065 0 0 0.128065 0 0.286053C0 0.444041 0.128065 0.572106 0.286053 0.572106H1.24433C1.55535 0.578977 1.82922 0.778686 1.93086 1.07271L3.7473 6.55061L3.60428 6.87956C3.44476 7.29092 3.49267 7.7539 3.73301 8.12389C3.97104 8.48728 4.3715 8.71154 4.80571 8.7246H10.3694C10.5274 8.7246 10.6555 8.59654 10.6555 8.43855C10.6555 8.28056 10.5274 8.1525 10.3694 8.1525H4.80569C4.56048 8.14637 4.33476 8.01737 4.20497 7.80923C4.07663 7.60363 4.05027 7.35035 4.13347 7.12269L4.2479 6.86525L10.2693 6.23592C10.9307 6.16308 11.4748 5.68202 11.6281 5.03449L12.3146 2.15967C12.3455 2.07689 12.3291 1.98378 12.2716 1.91657ZM11.0702 4.9058C10.9774 5.32263 10.6235 5.63009 10.1978 5.66384L4.2479 6.27885L2.91775 2.24553L11.6852 2.37425L11.0702 4.9058Z" fill="white"/>
                </svg>        
    </button>
    <div class="products-item__header">
    <h4 class="products-item__title">${item.name}</h4>
    <div class="products-item__price">
    <span class="item-price__current">${item.currentPrice}</span>
    <span class="item-price__default">${item.defaultPrice}</span>
    </div>
    </div>
    <div class="products-item__image">
    <img src="${item.img}" alt="${item.name}" />
    </div>
    </div>
        `);
       });
   }
products.style.removeProperty('height');
}




createToggleHeaderMenu('.header-navigation', '.header-buttons__bar');





