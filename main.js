//spawn data to select box
const MonthSelectField = document.getElementById('monthNum');
MonthSelectField.innerHTML = '<option value="" disabled selected>Month</option>';
for (let i = 1; i <= 12; i++) {
    MonthSelectField.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

const curDate = new Date().getFullYear();
const YearSelectField = document.getElementById('yearNum');
YearSelectField.innerHTML = '<option value="" disabled selected>Year</option>';
for (let i = curDate; i <= curDate + 10; i++) {
    YearSelectField.innerHTML += '<option value="' + i + '">' + i + '</option>';
}
//<option value="1990">1990</option>

//make flip when CVV field on focus
const cvvField = document.getElementById('cvvNum');
const flipBox = document.getElementById('flipBox')
cvvField.addEventListener('focus', () => {
    flipBox.style.transform = 'rotateY(180deg)';
})
cvvField.addEventListener('focusout', () => {
    flipBox.style.transform = 'rotateY(0deg)';
})

//code to make spaces after 4 symbols
const creditCardField = document.getElementById('cardNumber');
const cardNumberText = document.getElementById('cardNumberText');

function formatCreditCard() {
    let ccnum = creditCardField.value.replaceAll(/\s/g, '');
    creditCardField.value = ccnum ? ccnum.match(/.{1,4}/g).join(' ') : '';
    return cardNumberText.innerText = creditCardField.value;
}

creditCardField.addEventListener('change', formatCreditCard);
creditCardField.addEventListener('input', formatCreditCard);
creditCardField.addEventListener('keypress', formatCreditCard);