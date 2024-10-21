import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Pune" ,
        temp : 27.81,
        tempMin : 27.81,
        tempMax : 27.81,
        humidity : 67 ,
        feelsLike : 29.94 ,
        weather : "haze" ,
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign : "center"}}>
            <h1>Weather App </h1>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
            </div>
            
    );
}