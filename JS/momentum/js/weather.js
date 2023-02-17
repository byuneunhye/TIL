const API_KEY = "d93df3e18f4f043b97ce6445b196ce1b";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    //console.log(url);
     fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Can't fint you. No weather for you");
}  

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);