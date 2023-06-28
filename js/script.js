const cardNumber = document.querySelector('.card-number-input');
const cardNumberBox = document.querySelector('.card-number-box');
const numberResult = cardNumber.oninput = () => {
    cardNumberBox.innerText = cardNumber.value;
}



const holderInput = document.querySelector('.card-holder-input');
holderInput.oninput = () => {
    document.querySelector('.card-holder-name').innerText = holderInput.value;
}


document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = ' perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = ' perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value; 
}

