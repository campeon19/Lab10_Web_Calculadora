import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Boton from './boton';

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Boton />, div)
})

/*it('renders button correctly', ()=>{
    render(<Boton></Boton>)
})*/