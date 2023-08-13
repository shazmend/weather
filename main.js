let apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let apiKey="505050acbd4bf533ee10d2b7c0a7996d"



function getCity(){
let inputCity = document.getElementById("inputcity").value 
fetch(apiUrl+ inputCity +`&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //city
        let city = document.getElementById("city")
        city.innerText = data.name

        //date
        let date = document.getElementById("date")
        let today = new Date();
        let currentDay= today.getDate()
        let currentMonth = today.getMonth()
        let currentYear = today.getFullYear()
        date.innerText = `${currentDay} - ${currentMonth} - ${currentYear}`
    
        //temp
        let temp = document.getElementById("temp")
        temp.innerText = Math.round(data.main.temp) + "°C"

        //max Temp
        let maxTemp = document.getElementById("maxTemp")
        maxTemp.innerText = Math.round(data.main.temp_max)+ "°C"

        //min Temp
        let minTemp = document.getElementById("minTemp")
        minTemp.innerText = Math.round(data.main.temp_min)+ "°C"

        //feelLike
        let feelLike = document.getElementById("feelLike")
        feelLike.innerText = Math.round(data.main.feels_like)+ "°C"

        //humidity
        let humidity = document.getElementById("humidity")
        humidity.innerText = data.main.humidity + "%"

        //wind Speed
        let windSpeed = document.getElementById("windSpeed")
        windSpeed.innerText = data.wind.speed + " Km/h"

        //weather Img
        let weatherImg = document.getElementById("weatherImg")
        if(data.weather[0].main == "Clouds"){
            weatherImg.src = "cloud.svg"
        }
        else if(data.weather[0].main == "Clear"){
            weatherImg.src = "clear.svg"
        }
        else if(data.weather[0].main == "Rain"){
            weatherImg.src = "rain.svg"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "drizzle.svg"
        }
        else if(data.weather[0].main == "Mist"){
            weatherImg.src = "mist.svg"
        }
        
    }).catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })
}
console.log(inputCity);

