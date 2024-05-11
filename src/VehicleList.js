import React from "react";
import { ListGroup } from "react-bootstrap";



class VehicleList extends React.Component {



    listItem(vehicle, i){
        return (
            <ListGroup.Item key={i} action active={this.props.selected === vehicle} onClick={this.props.onVehicleSelected.bind(this, vehicle)}>
                { vehicle.manufacturer}{ vehicle.model }
            </ListGroup.Item>
        )
    }
    render() {
        return (
            <ListGroup>
                {this.props.vehicles.map((v, i) => this.listItem(v, i))}
            </ListGroup>
            
        )
    }

}

export default VehicleList;