import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const AggregateGrid = ({ filteredRows, totalsRows, columns }) => {
  return (
    <span>
      {filteredRows &&
        <div style={{ height: 200, width: '100%' }}>
          <DataGrid
            rows={totalsRows}
            columns={columns}
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
    </span>
  )
}

export default AggregateGrid