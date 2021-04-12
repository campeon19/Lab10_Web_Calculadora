import React from 'react';
import ReactDom from 'react-dom';
import Display from './componentes/display';

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
            </div>
        );
    }
}

ReactDom.render(<App></App>, document.getElementById('root'));