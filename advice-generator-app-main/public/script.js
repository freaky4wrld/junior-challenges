const requestBtn = document.getElementById('make-request');
const idContainer = document.getElementById('advice-id');
const bodyContainer = document.getElementById('advice-body');

const generateAdvice = ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((data)=>{
        idContainer.innerText = ` # ${data.slip.id}`;
        bodyContainer.innerText = `"${data.slip.advice}"`;
    })
}

requestBtn.addEventListener('click', generateAdvice)