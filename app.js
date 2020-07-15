
var msecheading = document.getElementById('msec')
var secheading = document.getElementById('sec')
var minheading = document.getElementById('min')

var msec = 0
var sec = 0
var min = 0
Interval ;

function timer (){
    msec++
    msecheading.innerHTML = msec
    if(msec >= 99){
        msec=0
        sec++
        secheading.innerHTML = sec 
    }
    else if(sec >=59){
        sec=0
        min++
        minheading.innerHTML= min
    }
}


function start(){Interval = setInterval(timer,10)
    startbtn.setAttribute('disabled','disabled')
}

function stop(){
 clearInterval(Interval)
 startbtn.removeAttribute('disabled')
}

function reset(){
    minheading.innerHTML=0
    secheading.innerHTML=0
    msecheading.innerHTML=0
    stop() 
    
  
}






