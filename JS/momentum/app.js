const calculater = {
    plus : function(a, b){
        console.log(a + b);
    },
    minus : function(a, b){
        console.log(a - b);
    },
    mul : function(a, b){
        console.log(a * b);
    },
    div : function(a, b){
        console.log(a / b);
    },
    powerof : function(a, b){
        console.log(a ** b)
    },
} 

calculater.plus(3, 4)
calculater.minus(3, 4)
calculater.mul(3, 4)
calculater.div(3, 4)
calculater.powerof(3, 4)


//결과는 브라우저의 콘솔 창에서 확인 할 수 있음