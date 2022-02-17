let count = 0;
const buttons = document.querySelectorAll('.btn');
const counter = document.querySelector('#value');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const style = e.target.classList;
        
        if(style.contains('increase')) {
            count++;
        }
        else if(style.contains('decrease')) {
            count--;
        }
        else {
            count = 0;
        }

        if(count > 0) {
            counter.style.color = 'green';
        }
        if(count < 0) {
            counter.style.color = 'red';
        }
        if(count === 0) {
            counter.style.color = 'black';
        }

        counter.textContent = count;
    });
});