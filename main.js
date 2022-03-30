const form = document.querySelector('form');
const inputText = document.querySelector('#input-text');


//Takes input text and displays as browser alert
form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Input:', inputText.value);

    alert(inputText.value);
});

//Set variables for each checkbox
const sandwichCreate = document.querySelector('#sandwich');
const wholeWheat = document.querySelector('#whole-wheat')
const white = document.querySelector('#white')
const pretzel = document.querySelector('#pretzel')
const ciabatta = document.querySelector('#ciabatta')
const lettuce = document.querySelector('#lettuce')
const tomato = document.querySelector('#tomato')
const onion = document.querySelector('#onion')
const pickles = document.querySelector('#pickles')
const cheddarCheese = document.querySelector('#cheddar-cheese')
const provoloneCheese = document.querySelector('#provolone-cheese')

//Takes input to create sandwich
sandwichCreate.addEventListener('submit', function(event) {
     event.preventDefault();

     let str = 
        'Your sandwich, will be prepared with:';

        if(wholeWheat.checked) {
            str += ' whole wheat bread,';
        }
        if(white.checked) {
            str += ' white bread,';
        }
        if(pretzel.checked) {
            str += ' pretzel bun,';
        }
        if(ciabatta.checked) {
            str += ' ciabatta bun,';
        }
        if(lettuce.checked) {
            str += ' lettuce,';
        }
        if(tomato.checked) {
            str += ' tomato,';
        }
        if(onion.checked) {
            str += ' onion,';
        }
        if(pickles.checked) {
            str += ' pickles,';
        }
        if(cheddarCheese.checked) {
            str += ' cheddar cheese,';
        }
        if(provoloneCheese.checked) {
            str += ' provolone cheese,';
        }
        
        //removing trailing comma
        str = str.slice(0, -1);
        alert(str);
        
    });

    //Haircut Scheduling
    const haircut = document.querySelector('#haircut');
    const inputDateTime = document.querySelector('#input-datetime');
    const stylist = document.querySelector('#input-stylist');
    const inputLong = document.querySelector('#radio-long');
    const inputShort = document.querySelector('#radio-short');

    haircut.addEventListener('submit', function(event) {
        event.preventDefault();

        let str = 
        'Your appt is scheduled for ' +
        inputDateTime.value +
        ' with, ' +
        stylist.value +
        ' for ';

        if(inputLong.checked) {
            str += 'long hair.';
        }
        if(inputShort.checked) {
            str += 'short hair.';
        }

        alert(str);
    });

    //Create account
    const account = document.querySelector('#account');
    const user = document.querySelector('#input-username');
    const email = document.querySelector('#input-email');
    const password = document.querySelector('#input-password');
    const confirmPassword = document.querySelector('#confirm-password');

    account.addEventListener('submit', function(event) {
        event.preventDefault();

        let str = 
        'Account created! Username: ' +
        user.value + ' ' +
        'Email: ' + ' ' +
        email.value;

        if(password.value == confirmPassword.value) {
            alert(str);
        } else {
            alert('Passwords do not match!')
        }
    })