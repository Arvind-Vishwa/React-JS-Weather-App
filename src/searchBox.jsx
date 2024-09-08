import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBox(){
    let [city,setCity] =useState("");
    const API_URL = "http://api.openweathermap.org/geo/1.0/direct"
    const API_KEY ="292d2e84d47eaef2769457173705cab9";
    
    let getWeatherInfo = async () =>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result ={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
    };
    

    let handleChange = (event) =>{
        setCity(event.target.value);

    };
    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return (
        <div>
            <h3 >Search for the wheather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" color="success" variant="standard" type="search" value={city} onChange={handleChange}/>
            <Button variant="outlined" type="submit">Search</Button>
            </form>
        </div>
    );
}