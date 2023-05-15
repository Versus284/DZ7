let score = document.createElement('h3');
let scoresDiv = document.querySelector('.scores')
scoresDiv.append(score)
score.textContent = 0
let Score = 0

let startButton = document.querySelector('.buttonForStart')
let startDiv = document.querySelector('.start')

startButton.addEventListener('click', (event) => {
    startDiv.classList.toggle('none')
    level1.classList.toggle('none')
    level1.classList.add('level1')
})

let level1 = document.querySelector('.none')
let inputOfLevel1 = document.querySelector('.level1Input')
let buttonOfLevel1 = document.querySelector('.level1Button')

let level2 = document.querySelector('.level2')


let alert = document.createElement('h3')
buttonOfLevel1.addEventListener('click', (event) => {
    if (inputOfLevel1.value == '400') {
        level1.classList.remove('level1')
        level1.classList.add('none')
        level2.classList.toggle('none')
        Score += 1
        score.textContent = Score
    } else if (inputOfLevel1.value >= '300' && inputOfLevel1.value <= '399'){
        alert.textContent = 'Близко'
        level1.append(alert)
    } else {
        alert.textContent = 'Неверно'
        level1.append(alert)
    }
})


let inputOfLevel2 = document.querySelector('.level2Input')
let buttonOfLevel2 = document.querySelector('.level2Button')
let level3 = document.querySelector('.level3')

buttonOfLevel2.addEventListener('click', (event) => {
    if (inputOfLevel2.value == 343 || inputOfLevel2.value == 343) {
        level2.classList.remove('level2')
        level2.classList.add('none')
        level3.classList.toggle('none')
        Score += 1
        score.textContent = Score
    } else if (inputOfLevel2.value >= 300 && inputOfLevel2.value <= 342) {
        alert.textContent = 'Близко'
        level2.append(alert)
    } else {
        alert.textContent = 'Неверно'
        level2.append(alert)
    }
})


let inputOfLevel3 = document.querySelector('.level3Input')
let buttonOfLevel3 = document.querySelector('.level3Button')
let level4 = document.querySelector('.level4')

buttonOfLevel3.addEventListener('click', () => {
    if (inputOfLevel3.value == 299792458){
        level3.classList.remove('level3')
        level3.classList.add('none')
        level4.classList.toggle('none')
        Score += 1
        score.textContent = Score
    } else if (inputOfLevel3.value >= 289000000  && inputOfLevel3.value <= 299792457) {
        alert.textContent = 'Близко'
        level3.append(alert)
    } else {
        alert.textContent = 'Неверно'
        level3.append(alert)
    }

})

let buttons = document.querySelector('.buttons')
for (i = 0; i < 9; i++) {
    let button = document.createElement('button')
    button.innerText = ' '
    button.classList.add('button')
    buttons.append(button)
}

let randomButton = buttons.children[Math.floor(Math.random()*9)]
let level5 = document.querySelector('.level5')

randomButton.addEventListener('click', () => {
    level4.classList.toggle('none')
    level5.classList.toggle('none')
    Score += 1
    score.textContent = Score
})


let buttons2 = document.querySelector('.buttons2')
let winDiv = document.querySelector('.win')

for (i = 0; i < 30; i++) {
    let button2 = document.createElement('button')
    button2.innerText = ' '
    button2.classList.add('button2')
    buttons2.append(button2)
}
let randomButton2 = buttons2.children[Math.floor(Math.random()*30)]

console.log(randomButton2)
randomButton2.addEventListener('click', () => {
    level5.classList.toggle('none')
    winDiv.classList.toggle('none')
    Score += 1
    score.textContent = Score
})