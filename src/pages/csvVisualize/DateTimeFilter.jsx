import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React from 'react';

const DateTimeFilter = ({ setMinDate, setMaxDate }) => {


  const onFromChange = e => {
    setMinDate(e)
  }
  const onToChange = e => {
    setMaxDate(e)
  }
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        from <DatePicker onChange={onFromChange} />
        to <DatePicker onChange={onToChange} defaultValue={dayjs( new Date())} />
      </LocalizationProvider>
    </div>
  )
}

export default DateTimeFilter