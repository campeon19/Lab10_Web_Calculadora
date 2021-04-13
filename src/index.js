/*
* autor: Christian Perez
* Referencia: https://ahfarmer.github.io/calculator/
*/


import React from 'react';
import ReactDom from 'react-dom';
import Display from './componentes/display';
import BotonDisplay from './componentes/botonDisplay';
import './index.css';
import calcular from './componentes/util/calcular';

class App extends React.Component{

    state = {
        total: null,
        siguiente: null,
        operacion: null,
    }
    
    render(){
        return(
            <div className='component-app'>
                <Display value={this.state.siguiente || this.state.total || 0}></Display>
                <BotonDisplay clickHandler={this.handleClick}></BotonDisplay>
            </div>
        );
    }
}

ReactDom.render(<App></App>, document.getElementById('root'));