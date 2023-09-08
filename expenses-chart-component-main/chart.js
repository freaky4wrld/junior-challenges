const chartDisplay = document.getElementById('chartDisplay');
const labelsArray = createLabels(); //get the days from json (array)
const amounts = createAmounts();    //get the expenses on each day from json (array)
//color of the bars
let labelsBgColors = ['#ec775f','#ec775f','#ec775f','#ec775f','#ec775f','#ec775f','#ec775f']; 
changeCurrentDayColor(labelsBgColors); //changing the current day bar-color

// chart creation

// chart font and size change
Chart.defaults.font.family = 'DM Sans';
Chart.defaults.font.size = 16;



let chart = new Chart(chartDisplay,{
    type: 'bar',
    data:{
        labels: labelsArray,
        datasets: [{
            label: "Expenses in $",
            data: amounts,
            borderWidth: 1,
            backgroundColor: labelsBgColors,
            borderRadius: 7
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

// get chart labels from the json object
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

// get the amounts from json object
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

// changing the color of bar with the current day
function changeCurrentDayColor(array){
    let currentDay = new Date().getDay();
    if(currentDay == 0 ){
        currentDay = array.length-1;
    }else{
        currentDay--;
    }
    array[currentDay] = "#76b5bc";
}
