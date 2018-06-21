import axios from 'axios';

const API_KEY = "3e3c1c0b64e7301e340d2ee2547b3832";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const measureUnits = "&units=metric";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city, country) {
    const url = `${ROOT_URL}&q=${city},${country}${measureUnits}`;
    const request = axios.get(url);


    //console.log("Request:",request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}