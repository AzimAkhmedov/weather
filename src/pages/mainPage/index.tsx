import axios, { AxiosResponse } from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { GetAllWeather } from '../../api/getWeather'
import { weatherModel, weatherModelArray } from '../../app/models/weather'
import './style.scss'
const MainPage: FC = () => {
    const [data, setData] = useState<weatherModel[]>([])
    // const res: AxiosResponse<weatherModel[]> = GetAllWeather()
    const grabData = async () => {
        setData(await GetAllWeather())
    }

    useEffect(() => {
        grabData()
    }, [])
    useEffect(() => {
        console.log( data);
    }, [data])
    return (
        <div className='folder'>
            {/* {data.map((e) => e.list)} */}
            {/* {data.map(e => e.data)} */}
            Main Page
        </div>
    )
}

export default MainPage