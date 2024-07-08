let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let winner = document.querySelector('#winner');

function aylantir() {
    img1.classList.add('pressed');
    img2.classList.add('pressed');

    setTimeout(() => {
        img1.classList.remove('pressed');
        img2.classList.remove('pressed');
    }, 300);
    
    let img1RandomNum = Math.floor(Math.random() * 6) + 1;
    let img2RandomNum = Math.floor(Math.random() * 6) + 1;

    img1.src = `assets/dice${img1RandomNum}.png`;
    img2.src = `assets/dice${img2RandomNum}.png`;

    if (img1RandomNum > img1RandomNum) {
        winner.innerHTML = 'birinchi golib'; 
    } else if (img2RandomNum > img1RandomNum) {
        winner.innerHTML = 'ikkinchi golib';
    } else {
        winner.innerHTML = 'durrang';
    }

}