const burger = (openBtn, burgerMenu, closeBtn, links) => { 
    const hamburger = document.querySelector(openBtn),
        menu = document.querySelector(burgerMenu),
        closeElem = document.querySelector(closeBtn),
        menuLink = document.querySelectorAll(links);


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });


    menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
        });
    });
}
   
export default burger;