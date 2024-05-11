import React from "react";
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';

class Vehicle extends React.Component {

    render() {

        if ( this.props.selected === null) {
            return (
                <Card className="w-50 align-self-start">
                    <Card.Body>
                        <Card.Title>No Vehicle Selected</Card.Title>
                        <Card.Text>
                            Click a Vehicle on the left to see details.
                        </Card.Text>
                    </Card.Body>
                    </Card>
            )
        }else {
let {manufacturer, model, vin, fuel, type, color} = this.props.selected


            return (

<Card className="w-50 align-self-start">
  <Card.Img variant="top" src={`https://via.placeholder.com/180x150?text=${manufacturer} ${model}`} />
  <Card.Body>
    <Card.Title>{manufacturer} {model}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{vin}</Card.Subtitle>
    <Card.Text>
      This is a wonderful {fuel}-powered {color} {type}.
    </Card.Text>
    <Button>Buy Now!</Button>
  </Card.Body>
</Card>
            
            )
        }
    
    }
        }
        

export default Vehicle;