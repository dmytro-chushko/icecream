const modals = () => {
     function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animate__animated', 'animate__pulse');
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
         
        document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.style.display == 'block' && document.documentElement.clientWidth > 1100) {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
    });
    }

    function calcScroll() {
        if (document.documentElement.clientWidth > 1100) {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
        }

    }

    bindModal('.btn-buy-now', '.backdrop-buy-now', '.backdrop-buy-now .about-modal__close');
    bindModal('.about__button', '.about-backdrop', '.about-backdrop .about-modal__close');
    bindModal('.outlets-nav__button', '.backdrop', '.backdrop .modal-button');
    bindModal('.outlets-nav__button_secondary', '.backdrop-franchise', '.backdrop-franchise .modal-button');
};

export default modals;