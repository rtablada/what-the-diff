import React, { Component } from 'react';
import Counter from './components/counter';
import HelloOne from './components/hello-one';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <HelloOne />
      </div>
    );
  }
}

export default App;
