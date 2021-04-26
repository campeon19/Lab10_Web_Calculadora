import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './botonDisplay.css';
import Boton from './boton';

class BotonDisplay extends React.Component{
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    }

    render(){
        return (
          <div className="component-button-display">
            <div>
              <Boton data-testid='boton_AC' name="AC" clickHandler={this.handleClick} />
              <Boton data-testid='boton_+/-' name="+/-" clickHandler={this.handleClick} />
              <Boton data-testid='boton_%' name="%" clickHandler={this.handleClick} />
              <Boton data-testid='boton_/' name="/" clickHandler={this.handleClick} blue />
            </div>
            <div>
              <Boton data-testid='boton_7' name="7" clickHandler={this.handleClick} />
              <Boton data-testid='boton_8' name="8" clickHandler={this.handleClick} />
              <Boton data-testid='boton_9' name="9" clickHandler={this.handleClick} />
              <Boton data-testid='boton_x' name="x" clickHandler={this.handleClick} blue />
            </div>
            <div>
              <Boton data-testid='boton_4' name="4" clickHandler={this.handleClick} />
              <Boton data-testid='boton_5' name="5" clickHandler={this.handleClick} />
              <Boton data-testid='boton_6' name="6" clickHandler={this.handleClick} />
              <Boton data-testid='boton_-' name="-" clickHandler={this.handleClick} blue />
            </div>
            <div>
              <Boton data-testid='boton_1' name="1" clickHandler={this.handleClick} />
              <Boton data-testid='boton_2' name="2" clickHandler={this.handleClick} />
              <Boton data-testid='boton_3' name="3" clickHandler={this.handleClick} />
              <Boton data-testid='boton_+' name="+" clickHandler={this.handleClick} blue />
            </div>
            <div>
              <Boton data-testid='boton_0' name="0" clickHandler={this.handleClick} wide />
              <Boton data-testid='boton_.' name="." clickHandler={this.handleClick} />
              <Boton data-testid='boton_=' name="=" clickHandler={this.handleClick} blue />
            </div>
          </div>
        );
    }
};

export default BotonDisplay;