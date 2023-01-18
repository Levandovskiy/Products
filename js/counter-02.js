//  Добавляєм прослушку на все вікно
window.addEventListener('click' , function(event) {
    // Обявляємо змінну для лічильника
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
          // Знаходимо Батьківський елемент
         const counterWrapper = event.target.closest('.counter-wrapper');
        
         // Знаходимо дів з лічильником
         counter = counterWrapper.querySelector('[data-counter]');
    }
    
// Провіряємо чи є елемент по якому був вчинений клік кнопкою Плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
// Провіряємо чи є елемент по якому був вчинений клік кнопкою Mінус
    if (event.target.dataset.action === 'minus') {
       
         //  Перевіряємо щоб лічильник був більше 1
        if (parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
        }


    }

})


