const dailyBtn = document.getElementById('daily');
const weekBtn = document.getElementById('weekly');
const monthBtn = document.getElementById('monthly');
const cardGroup = document.getElementById("card-group");
const titles = document.querySelectorAll('.title-text');
const currentStats = document.querySelectorAll('.current-stats');
const pastStat = document.querySelectorAll('.prev');

// cardGroup.style.visibility = 'hidden';

weekBtn.addEventListener('click',showWeekData);
monthBtn.addEventListener('click',showMonthData);
dailyBtn.addEventListener('click',showDailyData);

function showDailyData(){
    cardGroup.style.visibility = 'visible'
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function(){
        if(this.status == 200){
            changeTitle(JSON.parse(this.responseText));
            changeCurrentStat(JSON.parse(this.responseText));
            changePastStat(JSON.parse(this.responseText))
        }
    }

    xhr.send();
}


function showWeekData(){
    cardGroup.style.visibility = 'visible'
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function(){
        if(this.status == 200){
            changeTitle(JSON.parse(this.responseText));
            changeCurrentWeekStat(JSON.parse(this.responseText));
            changePastWeekStat(JSON.parse(this.responseText))
        }
    }

    xhr.send();
}

function showMonthData(){
    cardGroup.style.visibility = 'visible'
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function(){
        if(this.status == 200){
            changeTitle(JSON.parse(this.responseText));
            changeCurrentMonthStat(JSON.parse(this.responseText));
            changePastMonthStat(JSON.parse(this.responseText))
        }
    }

    xhr.send();
}


function changeTitle(usersTitle){
    let index = 0
            titles.forEach((title)=>{
                title.innerText = usersTitle[index].title;
                index++;
            })
}

function changeCurrentStat(usersCurrent){
    let index = 0
            currentStats.forEach((stat)=>{
                stat.innerText = `${usersCurrent[index].timeframes.daily.current}hrs`;
                index++;
            })
}

function changeCurrentWeekStat(usersCurrent){
    let index = 0
            currentStats.forEach((stat)=>{
                stat.innerText = `${usersCurrent[index].timeframes.weekly.current}hrs`;
                index++;
            })
}

function changeCurrentMonthStat(usersCurrent){
    let index = 0
            currentStats.forEach((stat)=>{
                stat.innerText = `${usersCurrent[index].timeframes.monthly.current}hrs`;
                index++;
            })
}
function changePastStat(usersCurrent){
    let index = 0
            pastStat.forEach((stat)=>{
                stat.innerText = `${usersCurrent[index].timeframes.daily.previous}hrs`;
                index++;
            })
}

function changePastWeekStat(usersCurrent){
    let index = 0
            pastStat.forEach((stat)=>{
                stat.innerText = `${usersCurrent[index].timeframes.weekly.previous}hrs`;
                index++;
            })
}

function changePastMonthStat(usersCurrent){
    let index = 0
            pastStat.forEach((stat)=>{
                stat.innerText = `${usersCurrent[index].timeframes.monthly.previous}hrs`;
                index++;
            })
}