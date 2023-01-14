const titleInJS = document.getElementById("title"); //*****title들고오는 거***** 제일중요!!!**

console.log(titleInJS);
console.dir(titleInJS);

titleInJS.innerHTML = "Got you!"; // Grab me -> Got you

console.log(titleInJS.id); //dir에서 id값이 있음 => titleInJS
console.log(titleInJS.className); //dir에서 className값이 생김 => helllo!


const hiInJS = document.querySelector(".hi h1"); // getElementById를 CSS형태로 가져옴
console.log(hiInJS);

//querySelector("#title")이랑 getElementById("title")이랑 똑같은거

//html이 아닌 js에서도 문서를 수정 할 수 있다. (innerHTML)
//getElementById로 html에서 쓴 애 데리고 오기, 데리고 온 애로 JS에서 작업하기