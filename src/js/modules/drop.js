const drop = (openText) => { 
  const btnsProdactCard = document.querySelectorAll(openText);
  
  btnsProdactCard.forEach(btn => btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle("products-cardset__hidden-block_open");
    btn.parentNode.parentNode.classList.toggle("products-cardset__card_getting-taller");
    btn.classList.toggle("products-btn_rotate");
  }));
}
   
export default drop;