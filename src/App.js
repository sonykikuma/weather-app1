import React from "react";
const api = {
  key: "30a812f7ba602825b83c734089a18e4f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="App">
      <main>
        <div className="Search-box">
          <input type="text" className="search-bar" placeholder="Search...." />
        </div>
        <div className="location-box">
          <div className="location">NYC,US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15&deg;</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}
export default App;
