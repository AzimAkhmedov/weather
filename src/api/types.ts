
export interface getWeatherModel {
   dt: number
   main: {
      temp_max: number
      temp_min: number
   };
   dt_txt: string
   weather: { main: string }
   wind: { speed: number }
};
