window.addEventListener('DOMContentLoaded', function () {

    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll('.customer-review__item'),
        slider = document.querySelector('.reviews__wrapper'),
        slidesWrapper = document.querySelector('.customer-review'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.customer-review__inner');
        

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
        slide.style.width = width;
        });
    
    
    const indicators = document.createElement('ol'),
        dots = [];
        indicators.classList.add('slider-btn');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('slider-btn__item');
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
    }


    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        });
    });
});