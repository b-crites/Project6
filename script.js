
// Weather API
const weatherApi = {
    key: "4c44deff3a04a60b7166cd238dc041db",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener("click" , (event)=> {
    if(event.keycode == 13){
        console.log(searchButton.value);
        getWeatherReport(searchButton.value);
    }
});

// Weather Report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid= ${weatherApi.key}`)
    .then(weatherReport => {
        return weatherReport.json()
    }).then();
}

// Display weather
function showWeatherReport(weatherReport){
    console.log(weatherReport);

    let city = document.getElementById('city');
    city.innerText = `${weatherReport.name}, ${weather.sys.country}`;
    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weatherReport.main.temp)}&deg;F`;
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    
}

// Date
var date = new Date();
date.toDateString();
document.getElementById('date').innerHTML=date;
