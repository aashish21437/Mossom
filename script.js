const url =  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'abd8c9ebc7msh6b8342f650a1e55p11acdbjsn7063787e371a',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

const getWeather = (city) => {
    try{
  fetch(url + city,options)
    .then((response) => response.json())
    .then((response) => {console.log(response)
      cityName.innerHTML = city;
      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunset.innerHTML = response.sunset
      sunrise.innerHTML = response.sunrise;
    })}
    
    catch (error) {
	console.error(error);
}
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather("Delhi");
})
getWeather("Delhi");


const tableupdate = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
    .then(response => response.json())
    .then(response => {console.log(response)
    
        if(city == "Delhi"){
            // delhidata.innerHTML = city + " ";
        delhicloud.innerHTML = response.cloud_pct
        delhidata.innerHTML = response.temp
        delhifeelslike.innerHTML = response.feels_like
        delhihumidity.innerHTML = response.humidity
        delhimintemp.innerHTML = response.min_temp
        delhimaxtemp.innerHTML = response.max_temp
        delhiwindspeed.innerHTML = response.wind_speed
        delhiwinddegrees.innerHTML = response.wind_degrees
        delhisunrise.innerHTML = response.sunrise
        delhisunset.innerHTML = response.sunset 
        } 
        else if(city == "Bangalore"){
            Bangalorecloud.innerHTML = response.cloud_pct
        Bangaloredata.innerHTML = response.temp
        Bangalorefeelslike.innerHTML = response.feels_like
        Bangalorehumidity.innerHTML = response.humidity
        Bangaloremintemp.innerHTML = response.min_temp
        Bangaloremaxtemp.innerHTML = response.max_temp
        Bangalorewindspeed.innerHTML = response.wind_speed
        Bangalorewinddegrees.innerHTML = response.wind_degrees
        Bangaloresunrise.innerHTML = response.sunrise
        Bangaloresunset.innerHTML = response.sunset
        }

        else if(city == "Mumbai"){
            Mumbaicloud.innerHTML = response.cloud_pct
        Mumbaidata.innerHTML = response.temp
        Mumbaifeelslike.innerHTML = response.feels_like
        Mumbaihumidity.innerHTML = response.humidity
        Mumbaimintemp.innerHTML = response.min_temp
        Mumbaimaxtemp.innerHTML = response.max_temp
        Mumbaiwindspeed.innerHTML = response.wind_speed
        Mumbaiwinddegrees.innerHTML = response.wind_degrees
        Mumbaisunrise.innerHTML = response.sunrise
        Mumbaisunset.innerHTML = response.sunset
        }

        else if(city == "Kolkata"){
        Kolkatacloud.innerHTML = response.cloud_pct
        Kolkatadata.innerHTML = response.temp
        Kolkatafeelslike.innerHTML = response.feels_like
        Kolkatahumidity.innerHTML = response.humidity
        Kolkatamintemp.innerHTML = response.min_temp
        Kolkatamaxtemp.innerHTML = response.max_temp
        Kolkatawindspeed.innerHTML = response.wind_speed
        Kolkatawinddegrees.innerHTML = response.wind_degrees
        Kolkatasunrise.innerHTML = response.sunrise
        Kolkatasunset.innerHTML = response.sunset
        }

    })
    
    .catch(err => console.error(err)) 
}

tableupdate("Delhi");
tableupdate("Bangalore");
tableupdate("Mumbai");
tableupdate("Kolkata");