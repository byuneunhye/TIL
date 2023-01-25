const h1 = document.querySelector("div.hello:first-child h1");

//console.dir(h1);

function handletitleclick(){ 
    const currentColor = h1.style.color;
    let newColor;  //let, 새로 업데이트 될 수 있는 변수 선언 할 때 씀/ 값 할당 안 해줬으므로 비어있는 let변수 선언
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}


h1.addEventListener("click", handletitleclick); 
