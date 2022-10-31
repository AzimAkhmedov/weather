import axios from "axios";
import { getAllWeather } from "./types";

export const GetAllWeather:getAllWeather= async (data)=>{
              const response = await axios.get( 'https://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=efa9b2c365ff6d768ba4a6bc188cdff2&units=metric&cnt=5')
              return response.data
}