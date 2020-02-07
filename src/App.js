import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./components/NasaCard";
import DatePicker from "./components/DatePicker";
import stringifyDate from "./components/StringifyDate";
import "./App.css";

function App() {
  const starterApodData = {
    date: "",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor odio, mollis a arcu a, pharetra facilisis risus. Duis dignissim a justo at ultricies. Nullam sapien diam, ornare eu cursus ut, lobortis ut enim. Nulla accumsan justo justo, sit amet pellentesque magna semper eu. Proin tempor, orci a suscipit volutpat, felis quam ultricies tortor, quis laoreet libero odio at massa. Etiam sit amet nisi vitae libero egestas aliquet non at justo. Nam eget tortor arcu. Cras ipsum arcu, maximus eu consectetur ut, imperdiet non lectus. Proin viverra, lacus ut posuere pharetra, turpis augue sagittis mi, ac tempor neque libero et eros. Maecenas sollicitudin dui a velit fringilla ornare. Vestibulum eu neque sodales, pretium ante eu, lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis quis nulla est. Nam sit amet ultrices ipsum, feugiat dictum dui. Donec eget enim quam. Curabitur nibh libero, sagittis et tempus laoreet, semper et nisi.",
    media_type: "image",
    title: "Content Loading...",
    url:
      "https://via.placeholder.com/580x380?text=NASA+Astronomy+Photo+Of+The+Day"
  };
  let currentDate = new Date();
  //if the date doesn't match the UTC date, use yesterday instead
  if (currentDate.getHours() - currentDate.getTimezoneOffset() / 60 < 0) {
    currentDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
  }
  let [date, setDate] = useState(currentDate);
  const [apodData, setApodData] = useState(starterApodData);
  const [isLoading, setLoadingState] = useState(true);
  useEffect(() => {
    setLoadingState(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=knlstgdvAzayUHYdQaCAWQqPNlmdjLWeROosNjGd&date=${stringifyDate(
          date,
          "Y-m-d"
        )}`
      )
      .then(r => setApodData(r.data))
      .then(() => setLoadingState(false))
      .catch(e => console.error(e));
  }, [date]);
  return (
    <div className="App">
      <NasaCard data={apodData}>
        <DatePicker
          isLoading={isLoading}
          currentDate={currentDate}
          date={date}
          setDate={setDate}
        />
      </NasaCard>
    </div>
  );
}

export default App;
