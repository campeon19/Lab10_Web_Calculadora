import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import BotonDisplay from './botonDisplay';

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<BotonDisplay />, div)
})

