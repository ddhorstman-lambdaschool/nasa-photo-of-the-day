import React from "react";
import { Button } from "reactstrap";
export default function DatePicker({ date, setDate }) {
  return (
    <div>
      <Button
        onClick={() => setDate(new Date(date.getTime() - 1000 * 60 * 60 * 24))}
      >
        Previous
      </Button>{" "}
      <Button
        onClick={() => setDate(new Date(date.getTime() + 1000 * 60 * 60 * 24))}
      >
        Next
      </Button>
    </div>
  );
}
/*
<label htmlFor="date-picker">Select date: </label>
  <!--<input
    id="date-picker"
    type="date"
    value={currentDate}
    max={currentDate}
    onChange={e => {
      updateCurrentDate(e.target.value);
      setDate(e.target.value);
    }}
  />
*/
