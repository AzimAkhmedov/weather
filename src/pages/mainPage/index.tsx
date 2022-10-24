import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { GetWeather } from '../../store/modules/weather'
import './style.scss'
const MainPage: FC = () => {
    const { weather } = useAppSelector((state) => state.weather)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetWeather)
    }, [])
    useEffect(() => {
        console.log(weather);
    }, [weather])

    return (
        <div className='folder'>
            {weather.map((e) => e.list)}
            MainPage
        </div>
    )
}

export default MainPage