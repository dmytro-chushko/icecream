window.addEventListener('DOMContentLoaded', function () {

    // slider

    let slideIndex = 1,
    paused = false;

    const slides = document.querySelectorAll('.customer-review__item'),
        slider = document.querySelector('.reviews__wrapper');
         
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.style.display = "none";
            item.classList.add("animate__animated");
        });

        slides[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);




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

    function plusSlides(n) {
        showSlides(slideIndex += n);
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex - 1].style.opacity = 1;
    }


    dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        slides.forEach(item => {
            item.style.display = "none";
        });

        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('animate__pulse');

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });
    });

    function activateAnimation() {
    paused = setInterval(function() {
        plusSlides(1); 
        slides[slideIndex - 1].classList.add('animate__pulse');
    }, 8000);
        
    }
    activateAnimation();


    slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
    });
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });



    // scrolling

    const upElem = document.querySelector('.pageup');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animate__animated', 'animate__fadeIn');
            upElem.classList.remove('animate__fadeOut');
        } else {
            upElem.classList.add('animate__fadeOut');
            upElem.classList.remove('animate__fadeIn');
        }
    });


    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
    
});

