# HTTP 에러코드

|에러코드|뜻|
|------|---|
|200|성공|
|400|Bad Request <br> ``문법상 오류`` 때문에 발생. <br> => url을 잘못 입력하여 발생했을 확률이 높음.|
|404|Not Found <br> 클라이언트에서 요청한 문서를 ``찾을수 없음``|
|405|Method not allowed <br> 메소드 수행을 위한 자원 이용이 허용되지 않았을 경우 발생|
|415|서버가 거부한거 <br> ex) ContentType, Content Encoding 데이터 확인하기|
|500|서버 내부 오류|
|505|HTTP Version Not Supported <br> HTTP 말고 다른 주소로 접근 해 보자|