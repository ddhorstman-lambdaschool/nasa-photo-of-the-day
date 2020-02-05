import React, { useState } from "react";
export default function DatePicker({ date, setDate }) {
  const [currentDate, updateCurrentDate] = useState(date);
  return (
    <div>
      <label htmlFor="date-picker">Select date: </label>
      <input
        id="date-picker"
        type="date"
        value={currentDate}
        max={currentDate}
        onChange={e => {
          updateCurrentDate(e.target.value);
          setDate(e.target.value);
        }}
      />
    </div>
  );
}
