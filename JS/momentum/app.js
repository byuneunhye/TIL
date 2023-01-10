const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age<0){
    console.log("Please write a real positive number");
}else if(age < 18){
    console.log("You are too young");
}else if(age>=18 && age<=50){
    console.log("You can drink");
}else if(age === 100){
    console.log("wow you are wise");
}
else{
    console.log("You can't drink");
}

//결과는 브라우저의 콘솔 창에서 확인 할 수 있음