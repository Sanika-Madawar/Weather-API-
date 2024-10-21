import { useState } from "react";
import TextField from '@mui/material/TextField';
import'./SearchBox.css';
import Button from '@mui/material/Button';

export default function SearchBox({updateInfo}){
    let[city , setCity] = useState("");
    // These API call functionality can also be done in a separate file or we can create a separate file for storing the different API keys
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY =  "3996e2e8e27c94bd90c52416021bcd50";
 //   link for weather api : https://openweathermap.org/current#geocoding
    let getWeatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes = await response.json();
        //console.log(jsonRes);
        let result = {
            city : city ,
            temp : jsonRes.main.temp ,
            tempMin : jsonRes.main.temp_min,
            tempMax : jsonRes.main.temp_max,
            humidity : jsonRes.main.humidity,
            feelsLike : jsonRes.main.feels_like,
            weather : jsonRes.weather[0].description,
        };
        console.log(result);
        return result;
    }
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
    };

    return (
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required
            value={city}
            onChange={handleChange}/>
            <br /><br />
      <Button variant='contained' 
              type='submit'>
        search</Button>
        </form>
        </div>
    );
}