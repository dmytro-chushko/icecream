import modals from './modules/modals';
import sliders from './modules/slider';
import scrolling from './modules/scrolling';
import burger from './modules/burger';
import drop from './modules/drop';
import slideText from './modules/slideText';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.customer-review__item', '.reviews__wrapper');
    scrolling('.pageup');
    burger('.button-menu', '.menu', '.button-cross', '.site-nav__item');
    drop('[data-text-open]');
    slideText(".hero-text-box__button", ".hero-text-box__text");
});