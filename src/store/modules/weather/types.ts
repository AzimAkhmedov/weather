import { weatherModel } from "../../../app/models/weather";

export interface weatherState{
    weather: weatherModel[]
    isLoading?: boolean

}