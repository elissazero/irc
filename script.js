const submit = document.querySelector('.submit');
const cardOne = document.querySelector('.cardone');
const cardTwo = document.querySelector('.cardtwo');
const btns = document.querySelectorAll('.num');
const span = document.querySelector('span');
let score = 3;

submit.addEventListener('click', onsubmit);

btns.forEach( btn => {
    btn.addEventListener('click', rankingButtonClick);
});

function onsubmit(){
    console.log('Hellloooooo')
cardTwo.classList.remove('hide');
span.textContent=score;
cardOne.classList.add('hide');

}


function rankingButtonClick(event){
     console.log('rankkkkk');

    btns.forEach( btn => {
        btn.classList.remove('active');
    });

        event.target.classList.add('active');
        score = event.target.textContent;



    console.log(score);
}
