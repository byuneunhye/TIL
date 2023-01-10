const calculater = {
    plus : function(a, b){
        return(a + b);
        console.log("hello"); // return을 하면 모든 함수가 끝남
    },
    minus : function(a, b){
        return(a - b);
    },
    mul : function(a, b){
        return(a * b);
    },
    div : function(a, b){
        return(a / b);
    },
    powerof : function(a, b){
        return "hello";
    },
} 


console.log(calculater.plus(4, 5));


const plusResult = calculater.plus(2, 3);
const minusResult = calculater.minus(2,3);
const mulResuslt = calculater.mul(minusResult, 5);
const divideResult = calculater.div(mulResuslt, plusResult);
const powerofResult = calculater.powerof(divideResult, minusResult);
const powR = calculater.powerof(3, 4); //powerof의 return 값은 hello이므로 인자로 어떤 값을 넣어도 hello를 출력 함

//결과는 브라우저의 콘솔 창에서 확인 할 수 있음