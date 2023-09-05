const decorativeBtn = document.querySelector('button');
const formElement = document.querySelector('form');
// const inputList = document.querySelectorAll('input')
// const dayInput = document.getElementById('day')
// const monthInput = document.getElementById('month')
// const yearInput = document.getElementById('year')
const date = new Date();
const fieldInputs = Array.from(formElement.elements)
formElement.setAttribute('novalidate',"");

formElement.addEventListener('submit',(event)=>{
    const allValid = formElement.checkValidity();
    if(!allValid){
        event.preventDefault();
    }
})

fieldInputs.forEach((input)=>{  
    input.setAttribute('aria-invalid',"false");
    input.addEventListener('invalid',()=>{
        showError(input)
    })
    input.addEventListener('change',()=>{
        if(input==fieldInputs[fieldInputs.length-2]){
            console.log(input)
            if(parseInt(input.value)>date.getFullYear()){
                console.log(input.value)
                input.setCustomValidity('true')
                showError(input)
            }else{
                input.setCustomValidity('false')
                hideError(input)
                console.log('hide')
            }
        }
        const valid = input.checkValidity() || input.validity.customError
        if(valid){
            hideError(input)
        }
    })
    input.addEventListener('blur',()=>{
        input.checkValidity()
    })
})

function getMessage(input){
    const validity = input.validity
    if(validity.valueMissing) return "This field is required";
    if(validity.rangeOverflow) return `Must be a valid ${input.id}`;
    if(validity.rangeUnderflow) return `Must be a valid ${input.id}`;
    if(input.id=='year'){return "Must be in the future"}
}

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

function hideError(input){
    input.setAttribute('aria-invalid',"false");
    input.classList.remove('border-lightRed')
    input.classList.add('border-lightGrey')
    input.nextElementSibling.textContent = "";
    input.nextElementSibling.classList.add('hidden')
    input.previousElementSibling.classList.remove('text-ligthRed')
    input.previousElementSibling.classList.add('text-smokeyGrey')
}