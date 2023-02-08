const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//setTimeout(getClock, 5000); //setTimeout : interval처럼 반복하지는 않고 정한 시간 후에 실행하는거
getClock(); //실행 하자마자 바로 시간 띄울 수 있음
setInterval(getClock, 1000); 