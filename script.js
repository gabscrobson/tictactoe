// ELEMENTOS
const menuEl = document.querySelector("#menu")
const aiSettingsEl = document.querySelector("#aiSettings")
const gameEl = document.querySelector("#game")

const menuButtonsEls = document.querySelectorAll(".menuButton")

const squaresEls = document.querySelectorAll(".square")

// VARIÁVEIS
var ai, aiDificulty, startWith

// EVENTOS
menuButtonsEls[0].addEventListener('click', function () {
    ai = 0
    setTimeout(jogar, 100)
})
menuButtonsEls[1].addEventListener('click', function () {
    ai = 1
    setTimeout(jogar, 100)
})

for (let i in squaresEls) {
    squaresEls[i].addEventListener('click', function () {
        place(i)
    })
}


// FUNÇÕES
function jogar() {

    var xwins = 0, owins = 0, draws = 0
    for(i in squaresEls)
        squaresEls[i] = ''
    // updateGameDisplay()


    if(ai) { // VS AI
        console.log("segundo botao");
    }   

    else { // VS AMIGO
        menuEl.style.display = 'none'
        gameEl.style.display = 'flex'
    }
}

function place(square) {
    if(squaresEls[square].innerHTML == '') {
        squaresEls[square].innerHTML == '<img src=""'
    }
}
