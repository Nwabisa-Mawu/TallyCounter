// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";

const Counter = () => {
  const max_number = 10;
  const min_number = -10;
  const [displayNum, setDisplayNum] = useState(0);

  const subtractHandler = () => {
    if (displayNum > min_number) {
      setDisplayNum(displayNum - 1);
    }
    
  };

  const addHandler = () => {
    if (displayNum < max_number) {
      setDisplayNum(displayNum + 1);
    }
  };

  return (
    <Card className="counter">
      <Card.Body>
        <input className="counter_value" readOnly value={displayNum}></input>

        {/* buttons to control counter */}
        <Container className="counter_actions">
          <button onClick={subtractHandler} 
            className="counter_button counter_button_first"
            disabled={displayNum === min_number}>-</button>
          <button onClick={addHandler} 
            className="counter_button"
            disabled={displayNum === max_number}>+</button>
        </Container>
      </Card.Body>
    </Card>
  )
};

export default Counter;