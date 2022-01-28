import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Chip, FormControlLabel, Checkbox } from '@mui/material';
import TableSide from './TableSide';

export default function Checkout() {
  const [number,setNumber] = useState()
  const filters = ["Dine In", "To Go", "Delivery"];
  const handleClick = (e) => {
    console.log(e.target.value)
  }
  return (
    <Container className="p-0" fluid>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label" size="small">Table</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={number}
          label="Table No."
          size="small"
          onChange={() => setNumber(number)}
          className="change-bg"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField id="filled-basic" className="change-bg-2" label="Name" variant="filled" size="small" helperText="Balance Due; Rs 000.00" />
      <div className="d-flex flex-wap justify-content-center my-3">
        {filters.map((filter, index) => (
          <div className="mx-2"><Chip key={index} label={filter} variant="primary" style={{backgroundColor: "#06D6A0", color: "white"}} onClick={handleClick} /></div>
        ))}
      </div>
      <TableSide />
      <Container fluid className="m-0" style={{backgroundColor: "#e7e4fc"}}>
        <div className="d-flex justify-content-between">
          <div>Sub Total</div>
          <div>Rs.0000.00</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Discount</div>
          <div>Rs.0000.00</div>
        </div>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="End"
          labelPlacement="end"
        />
        <div className="d-flex justify-content-between">
          <div><strong>Total</strong></div>
          <div><strong>Rs.0000.00</strong></div>
        </div>
        <div className="d-flex justify-content-between">
          <Button>
            Save
          </Button>
          <Button>
            Pay
          </Button>
          <Button>
            Pay later
          </Button>
        </div>
      </Container>
    </Container>
  );
}
