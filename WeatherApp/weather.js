
        const city=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const weather=document.querySelector(".weather-icon");
        apiKey="e740935680fe326256675558f9412daf";
        apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        async function checkWeather(city){
            const response=await fetch(apiURL+city+`&appid=${apiKey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            var data=await response.json();
            console.log(data);
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"&degc";
            document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
            document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity)+"%";
            document.querySelector(".city").innerHTML=data.name;
            if(data.weather[0].main==="Clouds"){
                weather.src="images/clouds.png";
            }
            else if(data.weather[0].main==="Drizzle"){
                weather.src="images/drizzle.png";
            }
            else if(data.weather[0].main==="Clear"){
                weather.src="images/clear.png";
            }
            else if(data.weather[0].main==="Mist"){
                weather.src="images/mist.png";
            }
            else if(data.weather[0].main==="Rain"){
                weather.src="images/rain.png";
            }
            else if(data.weather[0].main==="Snow"){
                weather.src="images/snow.png";
            }
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";

        }
        searchBtn.addEventListener("click",()=>{
            checkWeather(city.value);
        })
  