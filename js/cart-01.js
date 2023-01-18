  const cartWraper =  document.querySelector('.cart-wrapper');
  console.log(cartWraper);

//  Відслідковуємо клік  по сторінці
window.addEventListener('click', function(event){
    // Провіряємо що клік був  звершиний 'Add to Card'
    if (event.target.hasAttribute('data-cart')) {
        
       // Знаходимо Карточку з товаром по якій був зроблений клік
       const card = event.target.closest('.card');

       // Створюємо дані товара і записуємо їх в єдиний обєкт productInfo
       const productInfo = {
        id: card.dataset.id,
        title: card.querySelector('.item-title').innerText,
        itemsInBox: card.querySelector('[data-items-in-box]').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
            
       };
       
       const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
       <div class="cart-item__top">
           <div class="cart-item__img">
               <img src="#" alt="">
           </div>
           <div class="cart-item__desc">
               <div class="cart-item__title">${productInfo.title}</div>
               <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

               <!-- cart-item__details -->
               <div class="cart-item__details">

                   <div class="items items--small counter-wrapper">
                       <div class="items__control" data-action="minus">-</div>
                       <div class="items__current" data-counter="">${productInfo.counter}</div>
                       <div class="items__control" data-action="plus">+</div>
                   </div>

                   <div class="price">
                       <div class="price__currency">${productInfo.price}</div>
                   </div>

               </div>
               <!-- // cart-item__details -->

           </div>
       </div>
   </div>`; 
   
   //Відображаємо товар в корзині

   cartWraper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
})