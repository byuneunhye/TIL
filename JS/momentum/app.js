function sayHello(nameOfPerson, age) {
    console.log(nameOfPerson + age);
}

sayHello("nen", 15 );
sayHello("Dd"); //age부분은 undefinde로 들어감

//이까지가 함수

const player = {
    name:"lalala",
    sayBy: function(name){
        console.log("byby " + name)
    },
};

console.log(player);
console.log(player.name);
console.log(player.sayBy("lynn"));








//결과는 브라우저의 콘솔 창에서 확인 할 수 있음