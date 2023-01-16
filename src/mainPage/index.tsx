import React, { useEffect, useState } from "react";
import { GetAllWeather } from "../api/getWeather";
import { dataModel } from "../app/models/weather";
import Day from "../components/Day";
const MainPage = () => {
  const [data, setData] = useState<dataModel[]>();
  useEffect(() => {
    const res = GetAllWeather();
    res.then((temp) => {
      setData(temp);
    });
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="container">
      {data?.map((e: dataModel) => (
        <Day
          date={e.date}
          dayTemp={e.dayTemp}
          time={e.time}
          nightTemp={e.nightTemp}
          weather={e.weather}
          wind={e.wind}
          key={e.time}
        />
      ))}
    </div>
  );
};

export default MainPage;
