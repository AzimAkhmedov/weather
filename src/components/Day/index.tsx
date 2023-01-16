import { dataModel } from "../../app/models/weather";
import React from "react";
// import moon from "../../assets/icons/moon.svg";
// import sun from "../../assets/sun.svg";
// import clouds from "../../assets/clouds.svg";
// import cloudwithrain from "../../assets/cloudwithrain.svg";
// import wind from "../../assets/wind.svg";
import "./index.scss";
// import { ReactComponent as moon } from  "../../assets/icons/moon.svg";
const moon = require("../../assets/icons/sun.svg") as string;

const Day = ({ date, dayTemp, nightTemp, weather, time, wind }: dataModel) => {
  return (
    <div className="period">
      <div className="date">{date}</div>

      <div className="icon-container">
        <img className="icon" src={moon} alt="" />
        <div className="weather">{weather}</div>
      </div>

      <div className="time">{time}</div>
      <div className="info">
        <div className="wind">{wind}</div>
        <div className="temp">
          Днем:{dayTemp}
          Ночью:{nightTemp}
        </div>
      </div>
    </div>
  );
};

export default Day;
