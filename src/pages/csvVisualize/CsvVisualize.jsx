import { Button } from '@mui/material';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import Spinner from '../../_utils/Spinner';
import AggregateGrid from './AggregateGrid';
import CsvGrid from './CsvGrid';
import DateTimeFilter from './DateTimeFilter';
import FieldFilter from './FieldFilter';
import RouteLookups from './RouteLookups';

const getTotalsRow = (arr, fileFields) => {
  const rowObj = { id: 1 };
  fileFields.map(f => {
    const sum = getTotalForRow(arr, f);
    return rowObj[f] = sum
  })
  return rowObj;
}
const getTotalForRow = (arr, r) => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue[r])
  }, 0)
}
const CsvVisualize = () => {
  const [isLoading, setIsLoading] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [fileFields, setFileFields] = useState();
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();
  const [filteredRows, setFilteredRows] = useState();
  const [totalsRows, setTotalsRows] = useState();
  const [selectedFilter, setSelectedFilter] = useState();
  const [showRouteLookups, setShowRouteLookups] = useState();

  const [minDate, setMinDate] = useState(new Date("2000/01/01"));
  const [maxDate, setMaxDate] = useState(new Date());

  useEffect(() => {
    if (rows) {

      const timeFilteredRows = rows.filter(r => {
        const rowDate = new Date(r["Timestamp Date"]);
        return minDate <= rowDate && rowDate <= maxDate
      })


      if (selectedFilter) {
        const filteredRows = timeFilteredRows.filter(r => r[selectedFilter[0]] === selectedFilter[1]);

        setFilteredRows(filteredRows)

        setTotalsRows([getTotalsRow(filteredRows, fileFields)])
      }
      else {
        setFilteredRows(timeFilteredRows)

        setTotalsRows([getTotalsRow(timeFilteredRows, fileFields)])

      }
    }
  }, [fileFields, maxDate, minDate, rows, selectedFilter])
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    setIsLoading(true);
    Papa.parse(selectedFile, {
      header: true,
      complete: results => {
        const { data, meta } = results;
        setFileFields(meta.fields);
        setColumns(getDataCols(meta.fields));

        setRows(addRowIds(data));
        setFilteredRows(addRowIds(data));

        setTotalsRows([getTotalsRow(data, meta.fields)])
        setIsLoading(false);
      }
    })
  };
  const addRowIds = arr => {
    return arr.map((obj, i) => ({ ...obj, id: i }))
  }
  const getDataCols = cols => {
    const dataCols = cols.map(c => ({ field: c, headerName: c }))
    return dataCols;
  }
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked && <span>👍</span>}
      <Button onClick={handleSubmission}>Submit</Button>
      <hr />
      {rows && fileFields &&
        <span>
          <Button onClick={() => setShowRouteLookups(!showRouteLookups)}>{showRouteLookups ? `all data` : `route lookups`}</Button>
          {!showRouteLookups &&
            <span>
              <DateTimeFilter setMinDate={setMinDate} setMaxDate={setMaxDate} />

              <FieldFilter rows={rows} fileFields={fileFields} setSelectedFilter={setSelectedFilter} />
              <AggregateGrid filteredRows={filteredRows} totalsRows={totalsRows} columns={columns} />

              <CsvGrid filteredRows={filteredRows} columns={columns} />
            </span>
          }
          {
            showRouteLookups && <RouteLookups rows={rows} fileFields={fileFields} columns={columns} />
          }
        </span>
      }
      {isLoading && <Spinner />}
    </div>
  )
}

export default CsvVisualize
