import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { GetAllWeather } from '../../api/getWeather'
import { weatherModel } from '../../app/models/weather'
import './style.scss'
const MainPage: FC = () => {
    // const [data, setData] = useState<weatherModel[]>([])
    let weather: any[];
    const getData = async () => {
        weather: AxiosResponse<weatherModel[]> = await GetAllWeather()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='folder'>
            {weather.map((e) => e.list)}
            Main Page
        </div>
    )
}

export default MainPage