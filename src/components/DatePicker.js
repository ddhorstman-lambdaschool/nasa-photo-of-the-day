import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import stringifyDate from "./StringifyDate";

export default function DatePicker({ isLoading, currentDate, date, setDate }) {
  return (
    <div>
      <ButtonGroup>
        <Button
          disabled={isLoading}
          color="primary"
          onClick={() =>
            setDate(new Date(date.getTime() - 1000 * 60 * 60 * 24))
          }
        >
          Previous
        </Button>
        <Button
          color="primary"
          disabled={
            isLoading ||
            stringifyDate(date, "Y-m-d") === stringifyDate(currentDate, "Y-m-d")
          }
          onClick={() =>
            setDate(new Date(date.getTime() + 1000 * 60 * 60 * 24))
          }
        >
          Next
        </Button>
      </ButtonGroup>
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
