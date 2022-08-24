# DBMS

- ``사용자와 DB사이``에서 사용자의 요구에따라 DB생성, 관리하는 S/W

    - 사용자 <-> DBMS <-> DB

    - 사용자 : DBA(DB관리자), 일반사용자, 응용프로그램

- DBMS 기능 및 언어

    - ``정의어 (DDL)`` : DBA사용

        - DB생성 및 수정

        - CREATE, ALTER, DROP

    - ``조작어 (DML)`` : 사용자 사용

        - 데이터 검색, 삽입, 삭제, 변경

        - SELECT, INSERT, DELETE, UPDATE

    - ``제어어 (DCL)`` : DBA 사용

        - 데이터 무결성 유지 위한 보안 및 권한검사, 병행 제어 
        
        - COMMIT, ROLLBACK, GRANT, REVOKE