import React from 'react';
import ReactDom from 'react-dom';
import Display from './display';
import BotonDisplay from './botonDisplay';
import './App.css';
import calcular from './util/calcular';

class App extends React.Component {
  state = {
    total: null,
    siguiente: null,
    operacion: null,
  };

  handleClick = (buttonName) => {
    this.setState(calcular(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display
          value={this.state.siguiente || this.state.total || 0}
        ></Display>
        <BotonDisplay clickHandler={this.handleClick}></BotonDisplay>
      </div>
    );
  }
}

export default App;