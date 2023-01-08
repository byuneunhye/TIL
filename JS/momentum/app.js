const me = "lala";
const days = [1, 2, false, true, null, undefined, "text", me]

console.log(days[2]);
days[2] = "aa";
console.log(days)
days.push("hahaha");
console.log(days);




//결과는 브라우저의 콘솔 창에서 확인 할 수 있음