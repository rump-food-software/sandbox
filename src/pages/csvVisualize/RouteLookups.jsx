import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import Spinner from '../../_utils/Spinner';

const RouteLookups = ({ rows, fileFields }) => {
  const [routes, setRoutes] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [selectedField, setSelectedField] = useState("Route");
  const [filteredDates, setFilteredDates] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [filteredRows, setFilteredRows] = useState();
  const getWeekday = e => {
    if (e.startsWith("SA")) return "Saturday";
    if (e.startsWith("F")) return "Friday";
    if (e.startsWith("TH")) return "Thursday";
    if (e.startsWith("W")) return "Wednesday";
    if (e.startsWith("T")) return "Tuesday";
    if (e.startsWith("M")) return "Monday";
    if (e.startsWith("SU")) return "Sunday";
  }
  useEffect(() => {
    if (rows && selectedDate && selectedValue) {
      const newRows = rows.filter(r => r["Timestamp Date"] === selectedDate && r["Route"] === selectedValue)
      setFilteredRows(newRows);
    }
  }, [rows, selectedDate, selectedValue])

  const dateGridColumns = [
    { field: "Route", headerName: "Route" },
    { field: "Weekday", headerName: "Weekday" },
    { field: "Timestamp Date", headerName: "Timestamp Date" },
    { field: "Bin Total", headerName: "Bin Total" }
  ]
  const routeDetailsGridColumns = [
    { field: "Route", headerName: "Route" },
    { field: "Timestamp Date", headerName: "Timestamp Date" },
    { field: "Timestamp Time", headerName: "Timestamp Time" },
    { field: "Order", headerName: "Order" },
    { field: "Customer", headerName: "Name", width: 200 },
    { field: "Bins", headerName: "Bins", valueGetter: params => getBinTotal(params.row) }
  ]
  useEffect(() => {
    if (rows) {
      const uniqueValues = [];
      rows.forEach(element => {
        if (uniqueValues.indexOf(element[selectedField]) < 0) {
          uniqueValues.push(element[selectedField])
        }
      });
      setRoutes(uniqueValues)
    }
  }, [rows, selectedField])
  const getBinTotal = r => {
    const binTypes = ["17-Gallon Bin - Quantity",
      "Slim Jim - Quantity",
      "32-gallon toter - Quantity",
      "5-gallon Bucket - Quantity",
      "64-gallon toter - Quantity",
      "Animal Bedding - Quantity",
      "CSC - Quantity",
      "DropOff - Quantity",
      "Event - Quantity",
      "Spent Grain - Quantity"]
    let total = 0;
    binTypes.forEach(b => {
      total += Number(r[b]);
    })
    return total;
  }
  useEffect(() => {

    const filteredDateFromRows = [];
    rows
      .filter(r => r[selectedField] === selectedValue)
      .forEach(r => {
        const index = filteredDateFromRows.map(d => d["Timestamp Date"]).indexOf(r["Timestamp Date"]);
        if (index < 0) {
          filteredDateFromRows.push({ "Timestamp Date": r["Timestamp Date"], "Bin Total": getBinTotal(r) });
        }
        else {
          const match = filteredDateFromRows[index];
          match["Bin Total"] += getBinTotal(r);
        }
      })
    const valueToSet = filteredDateFromRows
      .sort((a, b) => (new Date(a) > new Date(b)))
      .map((r, i) => ({ "Timestamp Date": r["Timestamp Date"], "Route": selectedValue, "Weekday": getWeekday(selectedValue), "Bin Total": r["Bin Total"], id: i }))
    setFilteredDates(valueToSet);
  }, [rows, selectedField, selectedValue])
  if (!rows || !routes) return <Spinner />
  const onFieldChange = e => {
    setSelectedField(e.target.value)
  }
  const onValueChange = e => {
    setSelectedValue(e.target.value)
  }
  const onRowSelectionModelChange = selectedIndex => {
    setSelectedDate(filteredDates[selectedIndex]["Timestamp Date"])
  }
  return (
    <div>
      <h2>Route Lookups</h2>
      {fileFields &&
        <span>
          filter:
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id="demo-simple-select-label">Field</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Field"
              onChange={onFieldChange}
              defaultValue="Route"
            >
              {fileFields.map((f, i) =>
                <MenuItem value={f} key={i}>{f}</MenuItem>
              )}
            </Select>
          </FormControl>
        </span>
      }
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-label">Value</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Field"
          onChange={onValueChange}
          defaultValue=""
        >
          {routes.map((f, i) =>
            <MenuItem value={f} key={i}>{f}</MenuItem>
          )}
        </Select>
      </FormControl>
      <Container maxWidth="md">
        <div>recent dates under the selected value</div>

        <div style={{ height: 400, width: 500 }}>
          <DataGrid
            rows={filteredDates}
            columns={dateGridColumns}
            onRowSelectionModelChange={onRowSelectionModelChange}
          />
        </div>
        {filteredRows && routeDetailsGridColumns &&
          <div style={{ height: 400, width: 750 }}>
            <div>details for the selected route</div>
            <DataGrid
              rows={filteredRows}
              columns={routeDetailsGridColumns}
            />
          </div>
        }
      </Container>
    </div>
  )
}

export default RouteLookups