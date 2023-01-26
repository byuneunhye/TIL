const h1 = document.querySelector("div.hello:first-child h1");

function handletitleclick(){
    if(h1.className === "active"){
        h1.className = "";
    }else {
        h1.className = "active";
    }
}


h1.addEventListener("click", handletitleclick); 

//1. element를 찾아라
//2. event를 listen해라
//3. 그 event에 반응해라 