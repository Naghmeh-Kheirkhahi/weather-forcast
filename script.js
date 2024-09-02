let cityName = document.getElementById('cityName');
let weatherImage = document.getElementById('weatherImage');
let temprature = document.getElementById('temprature');
let weatherType = document.getElementById('weatherType');
let place = document.getElementById('place');
let feelLike = document.getElementById('feelLike');
let humidity = document.getElementById('humidity');




function getLocation(){
    let locationName = cityName.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=51c7f90647612a67f0afba2119eeb864&units=metric`)
    .then(Response => {
        return Response.json();
    })
    .then(data => {
        temprature.innerHTML = data.main.temp + '°C';
        weatherType.innerHTML = data.weather[0].description;
        place.innerHTML = locationName + ', ' + data.sys.country;
        feelLike.innerHTML = data.main.feels_like + '°C';
        humidity.innerHTML = data.main.humidity + '%';
        console.log(data.weather.id);

        if(data.weather[0].id == 800){
            weatherImage.src = "/icons/clear.svg";
        }else if(data.weather[0].id >= 200 && data.weather[0].id <= 232){
            weatherImage.src = "/icons/storm.svg";  
        }else if(data.weather[0].id >= 600 && data.weather[0].id <= 622){
            weatherImage.src = "/icons/snow.svg";
        }else if(data.weather[0].id >= 701 && data.weather[0].id <= 781){
            weatherImage.src = "/icons/haze.svg";
        }else if(data.weather[0].id >= 801 && data.weather[0].id <= 804){
            weatherImage.src = "/icons/cloud.svg";
        }else if((data.weather[0].id >= 500 && data.weather[0].id <= 531) || (data.weather[0].id >= 300 && data.weather[0].id <= 321)){
            weatherImage.src = "/icons/rain.svg";
        }
    });
}


cityName.addEventListener('keypress', cn =>{
    if(cn.key === "Enter" && cityName.value != ""){
        getLocation();
    }
})