# **함수**

- `일반함수`
    - 특징 : `호이스팅` - 일반함수는 자바스크립트가 처음 읽힐 당시에 해석되므로, 함수가 쓰여진 위치가 상관없음.

    ```JS
    function 함수명(){
        함수로직
    }
    ```
    ```JS
    function apple(){
        console.log("hello");
    }
    
    apple(); //출력: hello

- `익명함수`
    - 특징 : 재사용하지 않는, `한번만` 사용할 함수 
    - `리터럴 (Literal) 방식`으로 변수에 담겨 사용하는 함수.(문자 그대로 읽히는 방식)
    ```JS
    let a=10;
    const b=20;
    ```
    - 사용 이유 : 메모리 공간을 아낄 수 있음(한 번 사용하는 순간 외에 불필요한 시간동안 메모리 차지 X)
    ```JS
    const apple=function(){
        console.log("hello");
    }
    
    apple();//출력: hello
    ```

    - 함수가 이름을 갖는것과 변수에 저장되는것은 다르다.
        - 일반함수의 경우, 함수를 호출하는 위치에 상관없이 사용될 수 있음
        - 리터럴 방식으로 사용되는 익명함수의 경우, 호이스팅 시 함수를 담는 변수의 선언부만 위로올라가고, 익명함수 자체는 변수가 호출되었을 때 실행 됨=> 선언부가 호출위치보다 위에 있어야 함.

        ```js
        apple(); // Uncaught ReferenceError: Cannot access 'apple' before initialization

        let apple=function(){
            console.log("hello");
        }
        apple()//위에서 에러가 났으니 출력이 나오지 않음.

        // 이 자바스크립트를 읽을 때(호이스팅 된 모습)
        // 
        // const apple;
        //
        // apple(); <- apple의 초기화가 진행되지 않았다.
        // 
        // apple = function(){
        //   console.log("hello!");
        // }
        //
        // apple(); <- 초기화는 진행된 후 불렸으니, 원래대로라면 출력 가능

        