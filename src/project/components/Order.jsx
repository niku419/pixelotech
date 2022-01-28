import React from 'react';
import { TextField, Chip, Card } from '@mui/material'
import { Row, Col } from 'react-bootstrap';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';

export default function Order() {
  const filters = ["Cold Dishes", "Hot Dishes", "Soup", "Pizza", "Pasta", "Grill", "Salad", "Dessert", "Beverage"];
  const cards = [
    {name: "Cheesy Chicken Pasta", price: "10.00", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Cheesy Chicken Pasta", price: "10.00", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Cheesy Chicken Pasta", price: "10.00", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Cheesy Chicken Pasta", price: "10.00", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Cheesy Chicken Pasta", price: "10.00", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Cheesy Chicken Pasta", price: "10.00", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Cheesy Chicken Pasta", price: "10.00", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
  ]
  const handleClick = () => {
    console.log("Clicked")
  }
  return (
    <div>
      <h1><strong>Order</strong></h1>
      <TextField 
        size="small"
        id="filled-basic" 
        label="search" 
        variant="filled" 
        placeholder='search for foods, drinks etc' 
        style={{width: "60%", height: "30%", backgroundColor: "transparent"}}
      />
      <div className="d-flex flex-wap justify-content-center my-3">
        {filters.map((filter, index) => (
          <div className="mx-2">
            <Chip key={index} style={{backgroundColor: "#604BE8", color: "white"}} label={filter} variant="primary" onClick={handleClick} />
          </div>
        ))}
      </div>
      <Row className="d-flex mb-3">
        {cards.map(card => (
          <Col className="col-lg-3 mb-3">
            <Card className="p-3">
              <div className="d-flex justify-content-center">
                <RiceBowlIcon style={{color: "#ffb236", height: "50px", width: "50px"}}/>
              </div>
              <div className="d-flex justify-content-center">
                <div><strong>{card.name}</strong></div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="text-muted">Rs. {card.price}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>  
    </div>
  );
}
