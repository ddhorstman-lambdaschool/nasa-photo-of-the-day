import React from "react";
import { ButtonGroup, Button, Spinner } from "reactstrap";
import stringifyDate from "./StringifyDate";

export default function DatePicker({ isLoading, currentDate, date, setDate }) {
  return (
    <div>
      <ButtonGroup style={{ margin: "10px" }}>
        <Button
          color="primary"
          onClick={() =>
            setDate(new Date(date.getTime() - 1000 * 60 * 60 * 24))
          }
        >
          {isLoading ? <Spinner size="sm" /> : "Previous"}
        </Button>
        {isLoading || (
          <Button
            color="primary"
            disabled={
              stringifyDate(date, "Y-m-d") ===
              stringifyDate(currentDate, "Y-m-d")
            }
            onClick={() =>
              setDate(new Date(date.getTime() + 1000 * 60 * 60 * 24))
            }
          >
            Next
          </Button>
        )}
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
