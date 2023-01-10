const calculater = {
    plus : function(a, b){
        return(a + b);
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
        return(a ** b)
    },
} 


console.log(calculater.plus(4, 5));


const plusResult = calculater.plus(2, 3);
const minusResult = calculater.minus(2,3);
const mulResuslt = calculater.mul(minusResult, 5);
const divideResult = calculater.div(mulResuslt, plusResult);
const powerofResult = calculater.powerof(divideResult, minusResult);

//결과는 브라우저의 콘솔 창에서 확인 할 수 있음