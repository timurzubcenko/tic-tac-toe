const playGround = document.querySelector('.play_ground')
const gamers = document.querySelector('.gamers')
const gamerFirst = document.querySelector('.first')
const gamerSecond = document.querySelector('.second')
const btn = document.querySelector('.btn')

for (i = 0; i < 9; i++) {
    playGround.innerHTML += `<div class="slot" data-type="1"></div>`
}

let move = 0

gamerFirst.style.color = "red"
gamerSecond.style.color = "black"

playGround.addEventListener('click', clickSlot)

function clickSlot(event) {
    if (event.target.className == 'slot') {
        if (move % 2 == 0) {
            event.target.innerHTML = `<i class="bi bi-x-lg"></i>`
            gamerFirst.style.color = "black"
            gamerSecond.style.color = "#0f75dc"
        }
        else {
            event.target.innerHTML = `<i class="bi bi-circle"></i>`
            gamerFirst.style.color = "red"
            gamerSecond.style.color = "black"
        }
        move++
        checkWinner()
    }

    function checkWinner() {
        const allSlot = document.getElementsByClassName('slot')
        // console.log(allSlot)
        if (allSlot[0].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[1].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[2].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }
        if (allSlot[3].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[5].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }

        if (allSlot[6].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[7].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[8].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }

        if (allSlot[0].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[3].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[6].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }

        if (allSlot[1].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[7].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }

        if (allSlot[2].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[5].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[8].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }

        if (allSlot[0].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[1].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[2].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }

        if (allSlot[3].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[5].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }

        if (allSlot[6].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[7].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[8].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }

        if (allSlot[0].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[3].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[6].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }

        if (allSlot[1].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[7].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }

        if (allSlot[2].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[5].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[8].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }

        if (allSlot[0].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[8].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }

        if (allSlot[2].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-circle"></i>`
            && allSlot[6].innerHTML == `<i class="bi bi-circle"></i>`) {
            gamers.innerHTML = `<h2 class="o">Игрок: <i class="bi bi-circle"></i> выиграл!</h2>`
        }

        if (allSlot[0].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[8].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }

        if (allSlot[2].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[4].innerHTML == `<i class="bi bi-x-lg"></i>`
            && allSlot[6].innerHTML == `<i class="bi bi-x-lg"></i>`) {
            gamers.innerHTML = `<h2 class="x">Игрок: <i class="bi bi-x-lg"></i> выиграл!</h2>`
        }
    }
}

btn.addEventListener('click', () => {
    location.reload()
})