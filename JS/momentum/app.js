const age = prompt("How old are you?");
console.log(age, typeof(age));
parseInt(age); //정수형으로 type을 변환 해 줌
console.log(age, typeof(parseInt(age)), parseInt(age)); //"15" => 15 가아니라 nan이네 왜지 => typeof(parseInt(age))로 안 하고parseInt를 밖에 적었어서 그랬음



//결과는 브라우저의 콘솔 창에서 확인 할 수 있음