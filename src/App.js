import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import DatePicker from "./components/DatePicker";
import stringifyDate from "./components/StringifyDate";
import "./App.css";

function App() {
  const currentDate = new Date(Date.now());
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
