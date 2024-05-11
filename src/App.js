import React from 'react';
import { faker } from '@faker-js/faker';
import VehicleList from './VehicleList';
import { Stack } from 'react-bootstrap';
import Vehicle from './Vehicle';
// import Button from 'react-bootstrap';


class App extends React.Component {
 constructor(props) {
  super(props);
this.state= {vehicles: this.generateData(), selected: null};
this.handleVehicleSelected = this.handleVehicleSelected.bind(this);
}
 
 generateData(){
let vehicles = [];

  for (let i = 0; i < 10; i++) {
    vehicles.push({
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      type: faker.vehicle.type(),
      fuel: faker.vehicle.fuel(),
      vin: faker.vehicle.vin(),
      color: faker.vehicle.color()
    })
  }
  return vehicles
}
 
handleVehicleSelected(vehicle) {
this.setState({ selected: vehicle})
}

render(){
    return( 
<Stack gap={3} direction="horizontal" className='p-5 col-md-10 offset-md-1'>
   <VehicleList vehicles={this.state.vehicles}  onVehicleSelected={this.handleVehicleSelected} selected={this.state.selected}/>
   <Vehicle selected={this.state.selected} />
</Stack>
    )
  }
}
export default App;