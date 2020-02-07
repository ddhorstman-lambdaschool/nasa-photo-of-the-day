import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import DatePicker from "./components/DatePicker";
import stringifyDate from "./components/StringifyDate";
import "./App.css";

function App() {
  const starterApodData = {
    date: "",
    explanation: "",
    media_type: "",
    title: "Loading Content",
    url: ""
  };
  let currentDate = new Date();
  //if the date doesn't match the UTC date, use yesterday instead
  if (currentDate.getHours() - currentDate.getTimezoneOffset() / 60 < 0) {
    currentDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
  }
  let [date, setDate] = useState(currentDate);
  const [apodData, setApodData] = useState(starterApodData);
  useEffect(() => {
    //setApodData(starterApodData);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=knlstgdvAzayUHYdQaCAWQqPNlmdjLWeROosNjGd&date=${stringifyDate(
          date,
          "Y-m-d"
        )}`
      )
      .then(r => setApodData(r.data))
      .catch(e => console.error(e));
  }, [date]);
  return (
    <div className="App">
      <DatePicker date={date} setDate={setDate} />
      <Card data={apodData} />
    </div>
  );
}

export default App;
