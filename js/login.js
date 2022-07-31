const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

const validateInput = ({ target }) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}
const handleSubimut = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubimut);

const player = localStorage.getItem('player');

if (player) {
    input.value = player;
}