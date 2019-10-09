import React from 'react';
import './App.css';
import Steps from './Steps.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 1
    };
  }

  render() {
    return (
      <div>
        <Steps />
      </div>
    )
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
