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
        return(
            <div className="component-button-display">
                <div>
                    <Boton name="AC" clickHandler={this.handleClick}/>
                    <Boton name="+/-" clickHandler={this.handleClick}/>
                    <Boton name="%" clickHandler={this.handleClick}/>
                    <Boton name="/" clickHandler={this.handleClick} blue/>
                </div>
                <div>
                    <Boton name="7" clickHandler={this.handleClick}/>
                    <Boton name="8" clickHandler={this.handleClick}/>
                    <Boton name="9" clickHandler={this.handleClick}/>
                    <Boton name="x" clickHandler={this.handleClick} blue/>
                </div>
                <div>
                    <Boton name="4" clickHandler={this.handleClick}/>
                    <Boton name="5" clickHandler={this.handleClick}/>
                    <Boton name="6" clickHandler={this.handleClick}/>
                    <Boton name="-" clickHandler={this.handleClick} blue/>
                </div>
                <div>
                    <Boton name="1" clickHandler={this.handleClick}/>
                    <Boton name="2" clickHandler={this.handleClick}/>
                    <Boton name="3" clickHandler={this.handleClick}/>
                    <Boton name="+" clickHandler={this.handleClick} blue/>
                </div>
                <div>
                    <Boton name="0" clickhandler={this.handleClick} wide/>
                    <Boton name="." clickhandler={this.handleClick}/>
                    <Boton name="=" clickhandler={this.handleClick} blue/>
                </div>
            </div>
        )
    }
};

export default BotonDisplay;