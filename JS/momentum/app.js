const titleInJS = document.getElementById("title"); //*****title들고오는 거***** 제일중요!!!**

console.log(titleInJS);
console.dir(titleInJS);

titleInJS.innerHTML = "Got you!"; // Grab me -> Got you

console.log(titleInJS.id); //dir에서 id값이 있음 => titleInJS
console.log(titleInJS.className); //dir에서 className값이 생김 => helllo!

//html이 아닌 js에서도 문서를 수정 할 수 있다. (innerHTML)
//getElementById로 html에서 쓴 애 데리고 오기, 데리고 온 애로 JS에서 작업하기