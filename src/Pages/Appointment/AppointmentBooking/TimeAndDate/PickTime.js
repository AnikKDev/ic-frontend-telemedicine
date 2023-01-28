import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
const PickTime = () => {
  const [value, setValue] = React.useState(dayjs("2018-01-01T00:00:00.000Z"));
  console.log(value);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack>
          <TimePicker
            value={value}
            onChange={setValue}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
};

export default PickTime;
