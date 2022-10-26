import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { weatherModel } from '../../app/models/weather'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { GetWeather } from '../../store/modules/weather'
import './style.scss'
const MainPage: FC = () => {
    const [data, setData] = useState([])
    const test = async () => {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=efa9b2c365ff6d768ba4a6bc188cdff2&units=metric&cnt=5")
        setData(response.data)
    }
    const { weather } = useAppSelector((state) => state.weather)
    const dispatch = useAppDispatch()
    useEffect(() => {
        test()
        dispatch(GetWeather)
    }, [])
    useEffect(() => {
        console.log(weather);
        console.log(data);
        
    }, [weather])
    return (
        <div className='folder'>
            {weather.map((e) => e.list)}
            Main Page
        </div>
    )
}

export default MainPage