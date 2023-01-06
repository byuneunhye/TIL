# GIT 명령어

>📌https://blog.naver.com/studyeunhye/222971885627

## 깃허브 연동 초기 설정
``git config --global user.name "username"``   
=> 깃허브 이름

``git config --global user.email "email@email.com"``   
=> 깃허브 메일

``git remote add origin 저장소 주소``   
=> 깃허브 레포지토리 연결

``git remote -v``   
=> 저장된 깃허브 레포지토리 주소 확인

## 원격 저장소
``git remote set-url origin``   
=> 저장소 덮어쓰기

## 작업 후 파일 커밋   
``git init``   
=> 초기화

``git add .``   
=> 파일 워킹디렉토리에서 추가


``git commit -m "커밋메시지"``   
=> staging area에서 remote repo로 버전 업로드


``git push origin master``   
=> 깃허브로 마스터 브랜치에 커밋


## 브랜치   
``git branch 생성할 브랜치 명``   
=> 새로운 브랜치 생성

``git branch -m 변경 할 브랜치 명``   
=> 브랜치 이름 변경

``git status``    
=> 현 브랜치에 파일 업로드 상태 확인

``git branch``   
=> 현재 브랜치 상태 확인

``git checkout 이동할 브랜치 명``   
=> 브랜치 이동

``git add 파일이름.확장자``   
=> 옮긴 브랜치에서 버전 관리

``git branch -r``   
=> 브랜치 내역

``git branch -d 삭제할 브랜치 명``   
=> 브랜치 삭제

## 병합
``git merge 병합할 브랜치 명``   
=> 마스터브랜치랑 병합할 브랜치랑 병합

## 상태 확인
``git log``   
=> 커밋 내역 보기

``git show``   
=> 현재 브랜치의 가장 최근 커밋 정보 확인