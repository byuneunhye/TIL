const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}


setInterval(sayHello, 5000); //interval : 매 순간(매 초, 매 분 등) 실행하는거