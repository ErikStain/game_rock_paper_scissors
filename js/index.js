import refs from "./refs.js"
console.log(refs.choiceBtns);

// Перебираем кнопки и вешаем на них слушатель событий

refs.choiceBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        const choiceName = button.dataset.choice
        console.log("Я нажал на",button.dataset.choice);
    })
})