#include <stdio.h>
void inputArray( int a[], int size); // 배열을 입력받는 함수
void outputArray( int a[], int size); // 배열을 출력하는 함수
int insertArray( int a[], int num, int index, int size); // 배열의 index 위치에 num 데이터를 삽입하는 함수 
int deleteArray( int a[], int index, int size); // 배열의 index 위치에 num 데이터를 삭제하는 함수

int main(){
  int a[10], size=0 ; // a[10] : 사용할 배열, size : 배열의 크기(끝부분), index : 삽입할 요소의 인덱스
  size = insertArray( a, 10, 0, size);
  size = insertArray( a, 20, 1, size);
  size = insertArray( a, 30, 2, size);
  size = insertArray( a, 50, 2, size);
   outputArray(a,size);
   size = deleteArray(a, 1, size);
  outputArray(a, size);
  return 0;
}
void inputArray( int a[], int size){  //배열 a[ ] 에 size 개수만큼 원소 입력
    int i; 
   for(i=0; i<size; i++){
      scanf("%d", &a[i]);
   }
}
void outputArray( int a[], int size){ //배열 a[ ]를 size 개수 만큼 원소 출력
    int i; 
   for(i=0; i<size; i++){
      printf("%d ", a[i]);
   }
    printf("\n");
}
int insertArray( int a[], int num, int index, int size){ // 배열 a[]의 index 위치에 num 데이터를 삽입
   int i;
   if(index == size){ // 배열 끝부분에 원소 삽입 
      a[index] = num;
      size++;
   }
     else{    // 배열 중간에 원소 삽입 
         for(i=size; i>index; i--){
            a[i] = a[i-1];
         }
         a[i] = num;
         size++;
         
      }
  return size;
}
int deleteArray( int a[], int index , int size){ // 배열 a[]의 index 위치에 num 데이터 삭제
  if(index == size-1){ // 배열 끝부분 원소 삭제 
      a[index] = 0;
      size--;
    }
   else{ // 배열 중간의 원소 삭제 
      size--;
      for(int i=index; i<size; i++){
         // a[i](삭제할 요소) = a[i+1]; 요소를 삭제하고 뒤에 있는 요소들을 땡긴다!
         a[i] = a[i+1];
      }
   }
  return size;
}