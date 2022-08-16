# **요소의 위치(position)**


**1.  position 프로퍼티**   

특징 : 요소의 `위치` 정의   
> **프로퍼티** : 속성이라는 뜻이고, 객체의 일부로 이름과 값 사이 연결을 의미.

**1-1. static(기본위치)**
     `position:static`
    특징 : **기본값**, position 프로퍼티를 지정하지 않았을때외 같은상태.

**1-2. relative (상대위치)**
    `position:relative`  
    특징 : top, right, bottom, left 프로퍼티가 있어야 **원래의 위치에서** 이동 가능.

**1-3. absolute (절대위치)**
    `position: absolute`   
    특징 : 특정 **부모에 대해** 절대적으로 움직이게 됨.

    relative와 absolute의 차이점
    - relative 는 기본위치를 기준으로 좌표프로퍼티를 사용하여 위치 이동, 부모를 기준으로 위치하게 됨.
    - absolute 는 부모에 static 이외의 position 프로퍼티가 지정되어 있을 경우에만 부모를 기준으로 위치하게 됨. 
    absolute프로퍼티 요소는 부모요소의 영역을 벗어나 자유롭게 위치 가능

![https://velog.velcdn.com/images%2Frimu%2Fpost%2Fe7c043ad-f15d-4b05-ab32-48242c86bea4%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-21%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.29.59.png](https://velog.velcdn.com/images%2Frimu%2Fpost%2Fe7c043ad-f15d-4b05-ab32-48242c86bea4%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-21%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.29.59.png)

```<html>
 <head>
  <style>
    body { margin: 0; }
    .parent {
      position: relative;
      width: 200px;
      height: 200px;
    }
    .absolute-box {
      position: absolute;
      height: 200px; 
      width: 200px;
      top: 50px; 
      left: 50px;
    }
  </style>
</head>
<body>
  <div class="parent">
    <div class="absolute-box">absolute box (in parent)</div>
  </div>
  <div class="absolute-box">absolute box (no parent)</div>
 </body>
</html>
```   


**2. overflow**   
특징 : 자식요소가 부모요소의 영역을 벗어났을 때 처리방법 정의

    - `visible` : 영역 벗어난 부분 표시, (기본값)
    - `hidden` : 영역 벗어난 부분을 잘라냄
    - `auto` : 영역 벗어난 부분 스크롤 표시
    - `scroll` : 영역 벗어난 부분 없어도 스크롤 표시

![overflow](https://velog.velcdn.com/images%2Frimu%2Fpost%2Fc7dbc158-1eaa-42ef-904c-4c189b2af701%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-21%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.54.53.png)

***
> 참고. (https://velog.io/@rimu/css-%EC%9A%94%EC%86%8C%EC%9D%98-%EC%9C%84%EC%B9%98position-%EC%A0%95%EB%A6%AC)

    
    
    

