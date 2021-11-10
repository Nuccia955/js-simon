/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//refs
const timer = document.querySelector('.timer > span')
const numbers = document.querySelector('.numbers');
const numbersList = document.createElement('div');
numbersList.classList.add('main-font-size', 'd-flex', 'justify-content-center');
const arrayNumbers = genNumberList(5);
console.log(arrayNumbers);
numbersList.append(`${arrayNumbers.join(' - ')}`)
numbers.append(numbersList);

//set timer
let count = 5
const time = document.createElement('span');
timer.append(time);
const result = setTimeout(() => {
    const userAttempt= getUserAttempt(5);
    console.log(userAttempt);
    if (userAttempt.toString() === arrayNumbers.toString()) {
        console.log('hai indovinato');
    } else {
        console.log('non hai indovinato');
    };
}, 6500);
const countdown = setInterval(() => {
    if (count !== 0) {
        time.innerText = count;
        count--;
    } else {
        time.innerText = count;
        clearInterval(time);
        numbersList.innerText = '';
    }
}, 1000);










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
    let list = [];
    for(let i = 1; i <= numEl; i++ ) {
        list.push(genRandNum(1, 100));
    }
    return list;
}

function getUserAttempt (listLength) {
    const userAttempt = [];
    for(let i = 1; i <= listLength; i++) {
        userAttempt.push(parseInt(prompt('Inserisci un numero alla volta di quelli che hai visto')));
    }
    return userAttempt;
}