const form = document.getElementById('form');  //gets ids from html form
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat_password-input');
const error_message = document.getElementById('error-message');

//listens to either submit being clicked or enter being pressed
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents submit

    let errors = []

    if(firstname_input) {
        //If we have a firstname input then we are in the signup

        errors = getSignUpFormErrors(firstname_input.value, email_input.value,password_input.value,repeat_password_input.value);
    }

    else{
        //If we don't have a firstname input them we are in the login

        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if (errors.length > 0)  {
        //If there are any errors inside the array
        e.preventDefault;
        error_message.innerText = errors.join(". ");
    }

})
 function getSignUpFormErrors(firstname,email,password,repeat_password){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    }

    if(email === '' || email == null){
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    if (password.length < 8) {
        errors.push('Password must have at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
        
    }

    if (password !== repeat_password) {
        errors.push('Password doesnot match repeared password.');
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
 }

 function getLoginFormErrors(email, password) {
    let errors = [];

    if(email === '' || email == null){
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    return errors;
 }

 const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input!= null);

 allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
            
        }
    })
 })