import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import DatePicker from "./components/DatePicker";
import "./App.css";

/** Create a date string based on the PHP "date" function
 *
 * @param {Date} date A JS Date object
 * @param {string} formatString A string specifing the format of the output.
 * See https://www.php.net/manual/en/function.date.php for details on recognized characters.
 * @returns {string} A string representing the date/time.
 */
function stringifyDate(date, formatString) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const monthNames = [
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
    "December"
  ];
  return Array.from(formatString)
    .map(char => {
      switch (char) {
        case "Y":
          return date.getFullYear();
        case "m":
          return date.getMonth() + 1 >= 10
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1);
        case "d":
          return date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
        default:
          return char;
      }
    })
    .reduce((ac, val) => ac + val.toString(), "");
}

function App() {
  const currentDate = new Date(Date.now());
  console.log(stringifyDate(currentDate, "Y-m-d"));
  let [date, setDate] = useState(stringifyDate(currentDate, "Y-m-d"));
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
