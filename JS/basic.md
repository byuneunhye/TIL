# 자바스크립트 기초 입문 강의 30분 완성

> https://youtu.be/E-PzX2mKGUQ

## 용어
- ``REPL`` : Read(입력), Eval(평가), Print(출력), Loop(반복) 코드를 입력하면 **결과가 바로 출력**되는 과정을 반복하는 것


## 변수 
- ``var`` : 변수 선언 후 값 변경할 수 있음

- ``let`` : 변수 선언 후 값  변경할 수 있음
    - 변수 만들 때 가장 일반적으로 사용
        - let a = 1

- ``const`` : 값 변경 불가 => 상수 선언이기때문

## 함수
- 정의
    ```JS
    function myFunction(x) {
        let temp = 2*x + 3
        return temp
    }
    ```
- 실행
    ```js
    myFunction(1)
    ```


## 조건문

- 순서도
![image](https://user-images.githubusercontent.com/102288426/209588506-d7570d63-53c4-4d75-a2fa-87a8de37d867.png)


```JS
   if(money>5000){
       rideTaxi();
    } else if(money>2000){
           rideBus();
    }else {
           walk();
    }
```

## 반복문

- 순서도
![image](https://user-images.githubusercontent.com/102288426/209588955-20b1757e-0bdd-413f-b99b-93e616fd5b04.png)

```JS
for(let i = 0; i<10 ; i++){
    console.log(i)
}
```
```JS
myArray = [1,2,3,4,5]

myArray.forEach(element = > {
    console.log("나무찍기 "+element);
});
```