import { AxiosPromise } from "axios"
import { weatherModel } from  "../app/models/weather"

export interface getWeatherModel{
    
    cod?: string
    message?: string
    cnt?:number
    list?:[
            temp: number,
            feels_like:number ,
            temp_min: number,
            temp_max: number,
            pressure: number,
            sea_level: number,
            grnd_level: number,
            humidity: number,
            temp_kf: number,
        ]
     weather?:[
        id:string,
        main: string,
        description:string,
        icon: string
     ]
     clouds?:[
        all:number,

     ]
     wind?:[
          speed:number,
     ]
     visibility?:string
}


// export interface getAllWeather {
//      ()=>
// }
