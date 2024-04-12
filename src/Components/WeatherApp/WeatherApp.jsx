import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../assests/search.png";
import clear_icon from "../assests/clear.png";
import humidity_icon from "../assests/humidity.png";
import drizzle_icon from "../assests/drizzle.png";
import cloud_icon from "../assests/cloud.png";
import rain_icon from "../assests/rain.png";
import snow_icon from "../assests/snow.png";
import wind_icon from "../assests/wind.png";

const WeatherApp =  () => {

    let api_key = "dd94f859a0e52d6e4767fddf735f04a7";
    const [wicon ,setWicon] = useState(cloud_icon);

    const search =  async () =>{
        const element = document.getElementsByClassName("Cityinput")
        if(element[0].value==="")
        {
            return 0;
        }

        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response =  await fetch(url);
        let data =  await response.json();

        const humidity = document.getElementsByClassName("humidity-percentage");
        const wind = document.getElementsByClassName("wind-percebtage");
        const temprature = document.getElementsByClassName("weather-temp");
        const Location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+ "Km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
        Location[0].innerHTML= data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon);

        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }

        else{
            setWicon(clear_icon)
        }
    }



  return (

    <div className='container' >
        <h1 className='heading'>Today's Weather!</h1>
        <div className='top-bar'>
            <input type="text" className='Cityinput' placeholder='Search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img className="SearchImg" src={search_icon} alt="" />
            </div>
        </div>

        <div className="weather-image">
                <img className="cloudImg" src={cloud_icon}alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location"></div>
        <div className="data-container">
            <div className="element">
                <img className=" icon " src={humidity_icon} alt="" />
                <div className="data">
                    <div className="humidity-percentage">65%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img className=" icon " src={wind_icon} alt="" />
                <div className="data">
                    <div className="wind-percebtage">18 Km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp
