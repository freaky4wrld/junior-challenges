const weekBtn = document.getElementById('weekly');
const titles = document.querySelectorAll('.title-text');
const currentStats = document.querySelectorAll('.current-stats');
const pastStat = document.querySelectorAll('.prev');

weekBtn.addEventListener('click',showWeekData)

function showWeekData(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function(){
        if(this.status == 200){
            changeTitle(JSON.parse(this.responseText));
            changeCurrentStat(JSON.parse(this.responseText));
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
                stat.innerText = `${usersCurrent[index].timeframes.weekly.current}`;
                index++;
            })
}