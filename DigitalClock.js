const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getTime() {
    let now = new Date();
    let year = now.getFullYear();         //년도
    let month = now.getMonth() + 1;       //월 0-11 -> +1
    let day = now.getDate();              //날짜
    let mts = now.getDay();
    let hour = formatNumber(now.getHours());            //시간
    let minute = formatNumber(now.getMinutes());        //분 --> 0-59
    let second = formatNumber(now.getSeconds());        //초 --> 0-59

    
    let noon = "오전";
    if(hour>12) {
        noon = "오후";
        hour = hour - 12;
    }

    
        var week = new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일');
        var dayoutcome = week[mts];
       
    
    
    todayDiv.textContent = year +"/" + month +"/" +  day + " " + dayoutcome;
    timeDiv.textContent = noon + " " + hour +":" + minute +":" +  second;
}

getTime();
setInterval(getTime, 1000);

function formatNumber(number) {
    if(number < 10){
        return "0" + number;
    }
    return number;
}