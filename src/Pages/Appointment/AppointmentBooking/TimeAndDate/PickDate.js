import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};
const PickDate = () => {
  const [value, setValue] = React.useState(new Date().toLocaleDateString());
  console.log(value);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          componentsProps={{
            // pass props `actions={['clear']}` to the actionBar slot
            actionBar: { actions: ["today"] },
          }}
          disablePast={true}
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default PickDate;
