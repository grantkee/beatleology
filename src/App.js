import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor ( props ) {
    super(props);

    this.state = {
      counter: 0,
      total: 0
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Beatleology Quiz</h1>
        </div>
        <Question content="Which Beatle are you?" />
      </div>
    )
  }
}

export default App;