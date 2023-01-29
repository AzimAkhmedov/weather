import React, { useEffect, useState } from "react";
import { GetAllWeather } from "../api/getWeather";
import { dataModel } from "../app/models/weather";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from "recharts";
import Day from "../components/Day";
const MainPage = () => {
  const [data, setData] = useState<dataModel[]>();
  const [loaded, setLoaded] = useState(false);
  const dataLine = [{}];
  const displayChart = () => {
    dataLine.pop();
    data?.forEach((e) => {
      dataLine.push({
        name: e.time,
        temperature: e.dayTemp,
      });
    });

    return (
      <LineChart
        width={window.innerWidth / 1.25}
        height={250}
        data={dataLine}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="basis" dataKey="temperature" stroke="#82ca9d" />
      </LineChart>
    );
  };
  useEffect(() => {
    const res = GetAllWeather();
    res.then((temp) => {
      setData(temp);
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    console.log(dataLine);
  }, [data]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return loaded ? (
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
      {displayChart()}
    </div>
  ) : (
    <div className="loader">
      Loading <span>.</span> <span>.</span>
      <span>.</span>{" "}
    </div>
  );
};

export default MainPage;
