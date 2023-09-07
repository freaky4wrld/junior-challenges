const chartDisplay = document.getElementById('chartDisplay');
const labelsArray = createLabels();
const amounts = createAmounts();
// chart creation


new Chart(chartDisplay,{
    type: 'bar',
    data:{
        labels: labelsArray,
        datasets: [{
            data: amounts,
            borderWidth: 1,
            backgroundColor: '#ec775f',
            borderRadius: 7,
            fontFamily: 'DM Sans'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                display: false,
                drawBorder: false
              }
            }
        },
    }
})

function createLabels(){
    const xhr = new XMLHttpRequest();
    let labelsArray = [];
    xhr.open('GET',"data.json",true);
    xhr.onload = function(){
        if(this.status == 200){
            let responseArray = JSON.parse(this.response);
            for (let index = 0; index < responseArray.length; index++) {
                labelsArray.push(responseArray[index].day);
                
            }
        }
    }
    xhr.send();
    return labelsArray
}

function createAmounts(){
    const xhr = new XMLHttpRequest();
    let amountsArray = [];
    xhr.open('GET',"data.json",true);
    xhr.onload = function(){
        if(this.status == 200){
            let responseArray = JSON.parse(this.response);
            for (let index = 0; index < responseArray.length; index++) {
                amountsArray.push(responseArray[index].amount);
                
            }
        }
    }
    xhr.send();
    return amountsArray
}

