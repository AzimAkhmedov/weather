import axios from "axios";
import { getWeatherModel } from "./types";


export const GetAllWeather = async () => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=efa9b2c365ff6d768ba4a6bc188cdff2&units=metric&cnt=5')
    const temp: any[] = []

    response.data.list.map((e: getWeatherModel) => {

        temp.push({
            date: e.dt_txt.slice(5, 10),
            time: e.dt_txt.slice(11, 16),
            wind: e.wind.speed,
            dayTemp: e.main.temp_max,
            nightTemp: e.main.temp_min,
            weather: e.weather.main,
        });
    })

    return temp
}



