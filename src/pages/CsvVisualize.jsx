import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Papa from 'papaparse';
import React, { useState } from 'react';

const CsvVisualize = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [fileFields, setFileFields] = useState();
  const [selectedField, setSelectedField] = useState();
  const [selectedFieldValues, setSelectedFieldValues] = useState();
  const [rows, setRows] = useState();
  const [filteredRows, setFilteredRows] = useState();
  const [totalsRows, setTotalsRows] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    Papa.parse(selectedFile, {
      header: true,
      complete: results => {
        const { data, meta } = results;
        setFileFields(meta.fields);

        setRows(addRowIds(data));
        setFilteredRows(addRowIds(data));

        setTotalsRows([getTotalsRow(data, meta.fields)])
      }
    })
  };
  const getTotalForRow = (arr, r) => {
    return arr.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue[r])
    }, 0)
  }
  const getTotalsRow = (arr, fileFields) => {
    const rowObj = { id: 1 };
    fileFields.map(f => {
      const sum = getTotalForRow(arr, f);
      return rowObj[f] = sum
    })
    return rowObj;
  }
  const addRowIds = arr => {
    return arr.map((obj, i) => ({ ...obj, id: i }))
  }
  const getDataCols = cols => {
    const dataCols = cols.map(c => ({ field: c, headerName: c }))
    return dataCols;
  }
  const onFieldChange = e => {
    const field = e.target.value;
    setSelectedField(field)
    const values = [...new Set(rows.map(f => f[field]))];

    setSelectedFieldValues(values.sort());
  }
  const onValueChange = e => {
    const targetValue = e.target.value;
    const filteredRows = rows.filter(r => r[selectedField] === targetValue);
    setFilteredRows(filteredRows)

    setTotalsRows([getTotalsRow(filteredRows, fileFields)])
  }
  return (
    <div>hi sully
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked && <span>👍</span>}
      <Button onClick={handleSubmission}>Submit</Button>
      <hr />
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
            >
              {fileFields.map(f =>
                <MenuItem value={f}>{f}</MenuItem>
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
          >
            {selectedFieldValues.map(f =>
              <MenuItem value={f}>{f}</MenuItem>
            )}
          </Select>
        </FormControl>
      }
      {filteredRows &&
        <div style={{ height: 200, width: '100%' }}>
          <DataGrid
            rows={totalsRows}
            columns={getDataCols(fileFields)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
          <span>totals</span>
        </div>
      }
      {filteredRows &&
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={getDataCols(fileFields)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
          <span>totals</span>
        </div>
      }
    </div>
  )
}

export default CsvVisualize
