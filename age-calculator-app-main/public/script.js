// get form and button
const decorativeBtn = document.querySelector('button');
const formElement = document.querySelector('form');
// get the individual input elements
const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
// get the result displays
const days = document.getElementById('days')
const months = document.getElementById('months')
const years = document.getElementById('years')


const date = new Date(); // to get the current date
// to set the max to current year and min year to 1
yearInput.setAttribute('min','1')
yearInput.setAttribute('max',`${date.getFullYear()}`)

// to get all the elements of the form
const fieldInputs = Array.from(formElement.elements)
formElement.setAttribute('novalidate',"");

// to act on submit
formElement.addEventListener('submit',(event)=>{
    const allValid = formElement.checkValidity();
    if(!allValid){
        event.preventDefault();
    }else{
        event.preventDefault();
        calcDate()
    }
})

// to validate the individual inputs
fieldInputs.forEach((input)=>{  
    input.setAttribute('aria-invalid',"false");
    input.addEventListener('invalid',()=>{
        showError(input)
    })
    input.addEventListener('input',()=>{
        const valid = input.checkValidity()
        if(valid){
            hideError(input)
        }
    })
    input.addEventListener('blur',()=>{
        input.checkValidity()
    })
})

// to get the custom erro messages
function getMessage(input){
    const validity = input.validity
    if(validity.valueMissing) return "This field is required";
    if(validity.rangeOverflow) {
        if(input.id=='year'){return "Must be in the past"}
        else{return `Must be a valid ${input.id}`;}    
    }
    if(validity.rangeUnderflow) return `Must be a valid ${input.id}`;
}

// showing validation error message
function showError(input){
    const message = getMessage(input)
    input.setAttribute('aria-invalid',"true");
    input.classList.add('border-lightRed')
    input.classList.remove('border-lightGrey')
    input.nextElementSibling.textContent = message || input.validationMessage;
    input.nextElementSibling.classList.remove('hidden')
    input.previousElementSibling.classList.add('text-lightRed')
    input.previousElementSibling.classList.remove('text-smokeyGrey')
}

// hiding the shown error
function hideError(input){
    input.setAttribute('aria-invalid',"false");
    input.classList.remove('border-lightRed')
    input.classList.add('border-lightGrey')
    input.nextElementSibling.textContent = "";
    input.nextElementSibling.classList.add('hidden')
    input.previousElementSibling.classList.remove('text-ligthRed')
    input.previousElementSibling.classList.add('text-smokeyGrey')
}

// to calculate the age
function calcDate(){
    let dob = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`)
    let yeardiff = date.getFullYear()-dob.getFullYear()
    let monthdiff = date.getMonth()-dob.getMonth()
    let daydiff = date.getDate()-dob.getDate()
    if (dob.getMonth() > date.getMonth()){
        yeardiff--
        monthdiff = date.getMonth()+12-dob.getMonth()
    }
    if(dob.getDate()>date.getDate()){
        monthdiff--
        let dateCompensation = date.getDate()+getLastDate(date)
        daydiff = dateCompensation-dob.getDate()
    }
    years.innerText = yeardiff
    months.innerText = monthdiff
    days.innerText = daydiff
}

// to get the last date of the previous month
function getLastDate(date){
    let prevMonthDate = new Date(date.getFullYear(),date.getMonth(),0)
    return prevMonthDate.getDate()
}