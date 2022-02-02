const sliders = (slides, wrapper) => { 
    let slideIndex = 1,
    paused = false;

    const items = document.querySelectorAll(slides),
            slider = document.querySelector(wrapper);
         
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.style.display = "none";
            item.classList.add("animate__animated");
        });

        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);




    const indicators = document.createElement('ol'),
    dots = [];
    indicators.classList.add('slider-btn');
    slider.append(indicators);

    for (let i = 0; i < items.length; i++) {
    const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('slider-btn__item');
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex - 1].style.opacity = 1;
    }


    dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        items.forEach(item => {
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = 'block';
        items[slideIndex - 1].classList.add('animate__pulse');

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });
    });

    function activateAnimation() {
    paused = setInterval(function() {
        plusSlides(1); 
        items[slideIndex - 1].classList.add('animate__pulse');
    }, 8000);
        
    }
    activateAnimation();


    items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
}

export default sliders;