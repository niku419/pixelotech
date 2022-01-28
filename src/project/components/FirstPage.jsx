import React from 'react';
import { Container } from 'react-bootstrap';
import HorizontalTab from './HorizontalTab';
import Checkout from './Checkout';

export default function FirstPage() {
  return (
      <Container fluid className="d-flex row p-0 pt-5" style={{width: "90vw"}}>
        <div className="col-8" style={{backgroundColor: "#f3f7ff"}}>
          <HorizontalTab />
        </div>
        <div className="col-4">
          <Checkout />
        </div>
      </Container>
    );
}
