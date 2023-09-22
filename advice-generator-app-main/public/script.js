const requestBtn = document.getElementById('make-request');
const idContainer = document.getElementById('advice-id');
const bodyContainer = document.getElementById('advice-body');
const mainCard = document.querySelector('main');
const generateAdvice = ()=>{
    mainCard.classList.add('animate__animated', 'animate__backInDown');
    requestBtn.classList.add('animate__animated', 'animate__tada', 'animate__delay-1s')
    fetch('https://api.adviceslip.com/advice',{ method: 'GET', mode: 'cors', cache: 'no-cache' }) // to pervent the cache-storing
    .then((res)=>res.json())
    .then((data)=>{
        idContainer.innerText = ` # ${data.slip.id}`;
        bodyContainer.innerText = `"${data.slip.advice}"`;
    })
    setTimeout(()=>{
        mainCard.classList.remove('animate__animated', 'animate__backInDown');
        requestBtn.classList.remove('animate__animated', 'animate__tada', 'animate__delay-1s')
    }, 2500)
}

requestBtn.addEventListener('click', generateAdvice)