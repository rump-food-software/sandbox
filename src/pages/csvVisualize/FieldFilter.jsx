import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const FieldFilter = ({ rows, fileFields, setSelectedFilter }) => {
  const [selectedField, setSelectedField] = useState();
  const [selectedFieldValues, setSelectedFieldValues] = useState();
  const onFieldChange = e => {
    const field = e.target.value;
    setSelectedField(field)
    const values = [...new Set(rows.map(f => f[field]))];

    setSelectedFieldValues(values.sort());
  }
  const onValueChange = e => {
    const targetValue = e.target.value;
    setSelectedFilter([selectedField, targetValue]);
    // const filteredRows = rows.filter(r => r[selectedField] === targetValue);
    // setFilteredRows(filteredRows)

    // setTotalsRows([getTotalsRow(filteredRows, fileFields)])
  }
  return (
    <span>
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
              defaultValue=""
            >
              {fileFields.map((f, i) =>
                <MenuItem value={f} key={i}>{f}</MenuItem>
              )}
            </Select>
          </FormControl>
        </span>
      }
      {selectedField &&
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">Values</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Values"
            onChange={onValueChange}
            defaultValue=""
          >
            {selectedFieldValues.map((f, i) =>
              <MenuItem value={f} key={i}>{f}</MenuItem>
            )}
          </Select>
        </FormControl>
      }
    </span>
  )
}

export default FieldFilter