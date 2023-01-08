//list
const me = "lala" //이거 없으면 밑에 리스트 출력 못 함 
const list = [1, 2, false, true, null, undefined, "text", me]

console.log(list[2]); // 리스트 인덱스2의 값 출력
list[2] = "aa"; // 인덱스2의 값 "aa"로 바꿈
console.log(list)

list.push("hahaha"); //리스트에 "hahaha" 새로 추가
console.log(list);


//object
const object = {
    name : "eunhye", //object안에 property들은 다 따옴표로 감싸 줌
    age : "18", //콤마로 구분
}

console.log(object);
object.age = "null"; // object에 있는 age값을 null로 변경
object.hobby = "dance"; // object에 hobby 프로포티 새로 추가
console.log(object)
console.log(console) //console도 오브젝트임


//function
function plus(a, b) { //a,b는 plus의 지역변수임
    console.log(a + b);
}
plus(5, 7);

alert("hohoho"); //alert도 function임




const calculater = {
    add : function(a, b){
        console.log(a + b);
    }
}
calculater.add(2, 4);


//결과는 브라우저의 콘솔 창에서 확인 할 수 있음