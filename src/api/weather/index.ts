import instance from "../instance";
import { getAllWeather } from "./types";

export const GetAllWeather:getAllWeather=(data)=>{
    return instance.get( 
       "" ,{
        data,
       })
}