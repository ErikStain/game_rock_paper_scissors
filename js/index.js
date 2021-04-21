import refs from "./refs.js"
console.log(refs.choiceBtns);

const CHOICES = [
    {
        name:"paper",
        beats:"rock"
    }, {
        name:"scissors",
        beats:"paper"
    }, {
        name:"rock",
        beats:"scissors"
    }
]

// Перебираем кнопки и вешаем на них слушатель событий

refs.choiceBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        const choiceName = button.dataset.choice
        console.log("Я нажал на",button.dataset.choice);
        const userChoice = CHOICES.find((elem)=>{
            return elem.name === choiceName
        })
        toChoose(userChoice)
    })
})

function toChoose (value) {
    const compChoose = randomChoose()
    console.log("Выбор компьютера",compChoose);
    console.log("Выбор пользователя",value);
}

function showResults () {
    console.log(refs.resultsDivs);
    refs.resultsDivs.forEach((div,index)=>{
        console.log(div);
        console.log(index);
        const item = document.createElement("div")
        console.log(item);
        item.classList.add("choice")
        const img = document.createElement("img")
        console.log(img);
        item.appendChild(img)
    })
}

showResults()

// Функция рандомного выбора компьютера

function randomChoose () {
    let random = Math.random()*CHOICES.length
    console.log(random);
    let floorRandom = Math.floor(random);
    console.log(floorRandom);
    console.log(CHOICES[floorRandom]);
    return CHOICES[floorRandom]
}

toChoose()
