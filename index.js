'use strict'


























/*
timer with randm time for green 







    let time = 3;
    let time2 = 5;
    let btn = document.querySelector('.pedestrian_btn');
    let timerId2 = null;
    let timerId1 = null;
    let randomTime = Math.floor(Math.random() * 6) + 2;
    
    
    const countdown2 = () =>{
        let timer5sec = document.querySelector('#timer2');
        
        time2 -= 1;
        timer5sec.textContent = time2;
        if(time2 === 0){
            clearInterval(timerId2);
            document.querySelector('.stop_on').style.display = "block";
            document.querySelector('.walk_off').style.display = "block";
            document.querySelector('.walk_on').style.display = "none";
            document.querySelector('.stop_off').style.display = "none";
            
        }
    };
    
    const countdown1 = () =>{
    
            
             randomTime -= 1;
            document.querySelector('#timer').textContent = randomTime;
           
        
        if(randomTime === 0){
            clearInterval(timerId1);
            document.querySelector('.stop_on').style.display = "none";
            document.querySelector('.walk_off').style.display = "none";
            document.querySelector('.walk_on').style.display = "block";
            document.querySelector('.stop_off').style.display = "block";
            timerId2 =  setInterval(countdown2, 1000);
            
        }
    };
    
    const lights = () =>{
        timerId1 =  setInterval(countdown1, 1000); 
        
    
    } 
    btn.addEventListener('click', lights);
    */














/*
let time = 3;
let time2 = 5;
let btn = document.querySelector('.pedestrian_btn');
let timerId2 = null;
let timerId1 = null;



const countdown2 = () =>{
    let timer5sec = document.querySelector('#timer2');
    
    time2 -= 1;
    timer5sec.textContent = time2;
    if(time2 === 0){
        clearInterval(timerId2);
        document.querySelector('.stop_on').style.display = "block";
        document.querySelector('.walk_off').style.display = "block";
        document.querySelector('.walk_on').style.display = "none";
        document.querySelector('.stop_off').style.display = "none";
        
    }
};

const countdown1 = () =>{
    let timer3sec = document.querySelector('#timer');
    
    time -= 1;
    timer3sec.textContent = time;
    if(time === 0){
        clearInterval(timerId1);
        document.querySelector('.stop_on').style.display = "none";
        document.querySelector('.walk_off').style.display = "none";
        document.querySelector('.walk_on').style.display = "block";
        document.querySelector('.stop_off').style.display = "block";
        timerId2 =  setInterval(countdown2, 1000);
        
    }
};

const lights = () =>{
    timerId1 =  setInterval(countdown1, 1000); 
    
   
    


} 
btn.addEventListener('click', lights);

*/







/*
//timer 1
let btn = document.querySelector('#btn');
const setter = () =>{
    
    let min = document.querySelector('#timerMin').value;
    let sec = document.querySelector('#timerSec').value;
    let conversMin = min * 60000;
    let conversSec = sec * 1000;
    let totalTime = conversMin+conversSec ;
    let timeOutTime = totalTime + 1;
    setTimeout(setInterval(() => {
    document.write('food ready!!!');
    
  }, totalTime )
  ,timeOutTime)
  console.log(timeOutTime)
}

btn.addEventListener('click', setter)

*/







/*

lights

let btn = document.querySelector('.pedestrian_btn');

const lights = () =>{
    
    document.querySelector('.stop_on').style.display = "none";
    document.querySelector('.walk_off').style.display = "none";
    document.querySelector('.walk_on').style.display = "block";
    document.querySelector('.stop_off').style.display = "block";
    setTimeout( ()=>{
    document.querySelector('.stop_on').style.display = "block";
    document.querySelector('.walk_off').style.display = "block";
    document.querySelector('.walk_on').style.display = "none";
    document.querySelector('.stop_off').style.display = "none";
    },2000)

} 
btn.addEventListener('click', lights);
*/