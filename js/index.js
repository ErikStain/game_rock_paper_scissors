import refs from './refs.js'
console.log(refs.choiceBtns)

const CHOICES = [
  {
    name: 'paper',
    beats: 'rock',
  },
  {
    name: 'scissors',
    beats: 'paper',
  },
  {
    name: 'rock',
    beats: 'scissors',
  },
]

// Перебираем кнопки и вешаем на них слушатель событий

refs.choiceBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const choiceName = button.dataset.choice
    console.log('Я нажал на', button.dataset.choice)
    const userChoice = CHOICES.find((elem) => {
      return elem.name === choiceName
    })
    toChoose(userChoice)
  })
})

function toChoose(value) {
  const compChoose = randomChoose()
  console.log('Выбор компьютера', compChoose)
  console.log('Выбор пользователя', value)
  showResults([value, compChoose])
  showWinner([value, compChoose])
}

function showResults(results) {
  console.log(refs.resultsDivs)
  refs.resultsDivs.forEach((div, index) => {
    setTimeout(() => {
      const item = document.createElement('div')
      item.classList.add('choice')
      // console.log(results[index]);
      item.classList.add(`${results[index].name}`)
      const img = document.createElement('img')
      img.src = `./images/icon-${results[index].name}.svg`
      img.alt = 'icon'
      console.log(img)
      item.appendChild(img)
      div.appendChild(item)
    }, index * 1000)
  })
  refs.sectionGame.classList.toggle('hidden')
  refs.resultDiv.classList.toggle('hidden')
}

let score = 0

function showWinner(results) {
  setTimeout(() => {
    const userWin = results[0].beats === results[1].name
    const compWin = results[1].beats === results[0].name
    if (userWin) {
      refs.resultsText.innerText = 'Вы победили'
      refs.resultsDivs[0].classList.toggle('winner')
      score += 1
      refs.scoreNumber.textContent = score
    } else if (compWin) {
      refs.resultsText.textContent = 'Вы проиграли'
      refs.resultsDivs[1].classList.toggle('winner')
      score -= 1
      refs.scoreNumber.textContent = score
    } else {
      refs.resultsText.textContent = 'Ни нам, ни вам'
    }
    refs.resultsWinner.classList.toggle('hidden')
    refs.resultDiv.classList.toggle('show-winner')
  }, 1000)
}

// Функция рандомного выбора компьютера

function randomChoose() {
  let random = Math.random() * CHOICES.length
  // console.log(random);
  let floorRandom = Math.floor(random)
  // console.log(floorRandom);
  // console.log(CHOICES[floorRandom]);
  return CHOICES[floorRandom]
}

refs.playAgainButton.addEventListener('click', () => {
  refs.sectionGame.classList.toggle('hidden')
  refs.resultDiv.classList.toggle('hidden')
  refs.resultsDivs.forEach((diw) => {
    diw.innerHTML = ''
    diw.classList.remove('winner')
  })
  refs.resultsText.innerText = ''
  refs.resultsWinner.toggle('hidden')
  refs.resultDiv.toggle('show-winner')
})

refs.rulesBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('show-modal')
})

refs.closeBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('show-modal')
})

setTimeout(() => {
  document.body.classList.remove('preload')
}, 1000)
