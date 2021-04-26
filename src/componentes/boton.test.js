import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import Boton from './boton';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Boton />, div)
});

it('renders button correctly', ()=>{
    const { getByTestId } = render(<Boton name = '+'></Boton>)
    expect(getByTestId('boton')).toHaveTextContent('+')
});

it('renders button correctly', ()=>{
    const { getByTestId } = render(<Boton name = '+/-'></Boton>)
    expect(getByTestId('boton')).toHaveTextContent('+/-')
});

it('renders button correctly', ()=>{
    const { getByTestId } = render(<Boton name = '='></Boton>)
    expect(getByTestId('boton')).toHaveTextContent('=')
});

it('matches snapshot', () =>{
    const tree = renderer.create(<Boton name='-'/>).toJSON();
    expect(tree).toMatchSnapshot();
});