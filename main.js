//spawn data to select box
const MonthSelectField = document.getElementById('monthNum');
MonthSelectField.innerHTML = '<option value="" disabled selected>Month</option>';
for (let i = 1; i <= 12; i++) {
    MonthSelectField.innerHTML += '<option value="' + ((i<10)?'0':'') + i + '">' +((i<10)?'0':'') + i + '</option>';
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


//conection of text field and text on the card
const fieldAndTextCollection = {
    'cardNumber':'cardNumberText',
    'cardName':'cardHolderName',
    'monthNum':'cardMonth',
    'yearNum':'cardYear',
    'cvvNum':'cardCVV'
}


//code to make spaces after 4 symbols
const creditCardField = document.getElementById('cardNumber');
const cardNumberText = document.getElementById(fieldAndTextCollection['cardNumber']);

function formatCreditCard() {
    //remove wrong symbols and spaces
    let ccnum = creditCardField.value.replaceAll(/\s/g, '').replace(/[^0-9 ]/g, '');
    //add space after 4 numbers, for empty field return empty string
    creditCardField.value = ccnum ? ccnum.match(/.{1,4}/g).join(' ') : '';
    return true;
}

creditCardField.addEventListener('change', formatCreditCard);
creditCardField.addEventListener('input', formatCreditCard);
creditCardField.addEventListener('keypress', formatCreditCard);



//lets make the field on card with border when it's changed


Object.entries(fieldAndTextCollection).map(function(el) {
    console.log(el);
    let inElement = document.getElementById(el[0]);
    let outElement = document.getElementById(el[1]);

    inElement.addEventListener('focus', function (){
        outElement.classList.add("accentBorder");
    });
    inElement.addEventListener('focusout', function (){
        outElement.classList.remove("accentBorder");
    });
    inElement.addEventListener('input', function (){
        outElement.innerText = inElement.value;
    });
    
})

