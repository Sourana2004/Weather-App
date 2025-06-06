const apiKey = "32022911ec4dfd89bbe6b4328731fccf";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";  


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const second_forIcon = document.querySelector(".box1 .forcast-icon");
const third_forIcon = document.querySelector(".box2 .forcast-icon");
const fourth_forIcon = document.querySelector(".box3 .forcast-icon");
const fifth_forIcon = document.querySelector(".box4 .forcast-icon");
const card = document.querySelector(".card");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    


    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°C";
    document.querySelector(".update").innerHTML = data.list[0].weather[0].description;
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " km/h";

    document.querySelector(".box1 .date").innerHTML = data.list[8].dt_txt;
    document.querySelector(".box2 .date").innerHTML = data.list[18].dt_txt;
    document.querySelector(".box3 .date").innerHTML = data.list[25].dt_txt;
    document.querySelector(".box4 .date").innerHTML = data.list[33].dt_txt;

    document.querySelector(".box1 .temparature").innerHTML = Math.round(data.list[8].main.temp) + "°C";
    document.querySelector(".box2 .temparature").innerHTML = Math.round(data.list[18].main.temp) + "°C";
    document.querySelector(".box3 .temparature").innerHTML = Math.round(data.list[25].main.temp) + "°C";
    document.querySelector(".box4 .temparature").innerHTML = Math.round(data.list[33].main.temp) + "°C";



    //for today's 
    if(data.list[0].weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }else if(data.list[0].weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    }else if(data.list[0].weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    }else if(data.list[0].weather[0].main== 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.list[0].weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";
    }

    // for 2nd day
    if(data.list[8].weather[0].main == 'Clouds'){
        second_forIcon.src = "images/clouds.png";
    }else if(data.list[8].weather[0].main == 'Clear'){
        second_forIcon.src = "images/clear.png";
    }else if(data.list[8].weather[0].main == 'Rain'){
        second_forIcon.src = "images/rain.png";
    }else if(data.list[8].weather[0].main== 'Drizzle'){
        second_forIcon.src = "images/drizzle.png";
    }else if(data.list[8].weather[0].main == 'Mist'){
        second_forIcon.src = "images/mist.png";
    }

    // for 3rd day
    if(data.list[18].weather[0].main == 'Clouds'){
        third_forIcon.src = "images/clouds.png";
    }else if(data.list[18].weather[0].main == 'Clear'){
        third_forIcon.src = "images/clear.png";
    }else if(data.list[18].weather[0].main == 'Rain'){
        third_forIcon.src = "images/rain.png";
    }else if(data.list[18].weather[0].main== 'Drizzle'){
        third_forIcon.src = "images/drizzle.png";
    }else if(data.list[18].weather[0].main == 'Mist'){
        third_forIcon.src = "images/mist.png";
    }

    // for 4th day
    if(data.list[25].weather[0].main == 'Clouds'){
        fourth_forIcon.src = "images/clouds.png";
    }else if(data.list[25].weather[0].main == 'Clear'){
        fourth_forIcon.src = "images/clear.png";
    }else if(data.list[25].weather[0].main == 'Rain'){
        fourth_forIcon.src = "images/rain.png";
    }else if(data.list[25].weather[0].main== 'Drizzle'){
        fourth_forIcon.src = "images/drizzle.png";
    }else if(data.list[25].weather[0].main == 'Mist'){
        fourth_forIcon.src = "images/mist.png";
    }

    // for 5th day
    if(data.list[33].weather[0].main == 'Clouds'){
        fifth_forIcon.src = "images/clouds.png";
    }else if(data.list[33].weather[0].main == 'Clear'){
        fifth_forIcon.src = "images/clear.png";
    }else if(data.list[33].weather[0].main == 'Rain'){
        fifth_forIcon.src = "images/rain.png";
    }else if(data.list[33].weather[0].main== 'Drizzle'){
        fifth_forIcon.src = "images/drizzle.png";
    }else if(data.list[33].weather[0].main == 'Mist'){
        fifth_forIcon.src = "images/mist.png";
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

