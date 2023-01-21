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
  const displayIcon = (weather: string) => {
    switch (weather) {
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
      <div className="time">{time} </div>
      <div className="info">
        <div className="wind"> 
          Скорость ветра {wind}  <img src={windIco} alt="" />
        </div>
        <div className="temp">
          <p>{dayTemp}</p>
        </div>
      </div>
    </div>
  );
};

export default Day;
