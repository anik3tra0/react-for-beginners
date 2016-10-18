import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();
    // initial state
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({fishes});
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }
 render() {
   // Always comment outside of JSX
   return (
     <div className="catch-of-the-day">
       <div className="menu">
         <Header tagline="Fresh Seafood Market"/>
       </div>
      <Order />
      <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
     </div>
   )

 }
}

export default App;
