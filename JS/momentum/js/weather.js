function onGeoOk(position){
    console.log(position);
}
function onGeoError(){
    alert("Can't fint you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //getCurrentPosition : success와 error을 받음 