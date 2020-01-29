/* var startBtn = document.getElementById("start");
var dischBtn = document.getElementById("disch");
sec = 0;
min = 0;

startBtn.addEventListener('click', function init() { 
    startBtn.innerHTML = "Stop";
    startBtn.className = "stop";
    document.getElementsByClassName("stop")[0].addEventListener('click', function(){

    })
    mSec = 0;
    setInterval(tick, 10);
})
            
function tick(){
    mSec++;
    if (mSec >= 100) { 
        sec++;
        mSec -= 100;
    }

    if(sec >= 60){
        min++;
        sec -= 60;
    }

    if (mSec < 10) { 
        if (sec < 10) {
            if (min < 10) {
                document.getElementById('timer').innerHTML ='0' + min + ':0' + sec + ':0' + mSec;
            } else {
                document.getElementById('timer').innerHTML = min + ':0' + sec + ':0' + mSec;
            }
        } else {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':' + sec + ':0' + mSec;
            } else {
                document.getElementById('timer').innerHTML = min + ':' + sec + ':0' + mSec;
            }
        }
    } else {
        if (sec < 10) {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':0' + sec + ':' + mSec;
            } else {
                document.getElementById('timer').innerHTML = min + ':0' + sec + ':' + mSec;
            }
        } else {
            if (min < 10) {
                document.getElementById('timer').innerHTML = '0' + min + ':' + sec + ':' + mSec;
            } else {
                document.getElementById('timer').innerHTML = min + ':' + sec + ':' + mSec;
            }
        }
    }

}

dischBtn.addEventListener('click', function(){
    clearInterval(tick);
}) */


var base = 60; 
   var clocktimer,dateObj,dm,ds,ms; 
   var readout=''; 
   var m=1,tm=1,s=0,ts=0,ms=0,init=0; 
   
   //функция для очистки поля
   function ClearСlock() { 
       if(init == 0){
        clearTimeout(clocktimer); 
        m=1;tm=1;s=0;ts=0;ms=0; 
        init=0;
        readout='00:00.00'; 
        document.MyForm.stopwatch.value=readout; 
    }
   } 
   
   //старт секундомера
   function StartTIME() { 
        var cdateObj = new Date(); 
        var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
        if (t>999) {
             s++; } 
        if (s>=(m*base)) { 
                ts=0; 
                m++; 
        } else { 
                ts=parseInt((ms/100)+s); 
                if(ts>=base) { ts=ts-((m-1)*base); } 
        } 
        
        ms = Math.round(t/10); 
        if (ms > 99) {
            ms = 0;
        } 
        if (ms == 0) {
            ms = '00';
        } 
        if (ms > 0 && ms <= 9) {
             ms = '0' + ms;
        } 
        if (ts > 0) {
            ds = ts; 
                if (ts < 10) {
                ds = '0' + ts; }} 
        else { 
            ds = '00'; 
        } 
        dm = tm - 1; 
        if (dm > 0) {
            if (dm < 10) { 
                dm = '0'+ dm; 
            }}
             else { 
                 dm = '00'; 
                } 
        readout = dm + ':' + ds + '.' + ms; 
        document.MyForm.stopwatch.value = readout; 
        clocktimer = setTimeout("StartTIME()",1); 
   } 

   //круг
   var ulSpisok = document.querySelector("ul");
   
   function  CircleTime(){
   
        if(init != 0){
            var liNew = document.createElement("li");
            liNew.style.listStyleType = "none";
            liNew.innerHTML = "------------------- " + document.MyForm.stopwatch.value + " -------------------";
            ulSpisok.appendChild(liNew);
        }
        var disch = document.getElementById("disch");
        disch.addEventListener('click', function(){
            for(let li of liSpisok){
                li.remove();
            }
        })
   }

   var liSpisok = document.getElementsByTagName("li");
  
   
   //Функция запуска и остановки
   function StartStop() { 
        if (init == 0){ 
                ClearСlock();
                dateObj = new Date(); 
                StartTIME(); 
                init = 1; 
                document.MyForm.startStop.value = "Стоп";
        } else { 
                clearTimeout(clocktimer);
                init = 0;
                document.MyForm.startStop.value = "Старт";
        } 
   } 






