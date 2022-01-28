import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, ButtonGroup, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPercentage, faPlus, faMinus } from '@fortawesome/fontawesome-free-solid'

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120,
    renderCell : (params) => {
      return (
        <div>
          {params.getValue(params.id, 'name')}
        </div>
      )
    }
  },
  {
    field: 'quantity',
    headerName: 'Qty',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120,
    renderCell : (params) => {
      return (
        <ButtonGroup size='small' style={{backgroundColor:'#604BE8'}}>
          <IconButton>
            <FontAwesomeIcon icon={faPlus} size="xs" color='white'/>
          </IconButton>
          <Button variant="filled" style={{backgroundColor: "#604BE8", color: "white"}} size="small">{params.getValue(params.id, 'quantity')}</Button>
          <IconButton>
            <FontAwesomeIcon icon={faMinus} size="xs" color='white'/>
          </IconButton>
        </ButtonGroup>
      )
    }
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell : (params) => {
      return (
        <ButtonGroup>
          <IconButton aria-label="delete" onClick={() => params.deleteRow(params.id)}>
            <FontAwesomeIcon icon={faTrashAlt} size="xs" color="red"/>
          </IconButton>
          <IconButton aria-label="delete" onClick={() => params.deleteRow(params.id)}>
            <FontAwesomeIcon icon={faPercentage} size="xs" color="#06D6A0" />
          </IconButton>  
        </ButtonGroup>
      )
    }
  }
];

const rows = [
  { id: 0, name: 'Cheesy Chicken', price: 0, quantity: 0 },
  { id: 1, name: 'Cheesy Chicken', price: 0, quantity: 0 },
  { id: 2, name: 'Cheesy Chicken', price: 0, quantity: 0 },
];

export default function DataTable() {
  return (
    <div style={{ height: 300, width: '27vw' }}>
      <DataGrid
        columns={columns}
        rows={rows}
      />
    </div>
  );
}
