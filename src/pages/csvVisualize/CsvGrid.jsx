import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const CsvGrid = ({ filteredRows, columns }) => {
  return (
    <div>
      {filteredRows &&
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
          />
        </div>
      }
    </div>
  )
}

export default CsvGrid