// Знаходим елементи для взаємодії
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Відслідковуєм клік на кнопку btnMinus
btnMinus.addEventListener('click', function () {

    //  Перевіряємо щоб лічильник був більше 1
    if (parseInt(counter.innerText) > 1 ) {
        counter.innerText = --counter.innerText;
    }
    
})
// Відслідковуєм клік на кнопку btnPlus
btnPlus.addEventListener('click', function () {

    // Перевіряємо щоб лічильник був менше 10
    if (parseInt(counter.innerText) < 10 ) {
        counter.innerText = ++counter.innerText;
    }
    
})