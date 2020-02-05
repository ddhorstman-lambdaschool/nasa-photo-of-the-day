import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import DatePicker from "./components/DatePicker";
import "./App.css";

/**Generate a date string of the form YYYY-MM-DD from a Date object
 *
 * @param {Date} date A date object representing the chosen Date
 * @returns {string} The date formatted as YYYY-MM-DD
 */
function stringifyDate(date) {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 >= 10
      ? date.getMonth() + 1
      : "0" + (date.getMonth() + 1)
  }-${date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()}`;
}

function App() {
  const currentDate = new Date(Date.now());
  let [date, setDate] = useState(stringifyDate(currentDate));
  const [apodData, setApodData] = useState({
    date: "",
    explanation: "",
    media_type: "",
    title: "Loading Content",
    url: ""
  });
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=knlstgdvAzayUHYdQaCAWQqPNlmdjLWeROosNjGd&date=${date}`
      )
      .then(r => setApodData(r.data))
      .catch(e => console.log(e));
  }, [date]);
  return (
    <div className="App">
      <DatePicker date={date} setDate={setDate} />
      <Card data={apodData} />
    </div>
  );
}

export default App;
