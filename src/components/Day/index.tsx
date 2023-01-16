import React from "react";
import { dataModel } from "../../app/models/weather";
import "./index.scss";

import {
  clouds,
  grapgh2,
  graph1,
  moon,
  sun,
  windIco,
  moonAndClouds,
  cloudwithrain,
} from "../../assets/icons/index";

const Day = ({ date, dayTemp, nightTemp, weather, time, wind }: dataModel) => {
  const displayIcon = (weather: { main: string }) => {
    switch (weather.main) {
      case "Clear":
        return sun;
      case "Clouds":
        return clouds;
      case "Rain":
        return cloudwithrain;
      default:
        return sun;
    }
  };
  return (
    <div className="period">
      <div className="date">{date}</div>

      <div className="icon-container">
        <div className="weather">
          <img src={displayIcon(weather)} alt="" />
        </div>
      </div>

      <div className="time">{time}</div>
      <div className="info">
        <div className="wind">
          <img src={windIco} alt="" />
          {wind}
        </div>
        <div className="temp">
          Днем:{dayTemp}
          Ночью:{nightTemp}
        </div>
      </div>
    </div>
  );
};

export default Day;
