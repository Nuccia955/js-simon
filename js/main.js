/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//refs
const timer = document.querySelector('.timer > span')
const numbers = document.querySelector('.numbers');
const numbersList = document.createElement('div');
numbersList.classList.add('main-font-size', 'd-flex', 'justify-content-center');
numbersList.append(genNumberList(5))
numbers.append(numbersList);

//set timer
let count = 5
const time = document.createElement('span');
timer.append(time);
const countdown = setInterval(() => {
    if (count !== 0) {
        time.innerText = count;
        count--;
    } else {
        time.innerText = count;
        clearInterval(time);
    }
}, 1000)








/*********
 FUNCTIONS
**********/

function genRandNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {number} numEl 
 * @returns 
 */
function genNumberList (numEl) {
    let list = '';
    for(let i = 1; i < numEl; i++ ) {
        list += ` ${genRandNum(1, 100)} -`;
    }
    list += genRandNum(1, 100);
    return list;
}