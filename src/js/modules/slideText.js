const slideText = (btnLeft, btnRight) => { 
      const btnHero = document.querySelector(btnLeft),
        textHero = document.querySelectorAll(btnRight);
    
    function showText() {
        btnHero.classList.add('show');
        
        textHero.forEach(item => {
            item.classList.add("animate__animated");
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                item.classList.add('animate__slideInLeft');
                item.classList.remove('animate__slideOutLeft');
            } else {
                item.classList.remove('animate__slideInRight');
                item.classList.add('animate__slideOutRight');
            }
        
        });   
    }

    function hideText() {
        btnHero.classList.remove('show');
        textHero.forEach(item => {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                item.classList.add('animate__slideInRight');
                item.classList.remove('animate__slideOutRight');
            } else {
                item.classList.remove('animate__slideInLeft');
                item.classList.add('animate__slideOutLeft');
            }
        }); 
    }

    btnHero.addEventListener('click', () => {
        if (btnHero.classList.contains('show')) {
            hideText();
        } else {
            showText();  
        }
         
    });
}
   
export default slideText;